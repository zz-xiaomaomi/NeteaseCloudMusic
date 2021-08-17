<template>
	<view class="page">
		<imt-audio autoplay continue :src="audio[now]" @prev="now = now === 0?audio.length-1:now-1" @next="now = now === audio.length-1?0:now+1"></imt-audio>
		<!-- 
			 src: String 音频链接*必须*
			 autoplay: Boolean 是否自动播放*默认false*
			 continue: Boolean 播放完成后是否继续播放下一首，需定义@next事件*默认false*
			 control: Boolean 是否需要上一曲/下一曲按钮*默认true*
			 color: String 主色调*默认#169af3*
			 @prev:点击上一首按钮
			 @next:点击下一首按钮
		  -->
		<view class="list" :class="{active:key===now}" v-for="(item,key) in audio" :key="key" @click="now = key">{{key+1}} -
			{{songs[key].name}} - {{songs[key].ar[0].name}}</view>
	</view>
</template>

<script>
	import imtAudio from 'components/imt-audio/imt-audio'
	export default {
		data() {
			return {
				audio: [],
				now: 0,
				song: [],
				songs: []
			}
		},
		onLoad(params) {
			var me = this;
			me.song = uni.getStorageSync("trackIds");
			for (var i = 0; i <= me.song.length; i++) {
				var id = me.song[i].id;
				me.hqsongurl(id, i);
				me.hqsong(id, i);
			}
		},
		methods: {
			goBack() {
				history.back()
			},
			hqsongurl(id, y) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/song/url?id=' + id,
					method: "GET",
					success: (res) => {

						var audio = res.data.data[0].url;
						me.audio[y] = audio;
					}
				});
			},
			hqsong(id, y) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/song/detail?ids=' + id,
					method: "GET",
					success: (res) => {
						var songs = res.data.songs[0];
						me.songs[y] = songs;
					}
				});
			}
		},
		components: {
			imtAudio
		}
	}
</script>

<style>
	.list {
		font-size: 28upx;
		line-height: 88upx;
		padding-left: 30upx;
		background: #fff;
		border-radius: 10upx;
		margin-top: 20upx;
		color: #333;
	}
</style>
