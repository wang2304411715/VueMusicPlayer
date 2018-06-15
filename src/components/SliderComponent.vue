<template>
	<div>
		<swiper :options="swiperOption">
			<swiper-slide>
				<a href="javascript:;"><img src="../assets/banner/b1.jpg" alt=""></a>
			</swiper-slide>
			<swiper-slide>
				<a href="javascript:;"><img src="../assets/banner/b2.jpg" alt=""></a>
			</swiper-slide>
			<swiper-slide>
				<a href="javascript:;"><img src="../assets/banner/b3.jpg" alt=""></a>
			</swiper-slide>
			<swiper-slide>
				<a href="javascript:;"><img src="../assets/banner/b4.jpg" alt=""></a>
			</swiper-slide>
			<swiper-slide>
				<a href="javascript:;"><img src="../assets/banner/b5.jpg" alt=""></a>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>

export default {
	name: "SliderComponent",
	data() {
		return {
			swiperOption: {
		        pagination: {
		          el: '.swiper-pagination',
		        },
		        autoplay: true,
        		loop: true
      		}
		}
	}
}
</script>
<style>
</style>