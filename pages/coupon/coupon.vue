<template>
	<view class="content">
		<view class="coupon-list">
			<image src="../../static/img/home/grid/5.png" mode=""></image>
			<view class="text">
				<text class="price">面额：¥20</text>
				<text class="origin">来源：会员每月赠送</text>
				<text class="time">截止：2020/6/1</text>
			</view>
		</view>
		<view class="coupon-list">
			<image src="../../static/img/home/grid/5.png" mode=""></image>
			<view class="text">
				<text class="price">面额：¥20</text>
				<text class="origin">来源：会员每月赠送</text>
				<text class="time">截止：2020/6/1</text>
			</view>
		</view>
		<view class="coupon-list">
			<image src="../../static/img/home/grid/5.png" mode=""></image>
			<view class="text">
				<text class="price">面额：¥20</text>
				<text class="origin">来源：会员每月赠送</text>
				<text class="time">截止：2020/6/1</text>
			</view>
		</view>
		<view class="coupon-list">
			<image src="../../static/img/home/grid/5.png" mode=""></image>
			<view class="text">
				<text class="price">面额：¥20</text>
				<text class="origin">来源：会员每月赠送</text>
				<text class="time">截止：2020/6/1</text>
			</view>
		</view>
		<view class="coupon-list">
			<image src="../../static/img/home/grid/5.png" mode=""></image>
			<view class="text">
				<text class="price">面额：¥20</text>
				<text class="origin">来源：会员每月赠送</text>
				<text class="time">截止：2020/6/1</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
// .content {
// 	background-color: #f6f6f6;
// }
.coupon-list {
	width: 82%;
	height: 200upx;
	border: 1px solid #f0f0f0;
	border-radius: 15upx;
	padding: 0 30upx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 20upx auto;

	image {
		width: 180upx;
		height: 180upx;
	}

	.text {
		margin-left: 100upx;
		height: 150upx;
		display: flex;
		flex-direction: column;
		text-align: left;
		justify-content: space-between;
		color: #666666;
		font-size: 30upx;
	}
}
</style>
