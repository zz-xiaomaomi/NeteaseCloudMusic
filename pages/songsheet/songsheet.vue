<template>
	<view class="page">
		<view class="heder">
			<image :src="playlist.coverImgUrl" class="heder-img"></image>
			<view class="header-name">{{playlist.name}}</view>
			<view class="header-description">{{playlist.description}}</view>
		</view>
		<view class="play" @click="goPlayAll()">
			<image class="play-img" src="../../static/images/play.jpg"></image>
			<view class="play-name">全部播放</view>
		</view>
		<view v-for="(song, index) in searchsong" @tap="goPlay(song.id, song.name, song.ar[0].name)" class="song">
			<view class="number">{{index + 1}}</view>
			<view class="song-name">
				<view class="name">{{song.name}}</view>
				<view class="msg">{{song.ar[0].name}}-{{song.al.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				playlist: [],
				searchsong: [],
			}
		},
		onLoad(params) {
			var me = this;
			me.id = params.id;
			var serverUrl = me.serverUrl;
			uni.request({
				url: serverUrl + '/playlist/detail?id=' + me.id,
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						var playlist = res.data.playlist;
						me.playlist = playlist;
						me.searchsong = playlist.tracks;
						uni.setStorageSync("trackIds", playlist.trackIds);
					}
				}
			});

		},
		methods: {
			goPlay(songid, songname, name) {
				uni.navigateTo({
					url: '../play/play2?songid=' + songid + '&songname=' + songname + '&name=' + name,
				})
			},
			goPlayAll() {
				uni.navigateTo({
					url: '../play/play'
				})
			}
			
		}
	}
</script>

<style>
	@import url("songsheet.css");
</style>
