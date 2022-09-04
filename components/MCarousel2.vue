<template>
  <div>
    <vueper-slides
      ref="vueperslides1"
      :touchable="false"
      fade
      :autoplay="false"
      :bullets="false"
      fixed-height="400px"
      @slide="
        $refs.vueperslides2.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      </vueper-slide>
    </vueper-slides>

    <vueper-slides
      ref="vueperslides2"
      class="no-shadow thumbnails"
      :visible-slides="slides.length"
      fixed-height="75px"
      :bullets="false"
      :touchable="false"
      :gap="2.5"
      :arrows="false"
      @slide="
        $refs.vueperslides1.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        @click.native="$refs.vueperslides2.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'MCarousel2',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        { image: require('@/static/img/home-1_500x500.avif') },
        { image: require('@/static/img/home-2_500x500.avif') },
        { image: require('@/static/img/clock_500x500.avif') },
      ],
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
</style>
