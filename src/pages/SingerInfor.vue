<template>
	<div class="singer-infor" v-loading.fullscreen.lock="fullscreenLoading">
		<div class="header-top">
			<router-link to="/">
				<i class="el-icon-back"></i>
			</router-link>
		</div>
		<ul>
			<router-link v-for="(songItem, index) in songList" 
						 :key="index" 
						 :to="{name:'MusicPlay',params:{songid:songItem.song_id}}" 
						 tag="li" 
						 class="song-show">
				<div class="song-pic fl">
					<img :src="songItem.pic_big" :alt="songItem.title">
				</div>
				<div class="song-infor fl">
					<div class="song-title">{{ songItem.title }}</div>
					<div class="song-author">{{ songItem.author }}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>

export default {
	name: "SingerInfo",
	data() {
		return {
			fullscreenLoading: true,
			songList: ""
		}
	},
	created(){
    	// const singerListURL = this.HOST + "/v1/restserver/ting";
    	// this.$axios.get(singerListURL, {
    	// 	params: {
    	// 		method: "baidu.ting.artist.getSongList",
    	// 		tinguid: this.$route.params.singerid,
    	// 		limits: 20,
    	// 		use_cluster: 1,
    	// 		order: 2
    	// 	}
    	// })
    	// .then(res => {
     //  		this.songList = res.data.songlist;
     //  		this.fullscreenLoading = false
    	// })
    	// .catch(error =>{
     //  		console.log(error);
    	// })

		var $vm = this;
		const singerListURL = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=20&use_cluster=1&order=2&tinguid=" + $vm.$route.params.singerid;
		var callback = $vm.$Jsonp(singerListURL);
		window[callback] = function(data) {
			$vm.songList = data.songlist;
      		$vm.fullscreenLoading = false;
		}
  	}
}
</script>
<style scoped>

.singer-infor {
	margin-top: 10px;
	padding: 0 17px 10px;
	max-width: 100%;
	background-color: #fff;
}

.header-top {
    padding-top: 5px;
}

.el-icon-back {
	font-size: 20px;
    color: #222;
}

.song-show {
	margin-top: 10px;
	min-height: 55px;
	border-bottom: 1px solid #eee;
	cursor: pointer;
	overflow: hidden;
}

.song-pic {
    margin-right: 8px;
	width: 45px;
    border: 1px solid #eee;
}

.song-infor{
	max-width: 80%;
}

.song-title {
    font-size: 16px;
    color: #333;
    /* 强制不换行 */
    white-space:nowrap;
    /* 超出显示省略号 */
    text-overflow:ellipsis;
    overflow:hidden;
}
.song-author {
    margin-top: 2px;
	font-size: 12px;
    color: #999;
     /* 强制不换行 */
    white-space:nowrap;
    /* 超出显示省略号 */
    text-overflow:ellipsis;
    overflow:hidden;
}
</style>