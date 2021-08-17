<template>
	<view class="page page-fill">
		<view class="heder">
			<view v-if="userIsLogin">
				<image :src="userInfo.avatarUrl" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname" v-if="userInfo.nickname">
					{{userInfo.nickname}}
				</view>
				<view class="nickname" v-else>
					{{userInfo.nickName}}
				</view>
			</view>
			<view v-else>
				<navigator url="../registLogin/registLogin">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</view>
			<view class="set-wapper" v-if="userIsLogin">
				<navigator url="../meInfo/meInfo">
					<image src="../../static/icos/settings.png" class="settings"></image>
				</navigator>
			</view>
			<view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: []
			}
		},
		onShow() {
			var me = this;
			var userInfo = uni.getStorageSync("globalUserProfile");
			if (userInfo != null && userInfo != "" && userInfo != undefined) {
				me.userIsLogin = true;
				me.userInfo = userInfo;
			} else {
				me.userIsLogin = false;
				me.userInfo = [];
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url("me.css");
</style>
