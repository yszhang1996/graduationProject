<template>
	<view style="background-color: #f6e1b9;height: 1334upx;">
		<view class="main">
			<view class="user">
				<image src="../../static/img/login/user.png" mode=""></image>
				<input class="input-user" type="text" value="" maxlength="20" focus="true" placeholder="请输入用户名/手机号" placeholder-class="input-placeholder-user" />
			</view>
			<view class="password">
				<image src="../../static/img/login/password.png" mode=""></image>
				<input class="input-password" type="text" password value="" maxlength="20" placeholder="请输入密码" placeholder-class="input-placeholder-user" />
			</view>
			<view class="passwordconfirm">
				<image src="../../static/img/login/password.png" mode=""></image>
				<input class="input-passwordconfirm" type="text" password value="" maxlength="20" placeholder="确认密码" placeholder-class="input-placeholder-user" />
			</view>
			<view class="agreement">
				<image src="../../static/img/login/agreement.png" mode=""></image>
				<text>用户协议</text>
			</view>
			<view class="submit"><text>注册</text></view>
			<view class="goTo">
				<text>返回登录</text>
				<text></text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.main {
	background-image: url(../../static/img/login/background.png);
	background-size: cover;
	width: 750upx;
	height: 1075upx;
	position: absolute;
	bottom: 0;
	padding-top: 250upx;
	box-sizing: border-box;

	.user {
		width: 450upx;
		margin: 0 auto;

		image {
			width: 50upx;
			height: 50upx;
			position: absolute;
			left: 158upx;
			top: 268upx;
		}

		.input-user {
			padding: 20upx;
			padding-left: 60upx;
			border-bottom: 1px solid #d2d2d2;
			width: 450upx;
			height: 85upx;
			box-sizing: border-box;
		}
	}

	.password {
		width: 450upx;
		margin: 0 auto;

		image {
			width: 40upx;
			height: 49upx;
			position: absolute;
			left: 162upx;
			top: 354upx;
		}

		.input-password {
			padding: 20upx;
			padding-left: 60upx;
			border-bottom: 1px solid #d2d2d2;
			width: 450upx;
			height: 85upx;
			box-sizing: border-box;
		}
	}
	
	.passwordconfirm {
		width: 450upx;
		margin: 0 auto;
	
		image {
			width: 40upx;
			height: 49upx;
			position: absolute;
			left: 162upx;
			top: 439upx;
		}
	
		.input-passwordconfirm {
			padding: 20upx;
			padding-left: 60upx;
			border-bottom: 1px solid #d2d2d2;
			width: 450upx;
			height: 85upx;
			box-sizing: border-box;
		}
	}

	.agreement {
		width: 450upx;
		height: 85upx;
		margin: 0 auto;
		display: flex;
		align-items: center;

		image {
			margin: 0 10upx;
			width: 40upx;
			height: 40upx;
		}
		text {
			font-size: 32upx;
			color: #1fa9fe;
		}
	}

	.submit {
		background-image: url(../../static/img/login/submit.png);
		background-size: cover;
		width: 450upx;
		height: 91upx;
		margin: 0 auto;
		text-align: center;
		line-height: 71upx;
		color: #f0f0f0;
	}

	.goTo {
		width: 450upx;
		margin: 0 auto;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
	}
}
.input-placeholder-user {
	color: #d2d2d2;
}
</style>
