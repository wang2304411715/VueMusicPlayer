// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import {
	Input,
	Icon,
	Button,
	Loading
} from 'element-ui'

Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Loading.directive)

Vue.use(VueAwesomeSwiper)

Vue.prototype.$loading = Loading.service

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/baidu_music_api'

// Vue.prototype.$Jsonp = function(url) {
// 	var callback = "wzlcallback_" + new Date().getTime();
// 	var srcURL = url + "&callback=" + callback;
// 	var body = document.getElementsByTagName('body')[0];
// 	var script = document.createElement('script');
// 	script.setAttribute('src',srcURL);
// 	body.appendChild(script);        
// 	return callback;
// }


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
