<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">用户名</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入手机号或网易邮箱" placeholder-class="graywords" />
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords" />
			</view>
			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">登录</button>
		</form>
		<!-- #ifndef H5 -->
		<view class="third-wapper">
			<view class="third-line">
				<view class="single-line">
					<view class="line"></view>
				</view>
				<view class="third-words">第三方账号登录</view>
				<view class="single-line">
					<view class="line"></view>
				</view>
			</view>
			<view class="third-icos-wapper">
				<!-- #ifdef MP-WEIXIN -->
				<button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
				</button>
				<!-- #endif -->
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>


<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			formSubmit(e) {
				var me = this;
				var user = e.detail.value.username;
				var pass = e.detail.value.password;
				var numReg = /^[0-9]*$/;
				var numRe = new RegExp(numReg);
				if (numRe.test(user)) {
					me.cellphone(user, pass);
				} else {
					me.email(user, pass);
				}
			},
			cellphone(user, pass) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/login/cellphone',
					method: "POST",
					data: {
						phone: user,
						password: pass,
					},
					success: (res) => {
						if (res.data.code == 200) {
							var userid = res.data.account;
							var userInfo = res.data.profile;
							uni.setStorageSync("globalUserAccount", userid);
							uni.setStorageSync("globalUserProfile", userInfo);
							uni.switchTab({
								url: "../me/me"
							});
						}
					}
				});
			},
			email(user, pass) {
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/login/',
					method: 'POST',
					data: {
						email: user,
						password: pass,
					},
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res.data)
							var userid = res.data.account;
							var userInfo = res.data.profile;
							uni.setStorageSync("globalUserAccount", userid);
							uni.setStorageSync("globalUserProfile", userInfo);
							uni.switchTab({
								url: "../me/me"
							});
						}
					}
				});
			},
			wxLogin(e) {
				var me = this;
				var userInfo = e.detail.userInfo;
				console.log(userInfo);
				uni.setStorageSync("globalUserProfile", userInfo);
				uni.switchTab({
					url: "../me/me"
				});
			},
		}
	}
</script>

<style>
	@import url("registLogin.css");
</style>
