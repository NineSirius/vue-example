<template>
  <swiper
    ref="{swiperRef}"
    :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="30"
    :pagination="{
      type: 'fraction'
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in slides" :key="item.id">
      {{ item }}
    </swiper-slide>
  </swiper>

  <p class="append-buttons"></p>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slides: Array
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  }
}
</script>
