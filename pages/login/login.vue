<template>
	<view style="background-color: #f6e1b9;height: 1334upx;">
		<view class="main">
			<view class="user">
				<image src="../../static/img/login/user.png" mode=""></image>
				<input class="input-user" type="text" v-model="name" maxlength="20" placeholder="请输入用户名/手机号" placeholder-class="input-placeholder-user" />
			</view>
			<view class="password">
				<image src="../../static/img/login/password.png" mode=""></image>
				<input class="input-password" type="text" password v-model="password" maxlength="20" placeholder="请输入密码" placeholder-class="input-placeholder-user" />
			</view>
			<view class="agreement">
				<image v-if="!agreement" src="../../static/img/login/agreement.png" mode="" @click="changeAgreement()"></image>
				<image v-else src="../../static/img/login/agreementConfirm.png" mode="" @click="changeAgreement()"></image>
				<text>用户协议</text>
			</view>
			<view class="submit" @click="submit()"><text>登录</text></view>
			<view class="goTo">
				<text>短信验证码登录</text>
				<text @click="gotoUrl('/pages/register/register')">立即注册</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			agreement: false,
			name: '',
			password: ''
		};
	},
	onBackPress() {
		return true;
	},
	methods: {
		gotoUrl: function(url) {
			uni.navigateTo({
				url: url
			});
		},
		changeAgreement: function() {
			this.agreement = !this.agreement;
		},
		submit: function() {
			if (!this.name) {
				uni.showToast({
					icon: 'none',
					title: '请输入用户名',
					duration: 2000
				});
				return false;
			}
			if (!this.password) {
				uni.showToast({
					icon: 'none',
					title: '请输入密码',
					duration: 2000
				});
				return false;
			}
			if (!this.agreement) {
				uni.showToast({
					icon: 'none',
					title: '请先同意用户协议',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: 'http://39.97.108.238/GP/public/user/login', //仅为示例，并非真实接口地址。
				method: 'post',
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				data: {
					name: this.name,
					password: this.password
				},
				success: res => {
					console.log(JSON.stringify(res.data.data));
					if (res.data.status == 1) {
						uni.setStorage({
							key: 'userInfo',
							data: res.data.data,
							success: function() {
								uni.showToast({
									icon: 'none',
									title: '登录成功',
									duration: 1500,
									success: function() {
										setTimeout(function(){
											uni.switchTab({
												url: '/pages/tabbar/home/home'
											});
										},1000);
									}
								});
							}
						});
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 2000
						});
					}
				},
				fail: err => {
					uni.showToast({
						icon: 'none',
						title: '网络故障，请稍后重试',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.main {
	background-image: url(../../static/img/login/background.png);
	background-size: cover;
	width: 750upx;
	height: 1075upx;
	position: absolute;
	top: 259upx;
	padding-top: 250upx;
	box-sizing: border-box;

	.user {
		width: 450upx;
		margin: 0 auto;

		image {
			width: 50upx;
			height: 50upx;
			position: absolute;
			left: 158upx;
			top: 268upx;
		}

		.input-user {
			padding: 20upx;
			padding-left: 60upx;
			border-bottom: 1px solid #d2d2d2;
			width: 450upx;
			height: 85upx;
			box-sizing: border-box;
		}
	}

	.password {
		width: 450upx;
		margin: 0 auto;

		image {
			width: 40upx;
			height: 49upx;
			position: absolute;
			left: 162upx;
			top: 354upx;
		}

		.input-password {
			padding: 20upx;
			padding-left: 60upx;
			border-bottom: 1px solid #d2d2d2;
			width: 450upx;
			height: 85upx;
			box-sizing: border-box;
		}
	}

	.agreement {
		width: 450upx;
		height: 85upx;
		margin: 0 auto;
		display: flex;
		align-items: center;

		image {
			margin: 0 10upx;
			width: 40upx;
			height: 40upx;
		}
		text {
			font-size: 32upx;
			color: #1fa9fe;
		}
	}

	.submit {
		background-image: url(../../static/img/login/submit.png);
		background-size: cover;
		width: 450upx;
		height: 91upx;
		margin: 0 auto;
		text-align: center;
		line-height: 71upx;
		color: #f0f0f0;
	}

	.goTo {
		width: 450upx;
		margin: 0 auto;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
	}
}
.input-placeholder-user {
	color: #d2d2d2;
}
</style>
