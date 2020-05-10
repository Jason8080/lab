function bar(e){
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(e);

	// 指定图表的配置项和数据
	var option = {
		title: {
			text: '产品销量柱状图'
		},
		tooltip: {},
		xAxis: {
			data: xBarData
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: barData
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

	myChart.on("click", pieClick);
}

function pie(e){

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(e);

	// 指定图表的配置项和数据
	var option = {
		backgroundColor: '#2c343c',

		title: {
			text: '业绩贡献饼状图',
			left: 'center',
			top: 0,
			textStyle: {
				color: '#000000'
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				radius: '80%',
				center: ['50%', '50%'],
				data: pieData.sort(function (a, b) { return a.value - b.value; }),
				roseType: 'radius',
				label: {
					color: 'rgba(255, 255, 255, 0.3)'
				},
				labelLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, 0.3)'
					},
					smooth: 0.2,
					length: 10,
					length2: 20
				},
				itemStyle: {
					color: '#c23531',
					shadowBlur: 200,
					shadowColor: 'rgba(255,255,255,0)'
				},

				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function (idx) {
					return Math.random() * 200;
				}
			}
		],

		backgroundColor: 'white',
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

	myChart.on("click", pieClick);
}

function barClick(bar) {
	console.log(bar);
}
function pieClick(pie) {
	console.log(pie);
}
