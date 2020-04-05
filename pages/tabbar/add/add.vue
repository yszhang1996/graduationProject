<template>
	<view class="content" :class="{ active: active }">
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
				<view class="tabbar-box-item" @click="goToPage('/pages/add-detial/add-handSelect/add-handSelect', 1)">
					<image class="box-image" src="../../../static/img/manual.png" mode="aspectFit"></image>
					<text class="explain">自主选座</text>
				</view>
				<view class="tabbar-box-item" @click="intelligenceSelect()">
					<image class="box-image" src="../../../static/img/home/grid/2.png" mode="aspectFit"></image>
					<text class="explain">智能选座</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/add-detial/add-help/add-help',1)">
					<image class="box-image" src="../../../static/img/help.png" mode="aspectFit"></image>
					<text class="explain">帮助</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: false,
			name: ""
		};
	},
	onLoad() {},
	onShow() {
		// setTimeout(() => {
		this.active = true;
		// }, 500);
	},
	onHide() {
		this.active = false;
	},
	methods: {
		goToPage(url, judge) {
			if (judge) { //judge这个变量如果存在则需要判读当前用户是否有尚未结算的上机消费订单，不传入=不存在，则不判断，直接执行跳转
				console.log(this.$store.state.seatstatus);
				if (this.$store.state.seatstatus == 1) {
					uni.showModal({
						content: '当前有未结算的上机消费订单，是否继续选座？',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								if (!url) return;
								// uni.showLoading({
								//     title: '正在帮您选座'
								// });
								// setTimeout(function () {
								//     uni.hideLoading();
								// }, 3000);
								uni.navigateTo({
									url
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
								return
							}
						}
					});
				}else{
					if (!url) return;
					// uni.showLoading({
					//     title: '正在帮您选座'
					// });
					// setTimeout(function () {
					//     uni.hideLoading();
					// }, 3000);
					uni.navigateTo({
						url
					});
				}
			}else{
				uni.navigateTo({
					url
				});
			}
		},
		intelligenceSelect(){
			if (this.$store.state.seatstatus == 1) {
				uni.showModal({
					content: '当前有未结算的上机消费订单，是否继续选座？',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
							    title: '正在帮您选座'
							});
							setTimeout(function () {
							    uni.hideLoading();
							}, 3000);
							uni.getStorage({
							    key: 'userInfo',
							    success: function (res) {
							        console.log(JSON.stringify(res.data));
									this.name = res.data.username;
							    }.bind(this),
								fail:function(err){
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
			}else{
				uni.showLoading({
				    title: '正在帮您选座'
				});
				uni.getStorage({
				    key: 'userInfo',
				    success: function (res) {
				        console.log(JSON.stringify(res.data));
						this.name = res.data.username;
				    }.bind(this),
					fail:function(err){
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
						if(res.data.status == undefined){
							return;
						}
						console.log("!11");
						setTimeout(function(){
							uni.hideLoading();
							uni.navigateTo({
							    url: '/pages/add-detial/add-handSelect/add-handSelect?ColumnNum='+res.data.data.col+'&RowNum='+res.data.data.row+'&SeatCode='+res.data.data.SeatCode+''
							});
						},1000);
					}.bind(this),
					complete:function(){
					}
				});
				// uni.navigateTo({
				//     url: '/pages/add-detial/add-handSelect/add-handSelect?ColumnNum=1&RowNum=uniapp&SeatCode=12'
				// });
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	/* #ifdef H5 */
	height: calc(100vh - var(--window-bottom) - var(--window-top));
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	transition: opacity 0.3s;
	background: #999;
	opacity: 0;
	&.active {
		opacity: 1;
	}
	.logo {
		position: relative;
		margin-top: -400upx;
		width: 200upx;
		height: 200upx;
		// z-index: -1;
		opacity: 0;
		transition: opacity 0.3s;
		&.active {
			opacity: 1;
		}
	}
}
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding: 50upx;
	box-sizing: border-box;
	bottom: 0;
	left: 0;
	.tabbar-box {
		position: relative;
		display: flex;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
		&:after {
			content: '';
			position: absolute;
			bottom: -16upx;
			left: 0;
			right: 0;
			margin: auto;
			width: 50upx;
			height: 50upx;
			transform: rotate(45deg);
			background: #fff;
			z-index: 1;
			box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
			border-radius: 2px;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 20upx;
			z-index: 2;
		}
		.tabbar-box-item {
			// position: relative;
			width: 100%;
			z-index: 3;
			margin: 10upx;
			color: $uni-color-subtitle;
			text-align: center;
			font-size: $uni-font-size-base;
			.box-image {
				width: 100%;
				height: $uni-img-size-lg;
			}
		}
	}
}
</style>
