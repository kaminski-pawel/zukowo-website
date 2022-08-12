<template>
  <main>
    <MCarousel />
    <MFeaturette img-align="right" lead="Lorem ipsum solo cedit">
      First featurette heading.
      <span class="text-muted">It'll blow your mind.</span>
    </MFeaturette>
    <MFeaturette img-align="left" lead="Lorem ipsum solo cedit">
      First featurette heading.
      <span class="text-muted">It'll blow your mind.</span>
    </MFeaturette>
    <MFeaturette img-align="right" lead="Lorem ipsum solo cedit">
      First featurette heading.
      <span class="text-muted">It'll blow your mind.</span>
    </MFeaturette>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
