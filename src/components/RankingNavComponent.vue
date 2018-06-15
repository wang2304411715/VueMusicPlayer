<template>
	<div class="nav-component">
		<div class="nav-bar fl">
			<router-link to="/hotmusic">热歌榜</router-link>
			<span class="vertical-line fr"></span>
		</div>
		<div class="nav-bar fl">
			<router-link to="/newmusic">新歌榜</router-link>
			<span class="vertical-line fr"></span>
		</div>
		<div class="nav-bar fl">
			<router-link to="/kingmusic">King榜</router-link>
		</div>
	</div>
</template>
<script>

export default {
	name: "RankingNavComponent",
	data() {
		return {

		}
	}
}
</script>
<style scoped>

.nav-component {
	max-width: 100%;
	font-size: 16px;
    text-align: center;
    color: #999;
    overflow: hidden;
}

.nav-bar {
	padding: 18px 0 12px;
	width: 33.333%
}

.vertical-line {
	width: 1px;
	height: 21px;
	background-color: #eee;
}

</style>
