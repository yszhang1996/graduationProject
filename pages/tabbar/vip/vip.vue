<template>
	<view class="content">
		<view class="header">
			<text>会员中心</text>
		</view>
		<view class="contrast">
			<view class="user">
				<text>特权</text>
				<text>A区网费</text>
				<text>B区网费</text>
				<text>C区网费</text>
				<text>D区网费</text>
				<text>零食饮料</text>
				<text>优惠券</text>
			</view>
			<view class="user">
				<text>普通用户</text>
				<text>3元/每小时</text>
				<text>5元/每小时</text>
				<text>10元/每小时</text>
				<text>20元/每小时</text>
				<text>不打折</text>
				<text>不赠送</text>
			</view>
			<view class="user">
				<text>VIP用户</text>
				<text>2元/每小时</text>
				<text>4元/每小时</text>
				<text>7元/每小时</text>
				<text>15元/每小时</text>
				<text>8.8折</text>
				<text>五张优惠券</text>
			</view>
		</view>
		<view class="">
			立即开通
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
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
	
	.contrast{
		display: flex;
		
		.user{
			text-align: center;
			flex: 1;
			display: flex;
			flex-direction: column;
			
			text{
				border-bottom: 1px solid #ccc;
				font-size: 26upx;
			}
		}
	}
</style>
