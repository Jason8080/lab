//商品种类数据
const categoryData = [
	{id: 1,name: '畅销热卖'},
	{id: 2,name: '生鲜果蔬'},
	{id: 3,name: '鲜花绿植'},
	{id: 4,name: '母婴妇幼'},
];
	
export default {
	categoryData,
	categoryInit: async function(){
		let that = this;
		/* await */ uni.request({			url: "http://192.168.1.101:8080/category/list", 
			data: {},
			success: function(data) {
				console.log(data);
				that.categoryData = data;			}		});
		return that.categoryData;
	}
}