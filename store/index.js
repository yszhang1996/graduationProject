import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		showCartsList: false,//购物车清单是否显示的标识符,默认不显示
		cartsNumber: 0, //购物车总数,默认为零
		left: ['小食', '饮料', '主食'], //零食饮料模块种类
		main: [ //零食饮料模块具体商品,因为上面这几条数据不只在一个组件中使用,所以使用vuex全局变量
			{
				title: `小食类商品标题`,
				list: [{
					id: 1,
					title: '火腿肠',
					monthlySales: 5,
					price: 10,
					goodsNumber: 0
				}]
			},
			{
				title: `主食类商品标题`,
				list: [{
					id: 2,
					title: '泡面',
					monthlySales: 5,
					price: 10,
					goodsNumber: 0
				}]
			},
			{
				title: `饮料类商品标题`,
				list: [{
					id: 3,
					title: '可乐',
					monthlySales: 5,
					price: 10,
					goodsNumber: 0
				}]
			}
		],
		login: false,
		token: '',
		avatarUrl: '',
		userName: ''
	},
	mutations: {
		login(state, provider) {
			console.log(state)
			console.log(provider)
			state.login = true;
			state.token = provider.token;
			state.userName = provider.userName;
			state.avatarUrl = provider.avatarUrl;
		},
		logout(state) {
			state.login = false;
			state.token = '';
			state.userName = '';
			state.avatarUrl = '';
		}
	}
})

export default store
