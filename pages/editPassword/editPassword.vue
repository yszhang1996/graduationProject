<template>
	<view class="content">
		<view class="setting">
			<!-- <view class="password">
				<image src="../../static/img/login/password.png" mode=""></image>
				<input class="input-password" type="text" password v-model="password" maxlength="20" placeholder="请输入旧密码" placeholder-class="input-placeholder-user" />
			</view>
			<view class="password">
				<image src="../../static/img/login/password.png" mode=""></image>
				<input class="input-password" type="text" password v-model="newpassword" maxlength="20" placeholder="请输入新密码" placeholder-class="input-placeholder-user" />
			</view>
			<view class="password">
				<image src="../../static/img/login/password.png" mode=""></image>
				<input
					class="input-password"
					type="text"
					password
					v-model="confirmpassword"
					maxlength="20"
					placeholder="请输入确认密码"
					placeholder-class="input-placeholder-user"
				/>
			</view> -->
			<!-- <view class="submit" @click="submit()"><text>确认修改</text></view> -->
			<view class="cu-form-group">
				<view class="title">旧密码</view>
				<input placeholder="请输入旧密码" password v-model="password" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">新密码</view>
				<input placeholder="请输入新密码" password v-model="newpassword" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input placeholder="请输入确认密码" password v-model="confirmpassword" name="input"></input>
			</view>
			<button class="cu-btn bg-blue shadow-blur round" @click="submit()">确认修改</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			password: '',
			newpassword: '',
			confirmpassword: ''
		};
	},
	onLoad() {},
	onShow() {},
	methods: {
		submit: function() {
			if (this.newpassword != this.confirmpassword) {
				uni.showToast({
					icon: 'none',
					title: '两次输入的密码不一致',
					duration: 1000
				});
				return;
			}
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					console.log(JSON.stringify(res.data));
					this.name = res.data.username;
				}.bind(this),
				fail: function(err) {
					console.log(err.errMsg);
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			});
			uni.request({
				url: 'http://39.97.108.238/GP/public/user/editpsd', //仅为示例，并非真实接口地址。
				method: 'post',
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				data: {
					name: this.name,
					password: this.password,
					newpassword: this.newpassword
				},
				success: res => {
					console.log(res.data);
					if (res.data.status == 0) {
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1000
						});
					} else if (res.data.status == 1) {
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1000,
							success() {}
						});
						setTimeout(function() {
							uni.switchTab({
								url: '/pages/tabbar/home/home'
							});
						}, 1000);
					}
				},
				fail: res => {}
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	background-color: #f6f6f6;
	height: calc(100vh - 100upx);
	//#ifdef APP-PLUS
	height: 100vh;
	//#endif
}
.header {
	background-color: #f6e1b9;
	padding-top: var(--status-bar-height);
	padding-right: 20upx;
	margin-bottom: 20upx;
	font-size: 36upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
}

.title {
	text-align: center;
}

.setting {
	width: 100%;
	display: flex;
	flex-direction: column;

	.password {
		width: 450upx;
		margin: 0 auto;
		position: relative;

		image {
			width: 40upx;
			height: 49upx;
			position: absolute;
			left: 10upx;
			top: 18upx;
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
}
.submit {
	text-align: center;
}

.cu-btn{
	width: 50%;
	margin: 20rpx auto;
}
</style>
