<template>
	<view class="content">
		<view class="search-box">
			<view class="search-input">
				<input class="input" type="text" focus="true" placeholder-style="color:#ababab;" confirm-type="search" @confirm="SearchSong"
				@input="searchMe" />
			</view>
			<text class="search-box-icon text-black cuIcon-people"></text>
		</view>
		<!-- 热搜title -->
		<view class="hot-search-title">
			热搜榜
		</view>
		<!-- 热搜列表 -->
		<view class="hot-search-list">
			<view class="search-list" v-for="(item, index) in searchList" :key="index" @click="Search(item.searchWord)">
				<view class="search-list-left">
					<view class="search-rank">
						{{index + 1}}
					</view>
					<view class="search-list-title">
						<view class="search-list-name">
							{{item.searchWord}}
						</view>
						<view class="search-list-msg">
							{{item.content}}
						</view>
					</view>
				</view>
				<view class="search-list-right">
					<image :src="item.iconUrl" class="icon"></image>
					{{item.score}}
				</view>
			</view>
		</view>
		<!-- last -->
		<view class="last">
			没有啦&nbsp;~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchList: [],
				keywords: "",
			}
		},
		onLoad() {
			var me = this;
			var serverUrl = me.serverUrl;
			// 请求热搜数据
			uni.request({
				url: serverUrl + '/search/hot/detail',
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						var searchList = res.data.data;
						me.searchList = searchList;
					}
				}
			});
		},
		methods: {
			goBack() {
				history.back()
			},
			goserarchsong(value) {
				uni.navigateTo({
					url: '../searchsong/searchsong?value=' + value,
				})
			},
			SearchSong(e) {
				var me = this;
				var value = e.detail.value;
				me.Search(value);
			},
			Search(value) {
				var me = this;
				me.goserarchsong(value);
			},
			searchMe(e) {
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
	@import url("./search.css");
</style>
