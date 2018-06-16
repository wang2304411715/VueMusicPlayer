<template>
	<div class="rangking-list-component" v-loading="loading">
		<ul class="rangking-list">
			<router-link tag="li" v-for="(songItem, index) in songList" :key="index" class="song-show" :to="{name:'MusicPlay', params:{songid:songItem.song_id}}">
				<div class="song-pic fl">
					<img :src="songItem.pic_big" :alt="songItem.title">
				</div>
            	<div class="song-infor fl">
            		<div class="song-title">{{ songItem.title }}</div>
            		<div class="song-author">{{ songItem.author }}</div>
            	</div>
			</router-link>
		</ul>
		<router-link tag="div" :to="{name:'RankingList',params:{musictype:musicType}}" class="more-songs">
			查看该榜单&nbsp;&gt;
		</router-link>
	</div>
</template>
<script>

export default {
	name: "RankingListComponent",
	data() {
		return {
			loading: true,
			songList: ""
		}
	},
	props: {
		musicType: {
			type: String,
			default: "2"
		}
	},
	created(){
	    const musicListURL = this.HOST + "/v1/restserver/ting";
	    this.$axios.get(musicListURL, {
	    	params:{
		    	method: "baidu.ting.billboard.billList",
		    	type: this.musicType,
		    	size: 5,
		    	offset: 0
	    	}
	    })
	    .then(res => {
	      this.songList = res.data.song_list;
	      this.loading = false;
	    })
	    .catch(error =>{
	      console.log(error);
	    })

	 //    var $vm = this;
		// const musicListURL = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&size=5&offset=0&type=" + $vm.musicType;
		// var callback = $vm.$Jsonp(musicListURL);
		// window[callback] = function(data) {
		// 	$vm.songList = data.song_list;
  //     		$vm.loading = false;
		// }
  	}
}
</script>
<style scoped>

.rangking-list-component {
	margin-top: 10px;
	padding: 0 17px 10px;
	max-width: 100%;
	background-color: #fff;
}

.rangking-list {
	min-height: 330px;
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

.more-songs {
  	margin-top: 9px;
  	height: 32px;
  	font-size: 12px;
  	line-height: 32px;
  	text-align: center;
	color: #999;
}

</style>