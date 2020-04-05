<template>
	<view class="content">
		<view class="header"><text>订单中心</text></view>
		<view class="order">
			<view class="order-list" v-for="(item, index) in orderList" :key="index">
				<view class="order-list-top">
					<text v-if="item.type == 1">上机消费</text>
					<text v-else-if="item.type == 2">零食饮料</text>
					<text v-else-if="item.type == 3">网费充值</text>
					<text v-if="item.price">已完成</text>
					<text v-else>未完成</text>
				</view>
				<view class="order-list-center">
					<image v-if="item.type == 1" src="../../../static/img/order/computer.png" mode=""></image>
					<image v-else-if="item.type == 2" src="../../../static/img/home/grid/3.png" mode=""></image>
					<image v-else-if="item.type == 3" src="../../../static/img/order/price.png" mode=""></image>
					<view class="order-list-center-info">
						<text class="order-time">下单时间：{{ formatDate(item.create_time) }}</text>
						<text v-if="item.price">总价：¥{{ item.price }}</text>
						<text v-else @click="checkOut(item)">暂未结算</text>
					</view>
				</view>
				<view class="order-list-bottom"></view>
			</view>
			<!-- 			<view class="order-list">
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
			</view> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			name: '',
			orderList: []
		};
	},
	onLoad() {
	},
	onShow() {
		uni.showLoading({
		    title: '加载中'
		});
		setTimeout(function () {
		    uni.hideLoading();
		}, 500);
		console.log('onshow');
		uni.getStorage({
			key: 'userInfo',
			success: function(res) {
				this.name = res.data.username;
			}.bind(this),
			fail: function(res) {
				uni.showToast({
					icon: 'none',
					title: '订单系统出错，返回重试',
					duration: 1500,
					success: function() {
						setTimeout(function() {
							uni.switchTab({
								url: '/pages/tabbar/home/home'
							});
						}, 1000);
					}
				});
			}
		});
		uni.request({
			url: 'http://39.97.108.238/GP/public/order/all',
			method: 'get',
			data: {
				name: this.name
			},
			success: function(res) {
				this.orderList = res.data;
			}.bind(this),
			complete:function(){
			}
		});
	},
	methods: {
		formatDate(date) {
			var now = new Date(date * 1000);
			var year = now.getFullYear(); //取得4位数的年份
			var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
			var date = now.getDate(); //返回日期月份中的天数（1到31）
			var hour = now.getHours(); //返回日期中的小时数（0到23）
			var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
			var second = now.getSeconds(); //返回日期中的秒数（0到59）
			return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
		},
		checkOut(item) {
			uni.showModal({
				content: '是否确认结算该订单？',
				success: function(res) {
					if (res.confirm) {
						//确认
						console.log(item);
						uni.request({
							url: 'http://39.97.108.238/GP/public/order/checkout',
							method: 'get',
							data: {
								user_name: this.name,
								seat_seatcode: item.seat_seatcode,
								order_id: item.id
							},
							success: function(res) {
								if (res.data.status == 1) {
									uni.showToast({
										icon: 'none',
										title: '结账成功，花费' + res.data.data.price,
										duration: 1500,
										success: function() {
											this.$store.state.seatstatus = 0;
											// setTimeout(function() {
											// 	uni.switchTab({
											// 		url: '/pages/tabbar/order/order'
											// 	});
											// }, 1000);
										}.bind(this)
									});
									console.log(this.name);
									uni.request({
										url: 'http://39.97.108.238/GP/public/order/all',
										method: 'get',
										data: {
											name: this.name
										},
										success: function(res) {
											this.orderList = res.data;
										}.bind(this),
										complete:function(){
										}
									});
								} else {
									uni.showToast({
										icon: 'none',
										title: '结算失败，返回重试',
										duration: 1500,
										success: function() {
											setTimeout(function() {
												uni.switchTab({
													url: '/pages/tabbar/home/home'
												});
											}, 1000);
										}
									});
								}
							}.bind(this),
							fail: function() {
								uni.showToast({
									icon: 'none',
									title: '结算失败，返回重试',
									duration: 1500,
									success: function() {
										setTimeout(function() {
											uni.switchTab({
												url: '/pages/tabbar/home/home'
											});
										}, 1000);
									}
								});
							}
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}.bind(this)
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	background-color: #f6f6f6;
	// height: calc(100vh - 100upx);
	//#ifdef APP-PLUS
	// height: 100vh;
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
		height: 230upx;
		display: flex;
		flex-direction: column;
		margin: 10upx auto;
		background-color: #fff;
		border-radius: 20upx;
		box-sizing: border-box;
		padding: 20upx;

		.order-list-top {
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 5upx;
		}

		.order-list-center {
			display: flex;
			justify-content: flex-start;

			image {
				width: 130upx;
				height: 130upx;
			}

			.order-list-center-info {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				box-sizing: border-box;
				padding-left: 40upx;
				
				.order-time{
					font-size: 30upx;
				}
			}
		}
	}
}
</style>
