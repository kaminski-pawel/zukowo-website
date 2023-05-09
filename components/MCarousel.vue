<template>
  <div class="carousel slide">
    <vueper-slides fade :touchable="false">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
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
      required: true,
    },
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
.ribbon-parent {
  overflow: hidden; /* required */
  /* width: 50%; for demo only */
  /* height: 250px some non-zero number; */
  /* margin: 25px auto; for demo only */
  /* border: 1px solid grey; for demo only */
  /* position: relative; required  for demo */
}
</style>
