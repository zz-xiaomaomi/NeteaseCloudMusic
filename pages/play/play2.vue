<template>
	<view class="page">
		<view class="song">
			<view>{{songname}}</view>
			<view>{{name}}</view>
		</view>
		<imt-audio autoplay continue :src="url"></imt-audio>
	</view>
</template>

<script>
	import imtAudio from 'components/imt-audio/imt-audio'
	export default {
		data() {
			return {
				url: '',
				songname: '',
				name: '',
			}
		},
		onLoad(params) {
			var me = this;
			var id = params.songid;
			me.songname = params.songname;
			me.name = params.name;
			var serverUrl = me.serverUrl;
			uni.request({
				url: serverUrl + '/song/url?id=' + id,
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						me.url = res.data.data[0].url;
					}
				}
			});
		},
		methods: {
			goBack() {
				history.back()
			},
		},
		components: {
			imtAudio
		}
	}
</script>

<style>
	.song {
		text-align: center;
	}
</style>