<template>
	<view class="content">
		<view class="title"><text>修改昵称</text></view>
		<view class="setting">
			<view class="password">
				<image src="../../static/img/login/user.png" mode=""></image>
				<input class="input-password" type="text" v-model="nickname" maxlength="20" placeholder="请输入新昵称" placeholder-class="input-placeholder-user" />
			</view>
			<view class="submit" @click="submit()"><text>确认修改</text></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			vip: 0,
			nickname: ''
		};
	},
	onLoad() {},
	onShow() {
		uni.getStorage({
			key: 'userInfo',
			success: function(res) {
				console.log(JSON.stringify(res.data));
				this.name = res.data.username;
				this.vip = res.data.vip;
			}.bind(this),
			fail: function(err) {
				console.log(err.errMsg);
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		});
	},
	methods: {
		submit: function() {
			uni.request({
				url: 'http://39.97.108.238/GP/public/user/editnickname', //仅为示例，并非真实接口地址。
				method: 'post',
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				data: {
					name: this.name,
					nickname: this.nickname
				},
				success: function(res) {
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
						uni.setStorage({
							key: 'userInfo',
							data: { username: this.name, vip: this.vip, nickname: this.nickname },
							success: function() {
								console.log('success');
							}
						});
						setTimeout(function() {
							uni.switchTab({
								url: '/pages/tabbar/home/home'
							});
						}, 1000);
					}
				}.bind(this),
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
			width: 49upx;
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
</style>
