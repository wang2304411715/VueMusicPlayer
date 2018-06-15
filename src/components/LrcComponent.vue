<template>
	<div class="lrcContainer">
	    <div class="lrc" ref="lrc">
	      	<div class="lrc-p" 
	      	   v-for="(item,key,index) in lrcData"
	      	   :class="{'active': isActive(key, index)}">

	      		{{ item }}{{ srcollLrc(key,index) }}

	      	</div>
	    </div>
  	</div>
</template>
<script>

export default {
	name: "LrcComponent",
	data() {
		return {
			lrcData: {},
			keyArr: []
		}
	},
	props: {
	    currentTime: {
	    	type: Number,
	      	default: null
	    },
	    durationTime: {
	      	type: Number,
	      	default: null
	    },
	    songid: {
	      	type: String,
	      	default: ""
	    }
  	},
	created() {
		const lrcURL = this.HOST + "/v1/restserver/ting";
		this.$axios.get(lrcURL, {
			params: {
				method: "baidu.ting.song.lry",
				songid: this.songid
			}
		})
		.then(res => {
			var lyrics = res.data.lrcContent ? res.data.lrcContent.split("\n") : "";
		  	var lrcObj = {};
		  	for(var i = 0; i < lyrics.length; i++) {
		    	var lyric = decodeURIComponent(lyrics[i]);
				var timeReg = /\[\d*:\d*(\.\d*)*\]/g;
		    	var timeRegExpArr = lyric.match(timeReg);
		    	if(!timeRegExpArr)continue;
		    	var clause = lyric.replace(timeReg,'');
		    	// timeRegExpArr: ["[01:00.87]"]  clause: 成王败寇尽东流
		        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
		            var t = timeRegExpArr[k];
		            var min = Number(String(t.match(/\[\d*/)).slice(1)),
		                sec = Number(String(t.match(/\:\d*/)).slice(1));
		            var time = min * 60 + sec;
		            lrcObj[time] = clause;
		            /*lrcObj: { time: clause }*/
		        }
		    }
		    this.lrcData = lrcObj;
		    var allKey, keyArr = [];
		    for(allKey in this.lrcData) {
		    	keyArr.push(allKey)
			}
				this.keyArr = keyArr;
		})
		.catch(error => {
			console.log(error);
		})
	},
	methods: {
		isActive(key, index) {
			var that = this;
			return key < that.currentTime && key > that.currentTime - (that.keyArr[index + 1] - that.keyArr[index])
		},
		srcollLrc(key, index) {
		  	const lrcDiv = this.$refs.lrc;
		  	var isActive = this.isActive(key, index);
		  	if(isActive)	{
		    	lrcDiv.style.top = -((index-2)*30)+"px"
		  	}
		}

	}
}
</script>
<style scoped>

.lrcContainer{
	position: relative;
	width: 100%;
	height: 150px;
	overflow: hidden;
}

.lrc{
  	position: absolute;
  	top: 0;
	width: 100%;
}

.lrc-p{
  	height: 30px;
	line-height: 30px;
}

</style>