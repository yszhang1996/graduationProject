<template>
	<view>
		<image class="cart-image" src="/static/img/cart/cart.png" mode="" @click="sendMsg()"></image>
		<text class="red-dot" v-if="$store.state.cartsNumber > 0">{{$store.state.cartsNumber}}</text>
		<!-- <button class="button" type="primary" @click="togglePopup('bottom', 'popup')">底部弹出 popup</button> -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				type: '',
				content: '顶部弹 popup',
			}
		},
		mounted() {

		},
		methods: {
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
					this.$refs['showpopup'].open()
				})
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			onBackPress() {
				this.$refs['showpopup'].close()
				this.$refs['showtip'].close()
				this.$refs['showimage'].close()
				this.$refs['showshare'].close()
			},
			add() {
				console.log(this.carts);
				// this.carts -= 1
			},
			sendMsg() {
				//func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
				this.$store.state.showCartsList = true
			}
		},
		components: {
			uniPopup
		},
		computed: {
			...mapState(['cartsNumber'])
		},
		props: [
			'carts',
			'flag'
		],
	}
</script>

<style>
	.cart-image {
		padding: 10upx;
		width: 100upx;
		height: 100upx;
		border-radius: 100upx;
		border: 1px solid #ccc;
	}

	.red-dot {
		position: absolute;
		top: -10upx;
		right: -10upx;
		height: 40upx;
		width: 40upx;
		border-radius: 40upx;
		font-size: 36upx;
		text-align: center;
		line-height: 40upx;
		color: #fff;
		background-color: #ff0000;
	}
</style>
