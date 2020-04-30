<template>
	<view>
		<web-view v-if="url" :webview-styles="webviewStyles" :src="url"></web-view>
		<view class="" v-else>
			404
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				url: {

				}
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.url);
			if(option.url){
				this.url = option.url;
			}
			if(option.title){
				uni.setNavigationBarTitle({
				    title: option.title
				});
			}else{
				uni.setNavigationBarTitle({
				    title: '详情'
				});
			}
		}
	}
</script>

<style>

</style>
