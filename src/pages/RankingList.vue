<template>
	<div class="ranking-list" v-loading.fullscreen.lock="fullscreenLoading">
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
	name: "RankingList",
	data() {
		return {
			fullscreenLoading: true,
			songList: ""
		}
	},
	created(){
    	const rankingListURL = this.HOST + "/v1/restserver/ting";
    	this.$axios.get(rankingListURL, {
    		params: {
    			method: "baidu.ting.billboard.billList",
    			type: this.$route.params.musictype,
    			size: 20,
    			offset: 0
    		}
    	})
    	.then(res => {
      		this.songList = res.data.song_list;
      		this.fullscreenLoading = false
    	})
    	.catch(error =>{
      		console.log(error);
    	})

		// var $vm = this;
		// const rankingListURL = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&size=20&offset=0&type=" + $vm.$route.params.musictype;
		// var callback = $vm.$Jsonp(rankingListURL);
		// window[callback] = function(data) {
		// 	$vm.songList = data.song_list;
  //     		$vm.fullscreenLoading = false;
		// }
  	}
}
</script>
<style scoped>

.ranking-list {
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

.song-infor {
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