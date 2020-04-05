//商品种类数据
const categoryList = [
	{
		id: 1,
		name: '畅销热卖', 
		goodsList: [
			{   
				id: 1,
				typeId:1,
				name:'黄瓜',
				descRipe:"脆糯营养，口感好，健康绿色",
				img:'/static/www/goods_1.jpg',
				price:"2.5",
				oldPrice:"5",
				unit:"斤",
			},
		]
	},
	{
		id: 4,
		name: '母婴妇幼', 
		goodsList: [
			{   
				id: 4,
				typeId:4,
				name:'茵茵XL婴儿尿片',
				descRipe:"舒爽透气，薄吸多，持久耐用",
				img:'/static/www/goods_2.jpg',
				price:"74",
				oldPrice:"99",
				unit:"箱(92片)",
			},
		]
	}
];
	
export default {
	categoryList,
	categoryLoad: async function(){
		let that = this;
		await uni.request({url: "http://localhost:8080/category/1/list"}).then(function(res){
			let data;
			try{
				data = res[1].data;
			} catch(e){}
			if(data!=undefined){
				that.categoryList = [];
				that.categoryList = data;
			}
		});
		return that.categoryList;
	}
}