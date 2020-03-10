<template>
	<view>
		<view class="imgs" v-if="imgs">
			<block v-for="(img, index) in imgs" :key="index">
				<view class="imgs-box"><image :src="img" mode="widthFix" style="width: 100%;" @click="previewImg(index, img, imgs)"></image></view>
			</block>
		</view>
	</view>
</template>
<script>
	export default {
		neme: "vue-preview",
		comments:{
		},
		props: {
			//评价列表数据
			imgs: {
				type: Array,
				default: function(){
					return [];
				},
			},
		},
		data() {
			return {
			};
		},
		methods: {
			previewImg(index, img, imgs) {
				uni.setStorageSync('index', index);
				uni.setStorageSync('img', img);
				uni.setStorageSync('imgs', imgs);
				uni.navigateTo({
					url: '/components/vue-preview/imgList/imgList'
				});
			}
		},
	};
</script>
<style lang="scss">
	.imgs {
		display: flex;
		flex-wrap: wrap;
		padding-top: 4px;
		.imgs-box {
			width: 25%;
			padding-right: 5px;
			box-sizing: border-box;
			image{
				border-radius: 4px;
			}
		}
	}
	.list{
			padding: 20rpx 20rpx;
		}
	.top {
		width: 100%;
		height: 400rpx;
		position: relative;
		> image {
			width: 100%;
			height: 100%;
		}
		> view {
			background-color: rgba(0, 0, 0, 0.7);
			display: flex;
			color: #fff;
			align-items: center;
			justify-content: center;
			padding: 0 14rpx;
			height: 40rpx;
			position: absolute;
			bottom: 30rpx;
			right: 30rpx;
			font-size: 30rpx;
			border-radius: 4rpx;
		}
	}
</style>