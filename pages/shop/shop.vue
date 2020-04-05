<template>
	<view class="list_box">
		<view class="left">
			<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
				<view class="item" v-for="(item, index) in $store.state.left" :key="index" :class="{ active: index == leftIndex }" :data-index="index" @tap="leftTap">{{ item }}</view>
			</scroll-view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" :style="{ height: scrollHeight }" @scroll="mainScroll" :scroll-into-view="scrollInto" scroll-with-animation="true">
				<view class="item" v-for="(item, index) in $store.state.main" :key="index" :id="'item-' + index">
					<view class="title">
						<view>{{ item.title }}</view>
					</view>
					<view class="goods" v-for="(item2, index2) in item.list" :key="index2">
						<image src="/static/logo.png" mode=""></image>
						<view class="goodsInfo">
							<view>{{ item2.title }}商品标题</view>
							<view class="describe">月售：{{ item2.monthlySales }}</view>
							<view class="money">价格：¥{{ item2.price }}</view>
						</view>
						<view class="goodsPrice">
							<text class="changeGoodsPrice" @click="Number1(index, index2)">-</text>
							<text class="goodsNumber">{{ item2.goodsNumber }}</text>
							<text class="changeGoodsPrice" @click="Number2(index, index2)">+</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<cart-icon v-if="this.$store.state.cartsNumber != 0" class="cart-icon"></cart-icon>
		<uni-popup ref="showpopup" :type="type" >
			<view class="popup-content">
				<text class="clearCarts" @click="clearCarts()">
					清空购物车
				</text>
				<view v-for="(item, index) in $store.state.main" :key="index" >
					<view v-for="(item2, index2) in item.list" :key="index2">
						<view v-if="item2.goodsNumber != 0" class="goods">
							<image src="/static/logo.png" mode=""></image>
							<view class="goodsInfo">
								<view>{{ item2.title }}商品标题</view>
								<view class="money">价格：¥{{ item2.price*item2.goodsNumber }}</view>
							</view>
							<view class="goodsPrice">
								<text class="changeGoodsPrice" @click="Number1(index, index2)">-</text>
								<text class="goodsNumber">{{ item2.goodsNumber }}</text>
								<text class="changeGoodsPrice" @click="Number2(index, index2)">+</text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="!vip" class="">
					总计：¥{{totalAmount()}}
				</view>
				<view v-else class="">
					总计：<text class="oldPrice">¥{{totalAmount()}}</text><text class="newPrice">¥{{totalAmount()*0.8}}</text>
				</view>
				<view class="" @click="checkOut()">
					结算
				</view>
			</view>
			
		</uni-popup>
	</view>
</template>

<script>
import cartIcon from '@/components/cart-icon/cart-icon.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			scrollHeight: '500px',
			leftArray: [],
			mainArray: [],
			topArr: [],
			leftIndex: 0,
			scrollInto: '',
			type: 'bottom',
			content: '底部弹 popup',
			name: '',
			vip: true,
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				/* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
				this.scrollHeight = `${res.windowHeight}px`;
			}
		});
		uni.getStorage({
			key: 'userInfo',
			success: function(res) {
				this.name = res.data.username;
			}.bind(this),
			fail: function(res) {
				uni.showToast({
					icon: 'none',
					title: '购物系统出错，返回重试',
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
	},
	mounted() {
		this.getListData();
	},
	methods: {
		/* 获取列表数据 */
		getListData() {
			/* 因无真实数据，当前方法模拟数据 */
			// let [left, main] = [[], []];

			// left = ['小食', '饮料', '主食'];

			// main = [
			// 	{
			// 		title: `小食类商品标题`,
			// 		list: [
			// 			{
			// 				id: 1,
			// 				title: '火腿肠',
			// 				monthlySales: 5,
			// 				price: 10,
			// 				goodsNumber: 0
			// 			}
			// 		]
			// 	},
			// 	{
			// 		title: `主食类商品标题`,
			// 		list: [
			// 			{
			// 				id: 2,
			// 				title: '泡面',
			// 				monthlySales: 5,
			// 				price: 10,
			// 				goodsNumber: 0
			// 			}
			// 		]
			// 	},
			// 	{
			// 		title: `饮料类商品标题`,
			// 		list: [
			// 			{
			// 				id: 3,
			// 				title: '可乐',
			// 				monthlySales: 5,
			// 				price: 10,
			// 				goodsNumber: 0
			// 			}
			// 		]
			// 	}
			// ];

			this.$nextTick(() => {
				this.getElementTop();
			});
		},
		/* 获取元素顶部信息 */
		getElementTop() {
			/* Promise 对象数组 */
			let p_arr = [];

			/* 新建 Promise 方法 */
			let new_p = selector => {
				return new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery().select(selector);
					view.boundingClientRect(data => {
						resolve(data.top);
					}).exec();
				});
			};

			/* 遍历数据，创建相应的 Promise 数组数据 */
			this.mainArray.forEach((item, index) => {
				p_arr.push(new_p(`#item-${index}`));
			});

			/* 所有节点信息返回后调用该方法 */
			Promise.all(p_arr).then(data => {
				this.topArr = data;
			});
		},
		/* 主区域滚动监听 */
		mainScroll(e) {
			let top = e.detail.scrollTop;
			let index = 0;
			/* 查找当前滚动距离 */
			for (let i = this.topArr.length - 1; i >= 0; i--) {
				/* 在部分安卓设备上，因手机逻辑分辨率与rpx单位计算不是整数，滚动距离与有误差，增加2px来完善该问题 */
				if (top + 2 >= this.topArr[i]) {
					index = i;
					break;
				}
			}
			this.leftIndex = index < 0 ? 0 : index;
		},
		/* 左侧导航点击 */
		leftTap(e) {
			let index = e.currentTarget.dataset.index;
			this.scrollInto = `item-${index}`;
		},
		Number1(index, index2) {
			var num = this.$store.state.main[index].list[index2].goodsNumber;
			if (num <= 0) {
			} else {
				num = num - 1;
				this.$store.state.main[index].list[index2].goodsNumber = num;
				this.$store.state.cartsNumber -= 1;
			}
		},
		Number2(index, index2) {
			var num = this.$store.state.main[index].list[index2].goodsNumber;
			if (num >= 9) {
			} else {
				num = num + 1;
				this.$store.state.main[index].list[index2].goodsNumber = num;
				this.$store.state.cartsNumber += 1;
			}
		},
		clearCarts(){
			this.$store.state.cartsNumber = 0
			for (let i = 0; i < this.$store.state.main.length; i++) {
				for (let j = 0; j < this.$store.state.main[i].list.length; j++) {
					this.$store.state.main[i].list[j].goodsNumber = 0
				}
			}
		},
		showPopup() {
			this.$nextTick(() => {
				this.$refs['showpopup'].open()
			})
		},
		totalAmount() {
			let amount = 0
			for (let i = 0; i < this.$store.state.main.length; i++) {
				for (let j = 0; j < this.$store.state.main[i].list.length; j++) {
					amount += (this.$store.state.main[i].list[j].goodsNumber * this.$store.state.main[i].list[j].price)
				}
			}
			return amount
		},
		checkOut() { //购物车结算函数
			uni.showModal({
				content: '是否确认结算该订单？',
				success: function(res) {
					if (res.confirm) {
									this.$store.state.showCartsList = false;
									this.$refs['showpopup'].close();
									let buy = [];
									let amount = 0
									for (let i = 0; i < this.$store.state.main.length; i++) {
										for (let j = 0; j < this.$store.state.main[i].list.length; j++) {
											amount += (this.$store.state.main[i].list[j].goodsNumber * this.$store.state.main[i].list[j].price)
											if(this.$store.state.main[i].list[j].goodsNumber){
												let buypush = {"goodsId":this.$store.state.main[i].list[j].id,"number":this.$store.state.main[i].list[j].goodsNumber,"goodsPrice":this.$store.state.main[i].list[j].price}
												buy.push(buypush)
											}
										}
									}
									if(buy.length == 0){
										uni.showToast({
											icon: 'none',
											title: '购物车为空，无法结算',
											duration: 1500,
											success: function() {
											}
										})
										return false;
									}
									uni.request({
										url: 'http://39.97.108.238/GP/public/goods/checkout',
										method: 'post',
										header: {
											'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
										},
										data: {
											user_name: this.name,
											amount: amount,
											buy: JSON.stringify(buy)
										},
										success: function(res) {
											if (res.data.status == 1) {
												uni.showToast({
													icon: 'none',
													title: '结算成功，花费' + res.data.data.price,
													duration: 1500,
													success: function() {
														for (let i = 0; i < this.$store.state.main.length; i++) {
															for (let j = 0; j < this.$store.state.main[i].list.length; j++) {
																this.$store.state.main[i].list[j].goodsNumber = 0;
															}
														}
														this.$store.state.cartsNumber = 0;
														setTimeout(function() {
															uni.switchTab({
																url: '/pages/tabbar/order/order'
															});
														}, 1000);
													}.bind(this)
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
	},
	components: {
		cartIcon,
		uniPopup
	},
	computed: {
		...mapState(['left', 'main','cartsNumber']),
		listenShowCartsList() {
		        return this.$store.state.showCartsList;
		      }
	},
	watch: {
		// 如果 `question` 发生改变，这个函数就会运行
		listenShowCartsList : function(New, Old) {
			if (New == true) {
				this.showPopup();
			}
		}
	}
};
</script>

<style lang="scss">
.list_box {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	font-size: 28rpx;
	.left {
		width: 200rpx;
		background-color: #f6f6f6;
		line-height: 80rpx;
		box-sizing: border-box;
		font-size: 32rpx;

		.item {
			padding-left: 20rpx;
			position: relative;

			&:not(:first-child) {
				margin-top: 1px;

				&::after {
					content: '';
					display: block;
					height: 0;
					border-top: #d6d6d6 solid 1px;
					width: 620upx;
					position: absolute;
					top: -1px;
					right: 0;
					transform: scaleY(0.5);
					/* 1px像素 */
				}
			}

			&.active {
				color: #42b983;
				background-color: #fff;
			}
		}
	}

	.main {
		background-color: #fff;
		padding-left: 20rpx;
		width: 0;
		flex-grow: 1;
		box-sizing: border-box;

		.title {
			line-height: 64rpx;
			font-size: 24rpx;
			font-weight: bold;
			color: #666;
			background-color: #fff;
			position: sticky;
			top: 0;
			z-index: 19;
		}

		.item {
			padding-bottom: 10rpx;
			border-bottom: #eee solid 1px;
		}
	}
}

		.goods {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin-bottom: 10rpx;

			& > image {
				width: 120rpx;
				height: 120rpx;
				margin-right: 16rpx;
			}

			.describe {
				font-size: 24rpx;
				color: #999;
			}

			.money {
				font-size: 24rpx;
				color: #efba21;
			}

			.goodsInfo {
				flex: 2;
			}

			.goodsPrice {
				flex: 1;
				text-align: center;
				padding-right: 40upx;
				// border: 1px solid #007AFF;
				height: 100rpx;
				display: flex;
				align-items: flex-end;

				.goodsNumber {
					display: block;
					width: 40upx;
					height: 40upx;
				}

				.changeGoodsPrice {
					display: block;
					width: 40upx;
					height: 40upx;
					background-color: #02aaff;
					border-radius: 40upx;
				}
			}
		}

.cart-icon {
	position: absolute;
	bottom: 100upx;
	right: 50upx;
}

.popup-content {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	background-color: #fff;
	padding: 15px;
	font-size: 14px;
}
.oldPrice{
	text-decoration: line-through;
}
.newPrice{
	padding-left: 10upx;
	font-size: 50upx;
	color: #f70f0f;
}
</style>
