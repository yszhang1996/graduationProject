<template>
	<view>
		<view class="news">
			<view class="news-header">
				<text class="news-header-left">{{title}}</text>
				<text class="news-header-right"></text>
			</view>
			<view class="news-all">
				<view class="news-list" @click="goToUrl('https://lol.tuwan.com/407246/','云顶懒人看版本')">
					<view class="news-list-image">
						<image src="@/static/img/home/strategy/yunding.jpg" mode=""></image>
					</view>
					<view class="news-list-info">
						<text class="news-list-info-title">云顶懒人看版本星系机制迎来更新</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：兔玩LOL</text>
							<text class="news-list-time">04-03 15:19</text>
						</view>
					</view>
				</view>
				<view class="news-list" @click="goToUrl('https://lol.tuwan.com/407848/','反制加里奥')">
					<view class="news-list-image">
						<image src="@/static/img/home/strategy/jialiao.jpg" mode=""></image>
					</view>
					<view class="news-list-info">
						<text class="news-list-info-title">支援型英雄制霸中路？三个思路成功反制</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：Funky</text>
							<text class="news-list-time">04-24 15:12</text>
						</view>
					</view>
				</view>
				<view class="news-list" @click="goToUrl('https://lol.tuwan.com/407969/','凯隐加强')">
					<view class="news-list-image">
						<image src="@/static/img/home/strategy/kaiyin.jpg" mode=""></image>
					</view>
					<view class="news-list-info">
						<text class="news-list-info-title">凯隐Gank能力大大加强 10.9版本改动抢先看</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：若希</text>
							<text class="news-list-time">04-29 13:34</text>
						</view>
					</view>
				</view>
				<view class="news-list" @click="goToUrl('https://lol.tuwan.com/407776/','云顶懒人看版本')">
					<view class="news-list-image">
						<image src="@/static/img/home/strategy/gouxiong.jpg" mode=""></image>
					</view>
					<view class="news-list-info">
						<text class="news-list-info-title">强攻狗熊异军突起 版本五大热门反制英雄</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：若希</text>
							<text class="news-list-time">04-22 14:15</text>
						</view>
					</view>
				</view>
				<view class="news-list" @click="goToUrl('https://lol.tuwan.com/403355/','云顶懒人看版本')">
					<view class="news-list-image">
						<image src="@/static/img/home/strategy/nvqiang.jpg" mode=""></image>
					</view>
					<view class="news-list-info">
						<text class="news-list-info-title">五多兰女枪强势对线 韩服三大黑科技套路</text>
						<view class="news-list-info-from">
							<text class="news-list-origin">作者：Funky</text>
							<text class="news-list-time">11-06 14:31</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ''
			};
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.title); //打印出上个页面传递的参数。
			this.title = option.title;
		},
		methods: {
			goToUrl(url, title) {
				console.log("2121");
				if (!url) return;
				uni.navigateTo({
					url: "../webview/webview?url=" + url + "&title=" + title
				});
			},
		},
	}
</script>

<style lang="scss">
	.news {
		width: 100%;
	}

	.news-header {
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin: 10rpx auto 0;
	}

	.news-header-left {
		font-size: 36rpx;
	}

	.news-header-right {
		font-size: 24rpx;
		color: #a9aaac;
	}

	.news-all {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin: 0 auto;
	}

	.news-list {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.news-list-image {
			width: 190rpx;
			height: 190rpx;
			border-radius: 15rpx;
			margin: 10rpx;

			image {
				width: 190rpx;
				height: 190rpx;
				border-radius: 15rpx;
			}
		}
	}

	.news-list-info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;

		.news-list-info-title {
			font-size: 34rpx;
			text-align: left;

		}

		.news-list-info-from {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 10rpx;

			.news-list-origin {
				font-size: 24rpx;
			}

			.news-list-time {
				font-size: 24rpx;
			}
		}
	}
</style>
