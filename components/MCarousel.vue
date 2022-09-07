<template>
  <div class="carousel slide">
    <vueper-slides fade :touchable="false">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'MCarousel',
  components: { VueperSlides, VueperSlide },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
</style>
