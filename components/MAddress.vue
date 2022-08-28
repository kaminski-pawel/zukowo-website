<template>
  <div class="container">
    <div
      v-for="(h4, idx) in headers"
      :key="idx"
      class="row justify-content-center"
    >
      <h4>{{ h4 }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MAddress',
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style scoped></style>
