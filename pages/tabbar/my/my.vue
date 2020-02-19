<template>
	<view class="content">
		<view class="user-info">
			<view class="image"><image src="../../../static/img/home/grid/6.png" mode=""></image></view>
			<text>夜笙</text>
		</view>
		
		<view class="setting">
			<view class="setting-list">
				<text class="setting-list-left">账号状态</text>
				<text class="setting-list-right">普通会员</text>
			</view>
			<view class="setting-list">
				<text class="setting-list-left">昵称设置</text>
				<text class="setting-list-right">></text>
			</view>
			<view class="setting-list">
				<text class="setting-list-left">密码设置</text>
				<text class="setting-list-right">></text>
			</view>
			<view class="setting-list">
				<text class="setting-list-left">隐私声明</text>
				<text class="setting-list-right">></text>
			</view>
			<view class="setting-list">
				<text class="setting-list-left">用户协议</text>
				<text class="setting-list-right">></text>
			</view>
		</view>
		
		<view class="logout">
			<text>退出</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
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
</style>
