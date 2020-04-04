//评论数据
const commentData = {
	totalScore: 5,
	freshness: 4.9,
	packaging: 4.5,
	delivery: 99,
	commentList: [
		{
			headerImg: "/static/www/user_avatar.jpg",
			userName: "李香兰",
			rate:5,
			createTime: "2019.04.12",
			content: "好评",
			imgList:[
				'/static/comments/1.jpg',
				'/static/comments/2.jpg',
				'/static/comments/3.jpg',
				'/static/comments/4.jpg',
				'/static/comments/5.jpg',
				'/static/comments/6.jpg',
			]
		}
	]
};


export default {
	commentData,
	commentLoad: async function(){
		let that = this;
		await uni.request({url: "http://localhost:8080/comment/store/1"}).then(function(res){
			let data;
			try{
				data = res[1].data;
			} catch(e){}
			if(data!=undefined){
				that.commentData = {};
				that.commentData = data;
			}
		});
		return that.commentData;
	}
}