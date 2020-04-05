<template>
	<view class="content">
		<view class="user-info">
			<view class="image"><image src="../../../static/img/home/grid/6.png" mode=""></image></view>
			<text v-if="nickname">{{nickname}}</text>
			<text v-else>{{username}}</text>
		</view>
		
		<view class="setting">
			<view class="setting-list">
				<text class="setting-list-left">账号状态</text>
				<text v-if="userVip" class="setting-list-right">会员</text>
				<text v-else class="setting-list-right">普通用户</text>
			</view>
			<view class="setting-list">
				<text class="setting-list-left" @click="goTourl('/pages/editNickname/editNickname')">昵称设置</text>
				<text class="setting-list-right">></text>
			</view>
			<view class="setting-list" @click="goTourl('/pages/editPassword/editPassword')">
				<text class="setting-list-left">密码设置</text>
				<text class="setting-list-right">></text>
			</view>
			<view class="setting-list" @click="goTourl('/pages/privacyPolicy/privacyPolicy')">
				<text class="setting-list-left">隐私声明</text>
				<text class="setting-list-right">></text>
			</view>
			<view class="setting-list" @click="goTourl('/pages/agreement/agreement')">
				<text class="setting-list-left">用户协议</text>
				<text class="setting-list-right">></text>
			</view>
		</view>
		
		<view class="logout">
			<text @click="logout()">退出</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			nickname: "",
			userVip: 0
		};
	},
	onLoad() {},
	onShow() {
		console.log("11");
		uni.getStorage({
			key:'userInfo',
			    success: function (res) {
			        this.username = res.data.username,
					this.nickname = res.data.nickname,
					this.userVip = res.data.vip
			    }.bind(this),
				fail: function (err) {
				    uni.showToast({
						icon:'none',
						title:'加载数据失败',
				    	duration:1000,
				    })
				}
		})
	},
	methods: {
		logout: function(){
			uni.removeStorage({
			    key: 'userInfo',
			    success: function (res) {
			        uni.showToast({
			        	icon: 'none',
			        	title: '退出成功',
			        	duration: 2000
			        });
					setTimeout(function(){
						uni.navigateTo({
							url: "/pages/login/login"
						});
					},1000);
			    }
			});
		},
		goTourl: function(url){
			uni.navigateTo({
			    url: url
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
.user-info {
	background-color: #f6e1b9;
	padding-top: var(--status-bar-height);
	padding-right: 20upx;
	margin-bottom: 20upx;
	font-size: 36upx;
	height: 240upx;
	width: 100%;
	line-height: 60upx;
	text-align: center;
	display: flex;
	align-items: center;

	.image {
		flex: 1;

		image {
			width: 100upx;
			height: 100upx;
			border-radius: 100upx;
		}
	}

	text {
		flex: 3;
		text-align: left;
	}
}

.setting{
	width: 100%;
	display: flex;
	flex-direction: column;
	
	.setting-list{
		width: 94%;
		height: 100upx;
		line-height: 100upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}
}

.logout{
	width: 300upx;
	height: 70upx;
	border-radius: 20upx;
	background-color: #db2525;
	margin: 20upx auto;
	text-align: center;
	line-height: 70upx;
	color: #f0ecec;
}
</style>
