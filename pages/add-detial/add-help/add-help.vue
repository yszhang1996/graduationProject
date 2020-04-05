<template>
	<view class="content">
		<view class="messageList">
			<view class="messageInfo">
				<text class="userName">帐号被盗如何找回？</text>
				<text class="lastMessage">由于帐号采用的是大帐号体系，请您至前台进行操作。</text>
			</view>
		</view>
		<view class="messageList">
			<view class="messageInfo">
				<text class="userName">如何使用微信登录帐号？</text>
				<text class="lastMessage">目前暂不支持第三方账号登录，该功能会在后续版本中更新</text>
			</view>
		</view>
		<view class="messageList">
			<view class="messageInfo">
				<text class="userName">忘记帐号，如何删除已发内容？</text>
				<text class="lastMessage">如帐号已绑定手机或邮箱，可直接使用手机或邮箱进行登录；如未绑定手机或邮箱，暂时无法进行帐号找回，请您仔细回想用户名。感谢您对我们的支持！</text>
			</view>
		</view>
		<view class="messageList">
			<view class="messageInfo">
				<text class="userName">更换手机号之后，别人再用这个号申请帐号，怎么办？</text>
				<text class="lastMessage">如果密码没丢失，是不影响登录的，但一旦密码丢失或绑定关系改变，就没办法再用这个手机号找回密码。所以如果更换手机，请同时也要把帐号的绑定手机换成最新的手机号。</text>
			</view>
		</view>
		<view class="messageList">
			<view class="messageInfo">
				<text class="userName">如何进行投诉？</text>
				<text class="lastMessage">投诉是我们为方便用户反映问题或请求帮助而提供的一项服务。您在本软件遇到的任何问题或困难，都可以通过填写并提交投诉信息的方式，发起投诉并获得解决。提交成功的投诉信息将在最短时间内由管理员审核、处理，并通知处理结果。</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		margin-top: 50upx;
	}
	.messageList {
	    width: 96%;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    border-bottom: 1px solid #e7e7e7;
	    margin: 0 auto;
		font-size: 28upx;
	}
	
	.messageInfo {
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: flex-start;
	    flex: 5;
	    margin-left: 5px;
	}
	
	.userName {
	    color: #353535;
	    margin: 3px;
	}
	
	.lastMessage {
	    color: #999999;
	    margin: 3px;
		text-align: left;
	}
</style>
