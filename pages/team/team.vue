<template>
	<view>
		<view class="uni-textarea"><textarea auto-height placeholder="在该区域输入您想发送的动态" v-model="content" /></view>
		<button type="primary" class="submit" @click="submit()">发送动态</button>
		<view class="messageList" v-for="(item, index) in teamAll" :key="index">
			<view class="messageInfo">
				<text class="userName" v-if="item.nickname">{{item.nickname}}</text>
				<text class="userName" v-else>{{item.username}}</text>
				<text class="messageTime">{{ formatDate(item.time) }}</text>
			</view>
			<view class="notice">
				<text class="lastMessage">{{item.content}}</text>
			</view>
		</view>
<!-- 		<view class="messageList">
			<view class="messageInfo">
				<text class="userName">匿名用户</text>
				<text class="lastMessage">英雄联盟：一区找队友开黑上钻石，ID：xxx</text>
			</view>
			<view class="notice">
				<text class="messageTime">11：11</text>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			name:'',
			nickname:'',
			content:'',
			teamAll:{},
		};
	},
	onShow() {
		uni.getStorage({
		    key: 'userInfo',
		    success: function (res) {
		        console.log(JSON.stringify(res.data));
				this.name = res.data.username;
				this.nickname = res.data.nickname;
				this.getlist();
		    }.bind(this),
			fail:function(err){
				console.log(err.errMsg);
				uni.navigateTo({
				    url: '/pages/login/login'
				});
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
		submit(){
			uni.request({
				url: 'http://39.97.108.238/GP/public/team/update',
				method: 'post',
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				data:{
					username: this.name,
					nickname: this.nickname,
					content: this.content
				},
				success: function(res) {
					console.log(res.data);
					if(res.data.status == "1"){
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1500,
							success: function() {
								this.content = "";
								this.getlist();
							}.bind(this)
						});
					}else{
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1500,
							success: function() {}
						});
					}
				}.bind(this),
				complete:function(){
				}
			}).bind(this);
		},
		getlist(){
			uni.request({
				url: 'http://39.97.108.238/GP/public/team/all',
				method: 'get',
				success: function(res) {
					console.log(res.data);
					if(res.data.status == "1"){
						this.teamAll = res.data.data;
					}else{
						uni.showToast({
							icon: 'none',
							title: res.data.message,
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
					// this.orderList = res.data;
				}.bind(this),
				complete:function(){
				}
			});
		}
	}
};
</script>

<style lang="scss">
.dynamic {
	margin: 0 auto;
	border: 1px solid #808080;
	border-radius: 15upx;
}
.uni-textarea {
	textarea {
		width: 94%;
		height: 100upx !important;
		border: 1px solid #eee;
		margin: 0 auto;
	}
}
.submit {
	font-size: 24upx;
	width: 200upx;
	margin: 20upx;
}
        .messageList {
            width: 96%;
            display: flex;
			flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e7e7e7;
            margin: 0 auto;
			font-size: 28upx;
        }

        .messageInfo {
            display: flex;
			width: 94%;
            justify-content: space-between;
            align-items: center;
            flex: 5;
            margin-left: 5px;
        }

        .userName {
            color: #353535;
            margin: 3px;
        }

        .notice{
			width: 92%;
			.lastMessage {
			    color: #999999;
			    margin: 3px;
				word-break: break-all;
				text-align: left;
			}
		}
</style>
