//评论数据
const commentList = [
	{
		headerImg: "/static/face/face_2.jpg",
		userName: "测试1",
		rate:5,
		createTime: "2019.04.12",
		content: "好评",
		imgList:[
			'/static/face/face.jpg',
			'/static/face/p10.jpg',
			'/static/face/face_14.jpg',
			'/static/face/face.jpg',
			'/static/face/p10.jpg',
		]
	}
];


export default {
	commentList,
	commentLoad: async function(){
		let that = this;
		await uni.request({url: "http://localhost:8080/comment/1/1/list"}).then(function(res){
			let data;
			try{
				data = res[1].data;
			} catch(e){}
			if(data!=undefined){
				that.commentList = [];
				data.forEach(function(o, i){
					that.commentList.push(o);
				});
			}
		});
		return that.commentList;
	}
}