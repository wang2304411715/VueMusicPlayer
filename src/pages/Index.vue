<template>
	<div>
		<SearchComponent />
		<SliderComponent />
		<RankingNavComponent />
		<router-view />
		<SingersComponent />
	</div>
</template>
<script>

import SearchComponent from '../components/SearchComponent'
import SliderComponent from '../components/SliderComponent'
import RankingNavComponent from '../components/RankingNavComponent'
import SingersComponent from '../components/SingersComponent'

export default {
	name: "Index",
	data() {
		return {

		}
	},
	components: {
		SearchComponent,
		SliderComponent,
		RankingNavComponent,
		SingersComponent
	}
}
</script>
<style>
	
</style>