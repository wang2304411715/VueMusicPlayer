<template>
	<div class="singers-component">
		<div class="component-title">
			<h2>热门歌手</h2>
		</div>
  		<div class="component-wrapper">
			<SingersListComponent v-for="(singerId, index) in singerListData" :key="index" :singerId="singerId"></SingersListComponent>
  		</div>
	</div>
</template>
<script>

import SingersListComponent from './SingersListComponent'

export default {
	name: "SingersComponent",
	data() {
		return {
			singerListData:["2517","132632388","1117","1094","1067","821050"]
		}
	},
	components: {
		SingersListComponent
	}
}
</script>
<style scoped>

.singers-component {
    margin-top: 10px;
    padding: 10px 17px;
	background-color: #fff;

	height: 200px;
}

.component-title{
	margin: 14px 0 18px 0;
	font-size: 20px;
}

.component-wrapper {
 	margin: 0 -5px;
  	overflow: hidden;
}

</style>