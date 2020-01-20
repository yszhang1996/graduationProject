<template>
	<view class="content">
		<view class="header"><text>当前座位：</text><text>D区18号</text></view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item><image class="swiperImg" mode="center" src="../../../static/img/home/swipe/swipe1.jpg"></image></swiper-item>
						<swiper-item><image class="swiperImg" mode="center" src="../../../static/img/home/swipe/swipe2.jpg"></image></swiper-item>
						<swiper-item><image class="swiperImg" mode="center" src="../../../static/img/home/swipe/swipe3.jpg"></image></swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 一般用法 -->
		<view class="grid">
			<view class="grid-list">
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill"></image>
				<text>本店介绍</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill"></image>
				<text>智能选座</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill"></image>
				<text>零食饮料</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill"></image>
				<text>开黑广场</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill"></image>
				<text>领券福利</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill"></image>
				<text>会员中心</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
	onLoad() {},
	methods: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	/* border: 1upx #007aff solid; */
}
swiper-item{
	/* border: 1upx #007aff solid; */
}
.swiperImg{
	border-radius: 10upx;
	width: 95%; 
	height: 100%;
}
.grid{
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}
.grid-list{
	margin-top: 20upx;
	width: 200upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.grid-list image{
	width: 150upx;
	height: 150upx;
}
</style>
