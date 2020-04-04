//商家信息
const storeData = 
{
	//商家唯一标识
	storeId: '168',
	//商家名称
	storeName: '小太阳商店',
	//头像
	avatar: '/static/face/face_2.jpg',
	//横幅图片
	banner: '/static/face/banner.jpg',
	//横幅图片
	merchantQr: '/static/qr/merchantQr.jpg',
	//商家住址
	address: '新疆阿克苏是他北路2号',
	//配送时间
	deliveryTime: '11:00~20:30',
	//联系电话
	telephone: '18888888888',
	//商家购物车
	shoppingCart: [],
	//配送费
	shippingDees: 4,
	//配送起步价
	startingPrice:30
}
	
export default {
	storeData,
	storeLoad: async function(){
		let that = this;
		await uni.request({url: "http://localhost:8080/store/1"}).then(function(res){
			let data;
			try{
				data = res[1].data;
			} catch(e){}
			if(data!=undefined){
				that.storeData = {};
				that.storeData = data;
			}
		});
		return that.storeData;
	}
}
	