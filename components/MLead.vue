<template>
  <section class="py-5">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>{{ header }}</h2>
          <p class="lead">
            {{ lead }}
          </p>
          <p class="mb-0">
            {{ body }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MLead',
  props: {
    header: { type: String, default: '' },
    lead: { type: String, default: '' },
    body: { type: String, default: '' },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style scoped></style>
