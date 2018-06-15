<template>
	<div class="search-component">
		<el-input placeholder="搜索你喜欢的音乐" v-model.trim="searchdata" clearable prefix-icon="el-icon-search" size="mini"></el-input>
		<router-link tag="span" :to="{name: changePath, params:{searchcontent: searchdata}}" class="search-btn">搜&nbsp;&nbsp;索</router-link>
	</div>
</template>
<script>

export default {
	name: "SearchComponent",
	data() {
		return {
			searchdata: ""
		}
	},
    computed: {
	    changePath() {
	        return this.searchdata ? 'SearchView' : 'Index';
	    }
    }
}
</script>
<style>
.el-input__inner, .el-input__inner:focus {
    border-color: #dcdfe6;
}
</style>
<style scoped>

.search-component {
	box-sizing: border-box;
	padding: 8px 10px;
	background-color: #fff;
}

.el-input {
	width: 85%;
}

.search-btn {
    float: right;
	width: 15%;
	height: 28px;
    color: #333;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    border-radius: 3px;
    background-color: #e5e5e5;
    cursor: pointer;
}

</style>