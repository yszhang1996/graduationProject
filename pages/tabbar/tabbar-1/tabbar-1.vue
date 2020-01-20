<template>
	<view class="content">
		<view class="header">
			<uni-icons type="location" size="18"></uni-icons><text>当前座位：</text><text>D区18号</text><text>></text>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<image class="swiperImg" mode="aspectFill" src="../../../static/img/home/swipe/swipe1.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image class="swiperImg" mode="aspectFill" src="../../../static/img/home/swipe/swipe2.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image class="swiperImg" mode="aspectFill" src="../../../static/img/home/swipe/swipe3.jpg"></image>
						</swiper-item>
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
				<image src="../../../static/img/home/grid/2.png" mode="scaleToFill"></image>
				<text>智能选座</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/3.png" mode="scaleToFill" @click="goToPage('/pages/shop/shop')"></image>
				<text>零食饮料</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/4.png" mode="scaleToFill"></image>
				<text>开黑广场</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/5.png" mode="scaleToFill"></image>
				<text>领券福利</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/6.png" mode="scaleToFill"></image>
				<text>会员中心</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
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
			},
			goToPage(url) {
				if (!url) return;
				uni.navigateTo({
					url
				});
			}
		},
		components: {
			uniIcons
		}
	};
</script>

<style>
	.header {
		background-color: #f6e1b9;
		padding-top: var(--status-bar-height);
		padding-right: 20upx;
		margin-bottom: 20upx;
		font-size: 32upx;
		text-align: right;
		height: 60upx;
		line-height: 60upx;
	}

	.content {
		text-align: center;
		/* border: 1upx #007aff solid; */
	}

	swiper-item {
		/* border: 1upx #007aff solid; */
	}

	.swiperImg {
		border-radius: 20upx;
		width: 95%;
		height: 100%;
	}

	.grid {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	.grid-list {
		margin-top: 40upx;
		width: 200upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 25upx;
	}

	.grid-list image {
		width: 120upx;
		height: 120upx;
	}
</style>
