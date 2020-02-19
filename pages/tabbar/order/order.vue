<template>
	<view class="content">
		<view class="header"><text>订单中心</text></view>
		<view class="order">
			<view class="order-list">
				<view class="order-list-top">
					<text>网费充值</text>
					<text>已完成</text>
				</view>
				<view class="order-list-center">
					<image src="../../../static/logo.png" mode=""></image>
					<view class="order-list-center-info">
						<text>下单时间：2020-01-21 11:39</text>
						<text>总价：¥11.6</text>
					</view>
				</view>
				<view class="order-list-bottom"></view>
			</view>
			<view class="order-list">
				<view class="order-list-top">
					<text>上机消费</text>
					<text>已完成</text>
				</view>
				<view class="order-list-center">
					<image src="../../../static/logo.png" mode=""></image>
					<view class="order-list-center-info">
						<text>下单时间：2020-01-21 11:39</text>
						<text>总价：¥11.6</text>
					</view>
				</view>
				<view class="order-list-bottom"></view>
			</view>
			<view class="order-list">
				<view class="order-list-top">
					<text>零食饮料</text>
					<text>已完成</text>
				</view>
				<view class="order-list-center">
					<image src="../../../static/logo.png" mode=""></image>
					<view class="order-list-center-info">
						<text>下单时间：2020-01-21 11:39</text>
						<text>总价：¥11.6</text>
					</view>
				</view>
				<view class="order-list-bottom"></view>
			</view>
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
.order {
	width: 100%;
	display: flex;
	flex-direction: column;

	.order-list {
		width: 92%;
		height: 200upx;
		display: flex;
		flex-direction: column;
		margin: 10upx auto;
		background-color: #fff;
		border-radius: 20upx;

		.order-list-top {
			display: flex;
			justify-content: space-between;
		}

		.order-list-center {
			display: flex;
			justify-content: flex-start;

			image {
				width: 150upx;
				height: 150upx;
			}

			.order-list-center-info {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}
		}
	}
}
</style>
