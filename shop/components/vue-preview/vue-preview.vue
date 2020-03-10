<template>
	<view class="imgs" v-if="imgs">
		<block v-for="(img, index) in imgs" :key="index">
			<view class="imgs-box"><image :src="img" mode="widthFix" style="width: 100%;" @click="previewImg(index, img, imgs)"></image></view>
		</block>
	</view>
</template>
<script>
	import viewJs from "./vue-preview.min.js";
	
	export default {
		neme: "vue-preview",
		comments:{
			viewJs
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
			previewImg(index, img, imgs){
				alert(index);
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
</style>