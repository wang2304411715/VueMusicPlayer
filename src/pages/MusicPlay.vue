<template>
	<div class="music-play">
		<div class="music-play-header">
			<div class="go-back fl" @click="goBack">
				<i class="el-icon-back"></i>
			</div>
			<div class="song-info">
				<p class="song-title">{{ playData.songinfo.title }}</p>
				<p class="song-author">{{ playData.songinfo.author }}</p>
			</div>
		</div>
		<div class="song-content">
			<img :src="playData.songinfo.pic_big">
			<div class="song-content-lrc">
      			<LrcComponent :currentTime="currentTime" 
      				 		  :durationTime="durationTime" 
      				 		  :songid="$route.params.songid"/>
			</div>
		</div>
		<div class="song-controls">
      		<audio ref="player" :src="playData.bitrate.file_link" controls></audio>
		</div>
	</div>
</template>
<script>
import LrcComponent from '../components/LrcComponent'
export default {
	name: "MusicPlay",
	data() {
		return {
			playData: {
				songinfo: {
					title: "",
					author: ""
				},
				bitrate:{
          			file_link:""
        		}
			},
			currentTime: null,
      		durationTime: null
		}
	},
	components: {
		LrcComponent
	},
	methods: {
		goBack() {
			window.history.back();
		},
		addEventListeners(){
      		const self = this;
      		self.$refs.player.addEventListener('timeupdate', self._currentTime);
    		self.$refs.player.addEventListener('canplay', self._durationTime);
    	},
    	removeEventListeners: function () {
       		const self = this;
       		self.$refs.player.removeEventListener('timeupdate', self._currentTime);
       		self.$refs.player.removeEventListener('canplay', self._durationTime);
     	},
     	_currentTime(){
       		var self = this;
       		self.currentTime = self.$refs.player.currentTime;
     	},
     	_durationTime(){
       		var self = this;
       		self.durationTime = self.$refs.player.duration;
     	}
	},
  	created(){
    	// const playURL = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.play&songid="+this.$route.params.songid;
    	// this.$axios.get(playURL)
    	// .then(res => {
     //  		this.playData = res.data;
    	// })
    	// .catch(error => {
     //  		console.log(error);
    	// })

		var $vm = this;
		const playURL = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=" + $vm.$route.params.songid;
		var callback = $vm.$Jsonp(playURL);
		window[callback] = function(data) {
			$vm.playData = data;
		}
  	},
  	mounted(){
    	this.addEventListeners();
  	},
  	beforeDestroyed(){
    	this.removeEventListeners();
  	}
}
</script>
<style>

.music-play-header,
.song-content {
	padding:15px;
	text-align: center;
}

.go-back {
	padding-top: 5px;
}

.el-icon-back {
	font-size: 20px;
    color: #222;
}

.song-info {
	margin: 0 auto;
	max-width: 70%;
	/* 强制不换行 */
    white-space:nowrap;
}

.song-title {
    font-size: 20px;
    color: #333;
    /* 超出显示省略号 */
    text-overflow:ellipsis;
    overflow:hidden;
}
.song-author {
    margin-top: 2px;
	font-size: 16px;
    color: #999;
    /* 超出显示省略号 */
    text-overflow:ellipsis;
    overflow:hidden;
}

.song-content img{
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-controls{
	max-width: 100%;
	text-align: center;
}

.song-controls audio{
	width: 80%;
}

</style>