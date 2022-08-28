<template>
  <section class="py-5">
    <div class="container my-5">
      <div
        v-for="(item, idx) in headers"
        :key="idx"
        class="row justify-content-center"
      >
        <h4>{{ item }}</h4>
      </div>
      <div
        v-for="(item, idx) in paragraphs"
        :key="idx"
        class="row justify-content-center"
      >
        <p>{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MCallMe',
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    paragraphs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
