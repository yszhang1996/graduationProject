<template>
	<view class="content">
		<view class="header"><text>会员中心</text></view>
		<view class="noVIP" v-if="vip == 0">
			<view class="contrast">
				<view class="user">
					<text>特权</text>
					<text>A区网费</text>
					<text>零食饮料</text>
					<text>优惠券</text>
				</view>
				<view class="user">
					<text>普通用户</text>
					<text>5元/每小时</text>
					<text>不打折</text>
					<text>不赠送</text>
				</view>
				<view class="user">
					<text>VIP用户</text>
					<text>4元/每小时</text>
					<text>8折</text>
					<text>五张优惠券</text>
				</view>
			</view>
			<view class="openVIP" @click="newvip()">立即开通</view>
		</view>
		<view class="VIP" v-else>
			<view class="triangle">
				
			</view>
			<view class="vipcontent">
				<image src="../../../static/img/vip/user.jpg" mode=""></image>
				<view class="usercontent">
					<text>{{name}}</text>
					<text class="datetime">您的会员即将在{{formatDate(viptime)}}到期</text>
				</view>
			</view>
			<view class="progressinfo">
				<text>lv.{{viplevel}}</text>
				<text>所需积分{{levelupNeedScore}}</text>
				<text>lv.{{viplevel+1}}</text>
			</view>
			<cmd-progress :percent="levelupNeedScorePercentage" class="progress"></cmd-progress>
			<view class="vipcard">
				<text class="vipcard-top">网吧会员卡</text>
				<view class="vipcard-center">
					<text class="datetime vipcard-center-left">将在{{formatDate(viptime)}}到期</text>
					<text class="vipcard-center-right">续费></text>
				</view>
				<view class="vipinfo">
					<view class="vipinfolist">
						<text>5</text>
						<text>优惠券</text>
					</view>
					<view class="vipinfolist">
						<text>{{vipscore}}</text>
						<text>积分</text>
					</view>
					<view class="vipinfolist">
						<text>VIP{{viplevel}}</text>
						<text>等级</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
export default {
	data() {
		return {
			title: 'Hello',
			name: '',
			vip: '',
			viptime: '',
			vipscore: '',
			viplevel: '',
			levelupNeedScore: '',
			levelupNeedScorePercentage: ''
		};
	},
	onLoad() {},
	onShow() {
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
		uni.request({
			url: 'http://39.97.108.238/GP/public/vip/ifvip',
			method: 'get',
			// header: {
			// 	'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
			// },
			data:{
				username: this.name,
			},
			success: function(res) {
				console.log(res.data);
				if(res.data.status == "1"){
					this.vip = 1;
					this.viptime = res.data.data.time;
					this.vipscore = res.data.data.score;
					this.viplevel = this.vipscore.toString().length >=3 ? this.vipscore.toString().length - 2 : 1;           //this.vipscore.toString().length - 2;
					var weishu = this.vipscore.toString().length >=3 ? this.vipscore.toString().length : 3;
					this.levelupNeedScore = Math.pow(10,weishu) - this.vipscore;
					this.levelupNeedScorePercentage = parseInt((this.vipscore/this.levelupNeedScore)*100);
				}else{
					this.vip = 0;
				}
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
			return year + '/' + month + '/' + date;
		},
		newvip() {
			uni.request({
				url: 'http://39.97.108.238/GP/public/vip/newvip',
				method: 'get',
				// header: {
				// 	'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				// },
				data:{
					username: this.name,
				},
				success: function(res) {
					console.log(res.data);
					if(res.data.status == "1"){
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1500,
							success: function() {
								setTimeout(function(){
									uni.switchTab({
										url: '/pages/tabbar/home/home'
									});
								},1000);
							}.bind(this)
						});
					}else{
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1500,
							success: function() {
								setTimeout(function(){
									uni.switchTab({
										url: '/pages/tabbar/home/home'
									});
								},1000);
							}.bind(this)
						});
					}
				}.bind(this),
				complete:function(){
				}
			});
		}
	},
	components: {cmdProgress}
};
</script>

<style lang="scss">
.content {
	background:rgba(0, 0, 0, 0);
	height: calc(100vh - 100upx);
	//#ifdef APP-PLUS
	height: 100vh;
	//#endif
}
.header {
	background-color: #edcba6;
	padding-top: var(--status-bar-height);
	padding-right: 20upx;
	margin-bottom: 20upx;
	font-size: 36upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
	color: #fcf5f1;
}

.contrast {
	display: flex;

	.user {
		height: 320upx;
		text-align: center;
		flex: 1;
		display: flex;
		flex-direction: column;

		text {
			height: 70upx;
			border-bottom: 1px solid #ccc;
			font-size: 32upx;
			line-height: 70upx;
		}
	}
}
.openVIP {
	width: 300upx;
	height: 70upx;
	border-radius: 20upx;
	background-color: #db2525;
	margin: 20upx auto;
	text-align: center;
	line-height: 70upx;
	color: #f0ecec;
}
.VIP{
	color: #fcf5f1;
	text-align: center;
	position: relative;
	background:rgba(0, 0, 0, 0);
	.triangle{
		    width: 0;
		    height: 0;
		    border: 1850upx solid;
		    border-color: #edcba6 transparent transparent #edcba6;
			transform:rotate(30deg);
			position: absolute;
			top: -1800upx;
			z-index: -1;
	}
	
	.vipcontent{
		padding-top: 50upx;
		width: 550upx;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 100upx;
			
		}
		.usercontent{
			margin-left: 30upx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size: 30upx;
			text-align: left;
			
			.datetime{
				color: #7b4e2f;
			}
		}
	}
	.vipcard{
		background-color: #efd4c1;
		width: 80%;
		height: 300upx;
		border-radius: 20upx;
		margin: 60upx auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		
		*{
			width: 85%;
			margin: 0 auto;
		}
		
		.vipcard-top{
			text-align: left;
			color: #946040;
		}
		
		.vipcard-center{
			display: flex;
			justify-content: space-between;
			font-size: 30upx;
			
			.vipcard-center-left{
				text-align: left;
				width: 500upx;
				color: #b8937a;
			}
			
			.vipcard-center-right{
				text-align: right;
			}
		}
		
		.vipinfo{
			font-size: 32upx;
			display: flex;
			justify-content: space-around;
			
			.vipinfolist{
				display: flex;
				flex-direction: column;
				color: #87583e;
			}
		}
	}
}

.progressinfo{
	width: 76%;
	display: flex;
	justify-content: space-between;
	color: #bc9578;
	font-size: 24upx;
	margin: 0 auto;
	margin-top: 20upx;
}
.progress{
	width: 80%;
	margin: 0 auto;
	margin-top: 20upx;
}
</style>
