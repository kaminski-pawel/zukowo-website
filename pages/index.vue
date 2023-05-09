<template>
  <main>
    <MCarousel :slides="imagesCarousel" />

    <MLead
      header="Mieten Sie ein kleines Ferienhaus auf dem Land inmitten der Natur."
      lead="Das Haus liegt an drei Teichen, in der Nähe des Sees, in wunderschönen Umgebungen."
      body=""
    ></MLead>

    <MFeaturette
      img-align="right"
      :images="imagesHome"
      :img-src="require(`@/static/img/home-01.avif`)"
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-green">Das Haus </span>
        besteht aus:
      </template>
      <template #body>
        <ul>
          <li>Großes, geräumiges Zimmer mit Zwischengeschoss mit 4 Betten</li>
          <li>Küche</li>
          <li>Vorraum</li>
          <li>Badezimmer/Toilette</li>
          <li>Garten hinter dem Haus</li>
        </ul>
      </template>
    </MFeaturette>
    <MFeaturette
      img-align="left"
      :images="imagesLand"
      :img-src="require(`@/static/img/land-02.avif`)"
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-green">Auf dem Grundstück, </span>
        auf dem sich das Haus befindet, gibt es auch:
      </template>
      <template #body>
        <ul>
          <li>drei Teiche</li>
          <li>Platz für ein Lagerfeuer</li>
          <li>üppige Vegetation</li>
        </ul>
      </template>
    </MFeaturette>
    <MFeaturette
      img-align="right"
      :images="imagesNear"
      :img-src="require(`@/static/img/near-05.avif`)"
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-green">Nicht weit vom Haus </span>
        entfernt befinden sich:
      </template>
      <template #body>
        <ul>
          <li>
            Łętowskie See (Lantower See) - ein großartiger Ort zum Schwimmen,
            Angeln, Campen oder Picknicken (1,5 km)
          </li>
          <li>
            Wälder, Wiesen und Felder, ideal für lange Spaziergänge, Wanderungen
            und Radtouren
          </li>
          <li>einzigartiges Naturschutzgebiet Janiewice-Sumpf (4 km)</li>
          <li>Bismarck Landgut in Warcino (Schloss Varzin) (7 km)</li>
          <li>Ritterburg Podewils in Krąg (12 km)</li>
        </ul>
      </template>
    </MFeaturette>

    <MLead
      header="Besuchen Sie uns - Dorf Żukowo"
      lead="Żukowo ist ein malerisches Dorf im Norden Polens, 1,5 km vom Lantower See (Łętowskie See) und 30 km von der Ostsee und dem Strand in Darłowo (Rügenwalde) und Jarosławiec (Jershöft) entfernt. 2018 wurde Żukowo zum schönsten Dorf der Woiwodschaft Westpommern gewählt."
    ></MLead>

    <MAddress
      :headers="[homeAddress, '76-124 Sławno', 'Westpommern, Polen']"
    ></MAddress>

    <GoogleMap></GoogleMap>

    <MCallMe
      :headers="[
        'Rufen Sie uns an und finden Sie heraus, ',
        'ob es einen freien Platz gibt.',
      ]"
      :paragraphs="[homePhone]"
    ></MCallMe>

    <MAlert :header="`Wir sprechen Deutsch`"></MAlert>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      homeAddress: process.env.NUXT_ENV_HOME_ADDRESS,
      homePhone: process.env.NUXT_ENV_HOME_PHONE,
      imagesCarousel: [
        { image: require('@/static/img/hero-01.avif') },
        { image: require('@/static/img/hero-02.avif') },
      ],
      imagesHome: [
        {
          thumb: require('@/static/img/home-02.avif'),
          src: require('@/static/img/home-02.avif'),
          caption: 'Großes Zimmer',
        },
        {
          thumb: require('@/static/img/home-03.avif'),
          src: require('@/static/img/home-03.avif'),
          caption: 'Zwischengeschoss',
        },
        {
          thumb: require('@/static/img/home-04.avif'),
          src: require('@/static/img/home-04.avif'),
          caption: 'Küche', // Optional
        },
        {
          thumb: require('@/static/img/home-05.avif'),
          src: require('@/static/img/home-05.avif'),
          caption: 'Vorraum',
        },
        {
          thumb: require('@/static/img/home-06.avif'),
          src: require('@/static/img/home-06.avif'),
          caption: 'Fenster mit Blick auf den Garten',
        },
        {
          thumb: require('@/static/img/home-07.avif'),
          src: require('@/static/img/home-07.avif'),
          caption: 'Haus mit Blick auf den Garten',
        },
        {
          thumb: require('@/static/img/home-08.avif'),
          src: require('@/static/img/home-08.avif'),
          caption: 'Grundstück',
        },
      ],
      imagesLand: [
        {
          thumb: require('@/static/img/land-01.avif'),
          src: require('@/static/img/land-01.avif'),
          caption: 'Grundstück',
        },
        {
          thumb: require('@/static/img/land-02.avif'),
          src: require('@/static/img/land-02.avif'),
          caption: 'Teich',
        },
        {
          thumb: require('@/static/img/land-03.avif'),
          src: require('@/static/img/land-03.avif'),
          caption: 'Platz für ein Lagerfeuer',
        },
        {
          thumb: require('@/static/img/land-04.avif'),
          src: require('@/static/img/land-04.avif'),
          caption: 'Teich',
        },
        {
          thumb: require('@/static/img/land-05.avif'),
          src: require('@/static/img/land-05.avif'),
          caption: 'Platz für ein Lagerfeuer',
        },
        {
          thumb: require('@/static/img/land-06.avif'),
          src: require('@/static/img/land-06.avif'),
          caption: 'Grundstück',
        },
        {
          thumb: require('@/static/img/land-07.avif'),
          src: require('@/static/img/land-07.avif'),
          caption: 'Grundstück',
        },
        {
          thumb: require('@/static/img/land-08.avif'),
          src: require('@/static/img/land-08.avif'),
          caption: 'Grundstück',
        },
        {
          thumb: require('@/static/img/land-09.avif'),
          src: require('@/static/img/land-09.avif'),
          caption: 'Grundstück',
        },
      ],
      imagesNear: [
        {
          thumb: require('@/static/img/near-01.avif'),
          src: require('@/static/img/near-01.avif'),
          caption: 'Dorf Żukowo',
        },
        {
          thumb: require('@/static/img/near-02.avif'),
          src: require('@/static/img/near-02.avif'),
          caption: 'Historische Kirche in Żukowo',
        },
        {
          thumb: require('@/static/img/near-03.avif'),
          src: require('@/static/img/near-03.avif'),
          caption: 'Ritterburg Podewils in Krąg',
        },
        {
          thumb: require('@/static/img/near-04.avif'),
          src: require('@/static/img/near-04.avif'),
          caption: 'Ritterburg Podewils in Krąg',
        },
        {
          thumb: require('@/static/img/near-05.avif'),
          src: require('@/static/img/near-05.avif'),
          caption: 'Łętowskie See',
        },
        {
          thumb: require('@/static/img/near-06.avif'),
          src: require('@/static/img/near-06.avif'),
          caption: 'Łętowskie See',
        },
        {
          thumb: require('@/static/img/near-07.avif'),
          src: require('@/static/img/near-07.avif'),
          caption: 'Umliegende Felder',
        },
        {
          thumb: require('@/static/img/near-08.avif'),
          src: require('@/static/img/near-08.avif'),
          caption: 'Umliegende Felder',
        },
        {
          thumb: require('@/static/img/near-09.avif'),
          src: require('@/static/img/near-09.avif'),
          caption: 'Umliegende Wälder',
        },
      ],
    }
  },
})
</script>

<style>
@import '@/static/css/style.css';
</style>
