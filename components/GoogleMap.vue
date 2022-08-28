<template>
  <div class="container">
    <div class="row justify-content-center">
      <GmapMap
        :center="{ lat: 54.287948, lng: 16.797974 }"
        :zoom="9"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker :position="{ lat: 54.287948, lng: 16.797974 }" />
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMaps',
  data() {
    return {
      marker: [],
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped></style>
