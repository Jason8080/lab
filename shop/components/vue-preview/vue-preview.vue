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
		name: "vue-preview",
		comments: {
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
				
			}
		},
		methods: {
			
		}
	}
</script>
