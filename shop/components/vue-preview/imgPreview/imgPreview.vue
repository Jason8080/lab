<template>
	<view class="">
		<view class="mask">
			<swiper @change="changeSwiper" class="my_swiper" :current="index" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :duration="duration">
				<swiper-item v-for="(x, y) in picList" :key="y">
					<view class="bg_img" :style="{ backgroundImage: 'url('+x+')'}"></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="page" v-if="imgs.length>0">{{ index + 1 }} / {{ imgs.length }}</view>
	</view>
</template>

<script>
export default { 
	data() {
		return {
			imgs: [],
			indicatorDots: false,
			autoplay: false,
			duration: 500,
			circular: true,
			index: 0,
			isShowSwiper: false
		};
	},
	onLoad() {
		this.picListInit();
	}, 
	methods: {
		clickPic(index) {
			this.index = index;
			this.isShowSwiper = true;
		},
		async picListInit() {
			this.current=uni.getStorageSync("index");
			this.imgs=uni.getStorageSync("imgs");
		},
		changeSwiper(e) {
			this.index = e.target.index;
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	position: fixed;
	z-index: 6;
	color: #fff;
	bottom: 20rpx;
	text-align: center;
	width: 100%;
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	z-index: 5;
	> .my_swiper {
		width: 100%;
		height: 60vh;
		.bg_img {
			background-size: 100% auto;
			background-repeat: no-repeat;
			background-position:center;
			width: 100%;
			height: 100%;
		}
	}
}

.pic_list {
	display: flex;
	flex-flow: row wrap;
	> view {
		flex: 0 0 33.3vw;
		height: 33.3vw;
		padding: 1vw;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
