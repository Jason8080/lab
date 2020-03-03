//商家信息
const storeData = {
		//商家唯一标识
		storeId: '168',
		//商家名称
		storeName: '小太阳商店',
		//头像
		avatar: '/static/face/face_2.jpg',
		//横幅图片
		banner: '/static/face/banner.jpg',
		//商家住址
		address: '新疆阿克苏是他北路2号',
		//配送时间
		deliveryTime: '11:00~20:30',
		//联系电话
		telephone: '18299989916',
		//商家购物车
		shoppingCart: [],
		//配送费
		shippingDees: 4,
		//配送起步价
		startingPrice:30
	};

//评论数据
const commentData = [{
		header_img: "/static/face/face_2.jpg",
		user_name: "测试1",
		rate:5,
		create_time: "2019.04.12",
		content: "好评",
		imgs:[
			'/static/face/face.jpg',
			'/static/face/p10.jpg',
			'/static/face/face_14.jpg',
			'/static/face/face.jpg',
			'/static/face/p10.jpg',
		]
	},
	{
		content: "中评",
		create_time: "2019.04.12",
		header_img: "/static/face/face_12.jpg",
		user_name: "测试2",
		rate:4,
		// imgs:[]
	},
	{
		content: "",
		create_time: "2019.04.12",
		header_img: "/static/face/face_15.jpg",
		user_name: "测试3",
		rate:2,
		// imgs:[]
	},{
		content: "好评",
		create_time: "2019.04.12",
		header_img: "/static/face/face_2.jpg",
		user_name: "测试1",
		rate:5,
		imgs:[
			'/static/face/face.jpg',
			'/static/face/p10.jpg',
			'/static/face/face_14.jpg',
			'/static/face/face.jpg',
			'/static/face/p10.jpg',
		]
	},
	{
		content: "中评",
		create_time: "2019.04.12",
		header_img: "/static/face/face_12.jpg",
		user_name: "测试2",
		rate:3.5,
		// imgs:[]
	},
	{
		content: "",
		create_time: "2019.04.12",
		header_img: "/static/face/face_15.jpg",
		user_name: "测试3",
		rate:2.3,
		// imgs:[]
	}];

//商品数据
const goodsData= [{   
		id: 1,
		type_id:1,
		name:'黄瓜',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_5.jpg',
		price:"9",
		oldprice:"100"
	},
	{   
		id: 2,
		type_id:2,
		name:'精品秋葵600g',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_8.jpg',
		price:"8",
		oldprice:"100"
	},
	{   
		id: 3,
		type_id:2,
		name:'西红柿',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 4,
		type_id:3,
		name:'羊肉',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_1.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 5,
		type_id:3,
		name:'玫瑰花',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_2.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 6,
		type_id:4,
		name:'玫瑰花',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_3.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 7,
		type_id:5,
		name:'玫瑰花',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_4.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 8,
		type_id:5,
		name:'玫瑰花',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_12.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 9,
		type_id:5,
		name:'玫瑰花',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_11.jpg',
		price:"4",
		oldprice:""
	},
	{   
		id: 10,
		type_id:6,
		name:'玫瑰花',
		descripe:"脆糯营养，口感好，健康绿色",
		img:'/static/face/face_13.jpg',
		price:"4",
		oldprice:""
	}];
	
//商品种类数据
const categoryData = [
		{id: 1,name: '生鲜果蔬'},
		{id: 2,name: '鲜花绿植'},
		{id: 3,name: '美食1'},
		{id: 4,name: '美食2'},
		{id: 5,name: '美食3'},
		{id: 6,name: '美食4'},
		{id: 7,name: '美食5'},
		{id: 8,name: '美食6'},
		{id: 9,name: '美食7'},
		{id: 10,name: '美食8'},
		{id: 11,name: '美食9'},
		{id: 12,name: '美食10'},
		{id: 13,name: '美食11'}
	];
	
export default {
	storeData,
	commentData,
	goodsData,
	categoryData
}
	