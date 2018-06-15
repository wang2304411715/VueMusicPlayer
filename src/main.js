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

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/baidu_music_api'
Vue.prototype.$loading = Loading.service

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
