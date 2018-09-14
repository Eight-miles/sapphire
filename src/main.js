import Vue from 'vue';

//按需导入mint-ui
import { Header,Tabbar, TabItem  } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//导入mui的css 样式  
import './lib/dist/css/mui.css'


//导入app模块
import app from './App.vue'


var vm = new Vue({
	el:'#app',
	data:{},
	render:c => c(app)
})