import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index'
import HotMusic from '../pages/MusicList/HotMusic'
import NewMusic from '../pages/MusicList/NewMusic'
import KingMusic from '../pages/MusicList/KingMusic'

import SingerInfor from '../pages/SingerInfor'
import MusicPlay from '../pages/MusicPlay'
import RankingList from '../pages/RankingList'
import SearchView from '../pages/SearchView'

Vue.use(Router)

export default new Router({
	linkActiveClass: "active",
	routes: [{
		path: '/',
		name: 'Index',
		component: Index,
		redirect:"/hotmusic",
		children:[{
			  path: '/hotmusic',
			  name: 'HotMusic',
			  component: HotMusic
			},{
			  path: '/newmusic',
			  name: 'NewMusic',
			  component: NewMusic
			},{
			  path: '/kingmusic',
			  name: 'KingMusic',
			  component: KingMusic
			}]
	},{
		path:"/singerinfor/:singerid",
		name:"SingerInfor",
		component:SingerInfor
    },{
		path:"/musicplay/:songid",
		name:"MusicPlay",
		component:MusicPlay
    },{
		path:"/rangkinglist/:musictype",
		name:"RankingList",
		component:RankingList
    },{
		path:"/searchview/:searchcontent",
		name:"SearchView",
		component:SearchView
    }]
})
