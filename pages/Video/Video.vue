<template>
	<view class="page">
		<!-- mv start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<view class="hot-title">
					最新MV
				</view>
			</view>
		</view>
			<view v-for="mv in mvList">
			<video class="mv" :src="mv.briefDesc" :poster="mv.cover" controls direction="90"></video>
			<view class="mv-name">{{mv.name}}</view>
		</view>
		<!-- mv end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvList: [],
				mvurlList: [],
			}
		},
		onLoad() {
			var me = this;
			var serverUrl = me.serverUrl;
			// 请求mv数据
			uni.request({
				url: serverUrl + '/mv/first?limit=10',
				method: "GET",
				success: (res) => {
					if (res.data.code == 200) {
						var mvList = res.data.data;
						me.mvList = mvList;
						for (var i = 0; i < mvList.length; i++) {
							var mvid = mvList[i].id;
							me.hqmvurl(mvid, i);
						}
					}
				}
			});
		},
		methods: {
			hqmvurl(id, y) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/mv/url?id=' + id,
					method: "POST",
					success: (res2) => {
						if (res2.data.code == 200) {
							var mvurlList = res2.data.data.url;
							me.mvList[y].briefDesc = mvurlList;
						}
					}
				});
			},
			goserarchmv(value) {
				uni.navigateTo({
					url: '../searchmv/searchmv?value=' + value,
				})
			},
			SearchMV(e) {
				var me = this;
				var value = e.detail.value;
				me.Search(value);
			},
			Search(value) {
				var me = this;
				me.goserarchmv(value);
			}
		},
	}
</script>

<style>
	@import url("index.css");
	@import url("../search/search.css");
</style>
