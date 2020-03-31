//商品种类数据
const categoryData = [
	{id: 1,name: '畅销热卖'},
	// {id: 2,name: '生鲜果蔬'},
	// {id: 3,name: '鲜花绿植'},
	// {id: 4,name: '母婴妇幼'},
	// {id: 5,name: '设计制作'},
	// {id: 6,name: '货运跑腿'},
];
	
export default {
	categoryData,
	categoryLoad: async function(){
		let that = this;
		await uni.request({			url: "http://localhost:8080/category/list", 
			data: {},		}).then(function(res){
			let data;
			try{
				data = res[1].data;
			} catch(e){}
			if(data!=undefined){
				that.categoryData = [];
				data.forEach(function(o, i){
					that.categoryData.push(o);
				});
			}
		});
		return that.categoryData;
	}
}