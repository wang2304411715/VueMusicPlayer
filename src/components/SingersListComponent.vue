<template>
	<router-link tag="div"  
			     :to="{name:'SingerInfor', params:{singerid:singerId}}"
			     class="singer-card">
		<div class="singer-card-portrait">
				<img :src="singerInfor.avatar_big" :alt="singerInfor.name">
		</div>
		<div class="singer-card-name">{{ singerInfor.name }}</div>
	</router-link>
</template>
<script>
	
export default {
	name: "SingersListComponent",
	data() {
		return {
			singerInfor: ""
		}
	},
	props: {
		singerId: {
			type: String,
			default: ""
		}
	},
	created(){
	    // const singerInforURL = this.HOST + "/v1/restserver/ting";
	    // this.$axios.get(singerInforURL, {
	    // 	params: {
	    // 		method: "baidu.ting.artist.getInfo",
	    // 		tinguid: this.singerId
	    // 	}
	    // })
	    // .then(res => {
	    //   this.singerInfor = res.data;
	    // })
	    // .catch(error => {
	    //   console.log(error);
	    // })

		var $vm = this;
		const singerInforURL = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=" + $vm.singerId;
		var callback = $vm.$Jsonp(singerInforURL);
		window[callback] = function(data) {
			$vm.singerInfor = data;
      		$vm.fullscreenLoading = false;
		}
  	}
}

</script>
<style>

.singer-card {
    box-sizing: border-box;
    float: left;
    padding: 0 5px 20px;
	width: 33.333%;
}

.singer-card-portrait {
    border: 1px solid #eee;
}

img{
  	max-width: 100%;
}

.singer-card-name {
    margin-top: 4px;
    margin-bottom: 2px;
	font-size: 12px;
    line-height: 14px;
}

</style>