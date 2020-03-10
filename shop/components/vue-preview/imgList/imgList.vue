<template>
	<view>
		<view class="pic_list">
			<view @tap="clickPic(y)" v-for="(x, y) in imgs" :key="y">
				<image :src="x"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgs: [],
		};
	},
	onLoad(query) {
		// 获取图片列表数据
		this.imgs=uni.getStorageSync("imgs");
	},
	onUnload() {
		uni.removeStorageSync("img");
		uni.removeStorageSync("imgs");
		uni.removeStorageSync("index");
	},
	methods: {
		clickPic(index) {
			uni.setStorageSync("index",index);
			uni.navigateTo({
				url: '/components/vue-preview/imgPreview/imgPreview'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.pic_list {
	display: flex;
	flex-flow: row wrap;
	> view {
		flex: 0 0 240rpx;
		height: 240rpx;
		margin: 7.5rpx 0 0 7.5rpx;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
