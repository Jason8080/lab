//商家信息
const storeData = 
{
	//商家唯一标识
	storeId: '1',
	//商家名称
	storeName: '闪购自营店',
	//头像
	avatar: '/static/www/avatar.jpg',
	//横幅图片
	banner: '/static/www/banner.jpg',
	//横幅图片
	merchantQr: '/static/www/merchantQr.jpg',
	//商家住址
	address: '江西省抚州市东乡区雄岚峰',
	//配送时间
	deliveryTime: '11:00~20:30',
	//联系电话
	telephone: '13173760709',
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
	