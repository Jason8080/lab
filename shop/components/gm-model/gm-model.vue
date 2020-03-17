<template>
	<view>
		<!-- mask层 -->
		<view :class="['mask', show ? '' : 'visible']"></view>
		<!-- 金额 -->
		<view :class="['content', show ? '' : 'contenthide']">
			<view class="title">
				<view class="close" @click="close()"><image src="../../static/pay/close.png" /></view>
				<view class="center">长按图中二维码</view>
				<view class="close"></view>
			</view>
			<view class="imgBox">
				<image src="../../static/qr/merchantQr.jpg" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false 
			},
			isIphoneX: {
				type: Boolean,
				default: false 
			},
		},
		data() {
			return {
				password: '',
				trantision: false
			};
		},
		methods: {
			key(key) {
				if (this.password.length < 6) {
					this.password += key;
					if (this.password.length == 6) {
						console.log(this.password);
						uni.showToast({	title: '输入完成' });
					}
				}
			},
			clear() {
				this.password = '';
			},
			close() {
				this.password = '';
				this.trantision = false;
				this.$emit('close', false);
			},
			del() {
				if (this.password.length > 0) {
					this.password = this.password.substring(0, this.password.length - 1);
				}
			}
		}
	}
</script>

<style lang="scss">
	input {
		display: none;
	}
	.imgBox {
		display: flex;
		text-align: center;
		justify-content: center;
	
		image {
			width: 200px;
			height: 200px;
		}
	}
	.mask {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		transition: all 0.3s ease;
		background: rgba(102, 102, 102, 0.3);
		opacity: 1;
		z-index: 2;
		visibility: visible;
	}
	.content {
		width: 588rpx;
		height: 570rpx;
		border-radius: 15rpx;
		position: absolute;
		left: 50%;
		top:35%;
		margin-left: -294rpx;
		margin-top: -885rpx;
		background: #fff;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		z-index: 2;
		opacity: 1;
		visibility: visible;
		transition: all 0.3s ease;
	}
	.contenthide {
		margin-left: -350rpx;
		margin-top: -340rpx;
		width: 700rpx;
		height: 680rpx;
		opacity: 0;
		z-index: 0;
		visibility: hidden;
	}
	.visible {
		opacity: 0;
		z-index: 2;
		visibility: hidden;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		width: 560rpx;
		font-size: 32rpx;
	}
	.center {
		color: #333;
		font-size: 32rpx;
	}
	.close {
		width: 50rpx;
		height: 50rpx;	
	}
	image {
		width: 100%;
		height: 100%;
	}
	.pay-money {
		width: 525rpx;
		height: 240rpx;
		border-bottom: 1rpx solid #EBEBEB;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.pay-money view {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pay-way {
		width: 520rpx;
		height: 85rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #8A8A8A;
		font-size: 28rpx;
	}
	.money {
		font-size: 45rpx;
		font-weight: 600;
		margin-bottom: 50rpx;
	}
	.money text {
		font-size: 60rpx;
		margin-left: 10rpx;
	}
	.pay-img {
		color: #333333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pay-img image {
		width: 35rpx;
		height: 35rpx;
		margin-right: 10rpx;
	}
	.code {
		width: 100%;
		height: 120rpx;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}
	.code-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 1px solid #d0d0d0;
	}
	.code-box-item {
		width: 86rpx;
		height: 86rpx;
		background: #fff;
		font-size: 40rpx;
		line-height: 75rpx;
		text-align: center;
	}
	.code-box-item:not(:last-child) {
		border-right: 1px solid #d0d0d0;
	}
	.keyboard {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #EBEBEB;
		display: flex;
		justify-content: center;
		z-index: 2;
		flex-wrap: wrap;
		transition:all 0.2s ease-in 0.2s;
	}
	.active {
		bottom: -400rpx;
	}
	.keyboard-item {
		box-sizing: border-box;
		width: 250rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		font-size: 40rpx;
		color: #333;
		height: 99rpx;
		border: 1rpx solid #EBEBEB;
		border-top:none;
		border-left:none;
	}
	.hide {
		opacity: 0;
	}
	.delte {
		background: none;
		box-shadow: none;
	}
	.delte image {
		width: 60rpx;
		height: 60rpx;
	}
	.isIphone {
		padding-bottom: 68rpx !important;
	}
</style>
