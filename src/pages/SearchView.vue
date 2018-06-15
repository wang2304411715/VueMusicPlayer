<template>
	<div class="singer-infor" v-loading.fullscreen.lock="fullscreenLoading">
		<div class="header-top">
			<router-link to="/">
				<i class="el-icon-back"></i>
			</router-link>
		</div>
		<ul>
			<router-link v-for="(songItem, index) in songsArr" 
						 :key="index" 
						 :to="{name:'MusicPlay',params:{songid:songItem.songid}}" 
						 tag="li" 
						 class="song-show">
				<div class="song-infor fl">
					<div class="song-title">{{ songItem.songname }}</div>
					<div class="song-author">{{ songItem.artistname }}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>

export default {
	name: "SearchView",
	data() {
		return {
			fullscreenLoading: true,
			songsArr: ""
		}
	},
	created() {
		const singerListURL = this.HOST + "/v1/restserver/ting";
    	this.$axios.get(singerListURL, {
    		params: {
    			method: "baidu.ting.search.catalogSug",
    			query: this.$route.params.searchcontent
    		}
    	})
    	.then(res => {
      		this.songsArr = res.data.song;
      		this.fullscreenLoading = false
    	})
    	.catch(error =>{
      		console.log(error);
    	})
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

.song-infor{
	max-width: 80%;
	/* 强制不换行 */
    white-space:nowrap;
}

.song-title {
    font-size: 16px;
    color: #333;
    /* 超出显示省略号 */
    text-overflow:ellipsis;
    overflow:hidden;
}
.song-author {
    margin-top: 2px;
	font-size: 12px;
    color: #999;
    /* 超出显示省略号 */
    text-overflow:ellipsis;
    overflow:hidden;
}
</style>