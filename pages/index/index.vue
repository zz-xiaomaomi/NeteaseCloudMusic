<template>
	<view class="page">
		<!-- 推荐新音乐 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<view class="hot-title">
					推荐新音乐
				</view>
			</view>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item v-for="newsong in newsongList" @tap="goPlay(newsong.song.id,newsong.song.name,newsong.song.artists[0].name)">
				<image :src="newsong.picUrl" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 推荐新音乐 end -->
		<!-- 推荐歌单 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<view class="hot-title">
					推荐歌单
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block">
			<view class="single-poster" v-for="superhero in hotSuperheroList" @click="goSongsheet(superhero.id)">
				<view class="poster-wapper">
					<image :src="superhero.picUrl" class="poster"></image>
					<view class="movie-name">
						{{superhero.name}}
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 推荐歌单 end -->
		<!-- 排行榜 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<view class="hot-title">
					排行榜
				</view>
			</view>
		</view>
		<view>
			<view class="top" v-for="(top, index) in topList" v-if="index < 4">
				<view @click="goSongsheet(top.id)">
					<image class="top-img" :src="top.coverImgUrl" ></image>
					<view class="top-update">{{top.updateFrequency}}</view>
				</view>
				<view class="top-name" v-for="(n, index2) in top.tags" v-if="index2 < 5">
					<view class="name" @click="goPlay(n.id, n.name, n.ar[0].name)">{{index2+1}}.{{n.name}}-{{n.ar[0].name}}</view>
				</view>
			</view>
		</view>
		<!-- 排行榜 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsongList: [],
				hotSuperheroList: [],
				topList: [],
				playlist: [],
			}
		},
		onLoad() {
			var me = this;
			var serverUrl = me.serverUrl;
			// 请求推荐新音乐
			uni.request({
				url: serverUrl + '/personalized/newsong?limit=6',
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						var newsongList = res.data.result;
						me.newsongList = newsongList;
					}
				}
			});
			// 请求推荐歌单
			uni.request({
				url: serverUrl + '/personalized?limit=6',
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						var hotSuperheroList = res.data.result;
						me.hotSuperheroList = hotSuperheroList;
					}
				}
			});
			// 请求所有榜单
			uni.request({
				url: serverUrl + '/toplist',
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						var topList = res.data.list;
						me.topList = topList;
						for (var i = 0; i < 4; i++) {
							var topid = topList[i].id;
							me.hq(topid, i);
						}
					}
				},
			});
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			goPlay(songid, songname, name) {
				uni.navigateTo({
					url: '../play/play2?songid=' + songid + '&songname=' + songname + '&name=' + name,
				})
			},
			goSongsheet(id){
				uni.navigateTo({
					url: '../songsheet/songsheet?id=' + id
				})
			},
			hq(id, y) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/playlist/detail?id=' + id,
					method: "GET",
					success: (res2) => {
						if (res2.data.code == 200) {
							var playlist = res2.data.playlist.tracks;
							me.topList[y].tags = playlist;
						}
					},
				});
			}
		}
	}
</script>

<style>
	@import url("index.css");
</style>
