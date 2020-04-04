const goodsList= [
	{   
		id: 1,
		type_id:1,
		name:'黄瓜',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_5.jpg',
		price:"9",
		oldprice:"100"
	}
]
//商品种类数据
const categoryList = [
	{
		id: 1,
		name: '畅销热卖', 
		goodsList: goodsList
	}
];
	
export default {
	goodsList,
	categoryList,
	categoryLoad: async function(){
		let that = this;
		await uni.request({url: "http://localhost:8080/1/category/list"}).then(function(res){
			let data;
			try{
				data = res[1].data;
			} catch(e){}
			if(data!=undefined){
				that.categoryList = [];
				data.forEach(function(o, i){
					that.categoryList.push(o);
				});
			}
		});
		return that.categoryList;
	}
}