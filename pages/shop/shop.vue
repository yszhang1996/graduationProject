<template>
	<view class="list_box">
		<view class="left">
			<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
				<view class="item" v-for="(item,index) in leftArray" :key="index" :class="{ 'active':index==leftIndex }"
				 :data-index="index" @tap="leftTap">{{item}}</view>
			</scroll-view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" @scroll="mainScroll" :scroll-into-view="scrollInto"
			 scroll-with-animation="true">
				<view class="item" v-for="(item,index) in mainArray" :key="index" :id="'item-'+index">
					<view class="title">
						<view>{{item.title}}</view>
					</view>
					<view class="goods" v-for="(item2,index2) in item.list" :key="index2">
						<image src="/static/logo.png" mode=""></image>
						<view class="goodsInfo">
							<view>{{item2.title}}商品标题</view>
							<view class="describe">月售：{{item2.monthlySales}}</view>
							<view class="money">价格：¥{{item2.price}}</view>
						</view>
						<view class="goodsPrice">
							<text class="changeGoodsPrice" @click="Number1(index,index2)">-</text>
							<text class="goodsNumber">{{item2.goodsNumber}}</text>
							<text class="changeGoodsPrice" @click="Number2(index,index2)">+</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<button class="button" type="primary" @click="togglePopup('bottom', 'popup')">底</button>
		<cart-icon v-if="!showCartFlag" class="cart-icon" :carts="cartsNumber" :flag="showCartFlag" @func="getMsgFormSon"></cart-icon>
		<uni-popup ref="showpopup" :type="type" @change="change" @func="getMsgFormSon1"><text class="popup-content">{{ content }}</text></uni-popup>
	</view>
</template>

<script>
	import cartIcon from "@/components/cart-icon/cart-icon.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				showCartFlag: false,
				scrollHeight: '500px',
				leftArray: [],
				mainArray: [],
				topArr: [],
				leftIndex: 0,
				scrollInto: '',
				type: '',
				content: '顶部弹 popup',
				cartsNumber: 0,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					/* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
					this.scrollHeight = `${res.windowHeight}px`;
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
				let [left, main] = [
					[],
					[]
				];

				left = ["小食", "饮料", "主食"];

				main = [{
					title: `小食类商品标题`,
					list: [{
						id: 1,
						title: "火腿肠",
						monthlySales: 5,
						price: 10,
						goodsNumber: 0
					}]
				}, {
					title: `主食类商品标题`,
					list: [{
						id: 2,
						title: "泡面",
						monthlySales: 5,
						price: 10,
						goodsNumber: 0
					}]
				}, {
					title: `饮料类商品标题`,
					list: [{
						id: 3,
						title: "可乐",
						monthlySales: 5,
						price: 10,
						goodsNumber: 0
					}]
				}];
				this.leftArray = left;
				this.mainArray = main;

				this.$nextTick(() => {
					this.getElementTop();
				});
			},
			/* 获取元素顶部信息 */
			getElementTop() {
				/* Promise 对象数组 */
				let p_arr = [];

				/* 新建 Promise 方法 */
				let new_p = (selector) => {
					return new Promise((resolve, reject) => {
						let view = uni.createSelectorQuery().select(selector);
						view.boundingClientRect(data => {
							resolve(data.top);
						}).exec();
					})
				}

				/* 遍历数据，创建相应的 Promise 数组数据 */
				this.mainArray.forEach((item, index) => {
					p_arr.push(new_p(`#item-${index}`));
				});

				/* 所有节点信息返回后调用该方法 */
				Promise.all(p_arr).then((data) => {
					this.topArr = data;
				});
			},
			/* 主区域滚动监听 */
			mainScroll(e) {
				let top = e.detail.scrollTop;
				let index = 0;
				/* 查找当前滚动距离 */
				for (let i = (this.topArr.length - 1); i >= 0; i--) {
					/* 在部分安卓设备上，因手机逻辑分辨率与rpx单位计算不是整数，滚动距离与有误差，增加2px来完善该问题 */
					if ((top + 2) >= this.topArr[i]) {
						index = i;
						break;
					}
				}
				this.leftIndex = (index < 0 ? 0 : index);
			},
			/* 左侧导航点击 */
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.scrollInto = `item-${index}`;
			},
			Number1(index, index2) {
				var list = this.mainArray
				// console.log(index);
				// console.log(index2);
				// console.log(JSON.stringify(list[index].list[index2].goodsNumber))
				var num = list[index].list[index2].goodsNumber;
				if (num <= 0) {

				} else {
					num = num - 1;
					list[index].list[index2].goodsNumber = num;
					this.cartsNumber -= 1;
				}
			},
			Number2(index, index2) {
				var list = this.mainArray
				// console.log(index);
				// console.log(index2);
				// console.log(JSON.stringify(list[index].list[index2].goodsNumber))
				var num = list[index].list[index2].goodsNumber;
				if (num >= 9) {

				} else {
					num = num + 1;
					list[index].list[index2].goodsNumber = num;
					this.cartsNumber += 1;
				}

			},
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break

					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					console.log(this.$refs);
					this.$refs['show' + open].open()
				})
			},
			onBackPress() {
				console.log("11");
				this.$refs['showpopup'].close()
				this.$refs['showtip'].close()
				this.$refs['showimage'].close()
				this.$refs['showshare'].close()
			},
			getMsgFormSon(data) {
				this.showCartFlag = data
				console.log(this.showCartFlag)
			},
			getMsgFormSon1(data) {
				this.showCartFlag = data
				console.log(this.showCartFlag)
			}
		},
		components: {
			cartIcon,
			uniPopup
		},
		watch: {
		    // 如果 `question` 发生改变，这个函数就会运行
		    showCartFlag: function (New, Old) {
		      if(New == true){
				  this.togglePopup('bottom', 'popup');
			  }
		    }
		},
	}
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

			.goods {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;
				margin-bottom: 10rpx;

				&>image {
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
</style>
