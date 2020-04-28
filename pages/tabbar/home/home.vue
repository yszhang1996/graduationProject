<template>
	<view class="content">
		<view class="header" id="header"><text>首页</text></view>
		<view class="header"><text>首页</text></view>
		<!-- 		<view class="header">
			<uni-icons type="location" size="18"></uni-icons><text>当前座位：</text><text>D区18号</text><text>></text>
		</view> -->
		<view class="uni-padding-wrap">
			<view class="view-notice" v-if="$store.state.seatstatus == '1'" @click="goToTabbarPage('/pages/tabbar/order/order')">
				<text>当前座位：</text>
				<text>{{row}}排{{col}}座</text>
			</view>
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
				<image src="../../../static/img/home/grid/1.png" mode="scaleToFill" @click="goToPage('/pages/introduce/introduce')"></image>
				<text>本店介绍</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/2.png" mode="scaleToFill" @click="intelligenceSelect()"></image>
				<text>智能选座</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/3.png" mode="scaleToFill" @click="goToPage('/pages/shop/shop')"></image>
				<text>零食饮料</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/4.png" mode="scaleToFill" @click="goToPage('/pages/team/team')"></image>
				<text>开黑广场</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/5.png" mode="scaleToFill" @click="goToPage('/pages/coupon/coupon')"></image>
				<text>我的优惠</text>
			</view>
			<view class="grid-list">
				<image src="../../../static/img/home/grid/6.png" mode="scaleToFill" @click="goToTabbarPage('/pages/tabbar/vip/vip')"></image>
				<text>会员中心</text>
			</view>
		</view>
		<view class="games">
			<view class="games-header">
				<text class="games-header-left">活动赛事</text>
				<text class="games-header-right">更多></text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
					<view id="demo1" class="scroll-view-item_H"><image src="../../../static/img/home/lunbo1.jpg" mode=""></image></view>
					<view id="demo2" class="scroll-view-item_H"><image src="../../../static/img/home/lunbo2.jpg" mode=""></image></view>
					<view id="demo3" class="scroll-view-item_H"><image src="../../../static/img/home/lunbo3.jpg" mode=""></image></view>
				</scroll-view>
			</view>
		</view>
		<view class="news">
			<view class="news-header">
				<text class="news-header-left">资讯推荐</text>
				<text class="news-header-right">更多></text>
			</view>
			<view class="news-all">
				<view class="news-list">
					<image src="../../../static/img/home/yunding.jpg" mode=""></image>
					<view class="news-list-info">
						<text class="news-list-info-title">云顶懒人看版本星系机制迎来更新</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：兔玩LOL</text>
							<text class="news-list-time">04-03 15:19</text>
						</view>
					</view>
				</view>
				<view class="news-list">
					<image src="../../../static/img/home/yunding.jpg" mode=""></image>
					<view class="news-list-info">
						<text class="news-list-info-title">云顶懒人看版本星系机制迎来更新</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：兔玩LOL</text>
							<text class="news-list-time">04-03 15:19</text>
						</view>
					</view>
				</view>
				<view class="news-list">
					<image src="../../../static/img/home/yunding.jpg" mode=""></image>
					<view class="news-list-info">
						<text class="news-list-info-title">云顶懒人看版本星系机制迎来更新</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：兔玩LOL</text>
							<text class="news-list-time">04-03 15:19</text>
						</view>
					</view>
				</view>
				<view class="news-list">
					<image src="../../../static/img/home/yunding.jpg" mode=""></image>
					<view class="news-list-info">
						<text class="news-list-info-title">云顶懒人看版本星系机制迎来更新</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：兔玩LOL</text>
							<text class="news-list-time">04-03 15:19</text>
						</view>
					</view>
				</view>
				<view class="news-list">
					<image src="../../../static/img/home/yunding.jpg" mode=""></image>
					<view class="news-list-info">
						<text class="news-list-info-title">云顶懒人看版本星系机制迎来更新</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：兔玩LOL</text>
							<text class="news-list-time">04-03 15:19</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import goodsSwiper from "@/components/pyh-goodsSwiper/pyh-goodsSwiper.vue";
	export default {
		data() {
			return {
				title: 'Hello',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true,
				name: "",
				row: "",
				col: "",
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		onLoad() {
			console.log('1');
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					// console.log(JSON.stringify(res.data));
					this.name = res.data.username;
				}.bind(this),
				fail: function(err) {
					console.log(err.errMsg);
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			});
		},
		onShow() {
			console.log(this.name);
			uni.request({
				url: 'http://39.97.108.238/GP/public/seat/userseat',
				method: 'get',
				data: {
					name: this.name
				},
				success: function(res) {
					// console.log(res.data);
					if (res.data.status == "1") {
						this.$store.state.seatstatus = res.data.status;
						this.row = res.data.data.row;
						this.col = res.data.data.col;
					} else {
						this.$store.state.seatstatus = res.data.status;
					}
					// this.orderList = res.data;
				}.bind(this),
				complete: function() {}
			});
		},
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
			},
			goToTabbarPage(url) {
				if (!url) return;
				uni.switchTab({
					url
				});
			},
			// seat() {
			// 	uni.showModal({
			// 	    content: '是否确认使用智能选座？',
			// 	    success: function (res) {
			// 	        if (res.confirm) {
			// 	            uni.showLoading({
			// 	            	title: '正在帮您选座'
			// 	            });
			// 	            setTimeout(function() {
			// 	            	uni.hideLoading();
			// 	            }, 3000);
			// 	        } else if (res.cancel) {
			// 	            console.log('用户点击取消');
			// 	        }
			// 	    }
			// 	});
			// 	// uni.showLoading({
			// 	// 	title: '正在帮您选座'
			// 	// });
			// 	// setTimeout(function() {
			// 	// 	uni.hideLoading();
			// 	// }, 3000);
			// },
			intelligenceSelect() {
				if (this.$store.state.seatstatus == 1) {
					uni.showModal({
						content: '当前有未结算的上机消费订单，是否继续选座？',
						success: function(res) {
							if (res.confirm) {
								uni.showLoading({
									title: '正在帮您选座'
								});
								setTimeout(function() {
									uni.hideLoading();
								}, 3000);
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
								console.log(this.name);
								// uni.request({
								// 	url: 'http://39.97.108.238/GP/public/seat/intelligenceSelect',
								// 	method: 'get',
								// 	data: {
								// 		name: this.name
								// 	},
								// 	success: function(res) {
								// 		this.orderList = res.data;
								// 	}.bind(this),
								// 	complete:function(){
								// 	}
								// });
								// uni.navigateTo({
								//     url: '/pages/add-detial/add-handSelect/add-handSelect?id=1&name=uniapp'
								// });
							} else if (res.cancel) {
								console.log('用户点击取消');
								return
							}
						}.bind(this)
					});
				} else {
					uni.showLoading({
						title: '正在帮您选座'
					});
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
					console.log(this.name);
					uni.request({
						url: 'http://39.97.108.238/GP/public/seat/intelligenceSelect',
						method: 'get',
						data: {
							name: this.name
						},
						success: function(res) {
							console.log(JSON.stringify(res.data.status));
							if (res.data.status == undefined) {
								return;
							}
							console.log("!11");
							setTimeout(function() {
								uni.hideLoading();
								uni.navigateTo({
									url: '/pages/add-detial/add-handSelect/add-handSelect?ColumnNum=' + res.data.data.col + '&RowNum=' +
										res.data.data.row + '&SeatCode=' + res.data.data.SeatCode + ''
								});
							}, 1000);
						}.bind(this),
						complete: function() {}
					});
					// uni.navigateTo({
					//     url: '/pages/add-detial/add-handSelect/add-handSelect?ColumnNum=1&RowNum=uniapp&SeatCode=12'
					// });
				}
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		},
		components: {
			uniIcons,
			goodsSwiper
		}
	};
</script>

<style lang="scss">
	*{
		color: #4f4f4f;
	}
	.content {
		// background-color: #f6f6f6;
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
		width: 100%;
	}
	
	#header{
		position: fixed;
		top: 0;
		z-index: 10;
	}

	.content {
		text-align: center;
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

	.view-notice {
		position: absolute;
		border-radius: 50upx;
		position: absolute;
		top: 10upx;
		right: -100upx;
		background-color: #30c27b;
		height: 50upx;
		width: 400upx;
		box-sizing: border-box;
		font-size: 28upx;
		line-height: 50upx;
		color: #fff;
		padding-left: 50upx;
		text-align: left;
		background-image: url(../../../static/img/home/notice.png);
		background-repeat: no-repeat;
		background-size: 36upx 36upx;
		background-position: 15upx 8upx;
		z-index: 100;
	}

	.uni-padding-wrap {
		position: relative;
	}

	.games {
		width: 100%;
	}

	.games-header {
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin: 30rpx auto 0;
	}

	.games-header-left {
		font-size: 36rpx;
	}

	.games-header-right {
		font-size: 24rpx;
		color: #a9aaac;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		margin-left: 32rpx;
	}
	
	.scroll-view-item_H {
	    display: inline-block;
	    width: 318rpx;
	    height: 178rpx;
		margin: 10rpx;
	    line-height: 300rpx;
	    text-align: center;
	}
	
	.scroll-view-item_H image {
	    width: 318rpx;
	    height: 178rpx;
	}
	
	.news {
		width: 100%;
	}
	
	.news-header {
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin:10rpx auto 0;
	}
	
	.news-header-left {
		font-size: 36rpx;
	}
	
	.news-header-right {
		font-size: 24rpx;
		color: #a9aaac;
	}
	
	.news-all{
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin: 0 auto;
	}
	
	.news-list{
		width: 100%;
		display: flex;
		justify-content: space-between;
		
		image {
			width: 190rpx;
			height: 190rpx;
			border-radius: 15rpx;
			margin: 10rpx;
		}
	}
	
	.news-list-info{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		
		.news-list-info-title{
			font-size: 34rpx;
			text-align: left;
			
		}
		
		.news-list-info-from{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 10rpx;
			
			.news-list-origin{
				font-size: 24rpx;
			}
			
			.news-list-time{
				font-size: 24rpx;
			}
		}
	}
</style>
