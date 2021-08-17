<template>
	<view class="footer-wapper">
		<view class="footer-words" style="margin-top: 10upx;" @click="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			logout() {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/logout',
					method: "GET",
					success: (res) => {
						if (res.data.code == 200) {
							var userInfo = [];
							uni.setStorageSync("globalUserProfile", userInfo);
							uni.switchTab({
								url: "../me/me"
							})
						}
					},
				});
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
