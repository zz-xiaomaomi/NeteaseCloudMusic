<template>
	<view class="content">
		<view class="search-box">
			<view class="search-input">
				<input class="input" type="text" focus="true" placeholder-style="color:#ababab;" confirm-type="search" :value="keywords"
				 @confirm="SearchSongAgain" @input="SearchMe" />
			</view>
			<text class="search-box-icon text-black cuIcon-people"></text>
		</view>
		<view class="play">
			<image class="play-img" src="../../static/images/play.jpg"></image>
			<view class="play-name">全部播放</view>
		</view>
		<view v-for="song in searchsong" @tap="goPlay(song.id, song.name, song.ar[0].name)" class="song">
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
				searchsong: [],
				searchalbums: [],
				keywords: "",
			}
		},
		onLoad(params) {
			var me = this;
			var serverUrl = me.serverUrl;
			var value = params.value;
			me.keywords = value;
			me.SearchSong(value);
		},
		methods: {
			goserarchsong(value) {
				uni.navigateTo({
					url: '../searchsong/searchsong?value=' + value,
				})
			},
			goPlay(songid, songname, name) {
				uni.navigateTo({
					url: '../play/play2?songid=' + songid + '&songname=' + songname + '&name=' + name,
				})
			},
			SearchSong(value) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/cloudsearch?keywords=' + value,
					method: "GET",
					success: (res) => {
						if (res.data.code == 200) {
							var search = res.data.result.songs;
							me.searchsong = search;
						}
					}
				});
			},
			SearchSongAgain(e) {
				var me = this;
				var value = e.detail.value;
				me.goserarchsong(value);
			},
			SearchMe(e) {
				var me = this;
				var serverUrl = me.serverUrl;
				var value = e.detail.value;
				uni.request({
					url: serverUrl + '/search/suggest?type=mobile&keywords=' + value,
					method: "GET",
					success: (res) => {
						if (res.data.code == 200) {
							var searchme = res.data.result;
						}
					}
				});
			}
		},
	}
</script>

<style>
	@import url("../search/search.css");
	@import url("./searchsong.css");
</style>
