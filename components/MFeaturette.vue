<template>
  <div class="container">
    <hr class="featurette-divider" />
    <div class="row featurette">
      <div :class="textStyle">
        <h2 class="featurette-heading">
          <slot name="header"></slot>
        </h2>
        <p class="lead">
          <slot name="body"></slot>
          <button class="btn btn-primary my-2" @click="openGallery">
            Weitere Fotos ansehen
          </button>
        </p>
      </div>
      <div :class="imgStyle">
        <img
          class="featurette-image img-fluid mx-auto"
          data-src="holder.js/500x500/auto"
          alt="500x500"
          :src="imgSrc"
          data-holder-rendered="true"
        />
      </div>
    </div>
    <LightBox
      :ref="galleryId"
      :media="images"
      :show-caption="true"
      :show-light-box="false"
    ></LightBox>
  </div>
</template>

<script>
export default {
  name: 'MFeaturette',
  props: {
    imgAlign: {
      type: String,
      default: 'right',
    },
    imgSrc: {
      type: String,
      default:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1828d6da167%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1828d6da167%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2800006866455%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    },
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    galleryId() {
      return `gallery-${Math.floor(Math.random() * 999999)}`
    },
    textStyle() {
      return this.imgAlign === 'right' ? 'col-md-7' : 'col-md-7 order-md-2'
    },
    imgStyle() {
      return this.imgAlign === 'right' ? 'col-md-5' : 'col-md-5 order-md-1'
    },
  },
  methods: {
    openGallery() {
      this.$refs[this.galleryId].showImage(0)
    },
  },
}
</script>

<style scoped></style>
