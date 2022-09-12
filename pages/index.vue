<template>
  <main>
    <MCarousel :slides="imagesCarousel" />

    <MLead
      header="Wynajmij mały dom na wsi otoczony przyrodą."
      lead="Dom położony jest nad trzema stawami, niedaleko jeziora, w pięknych okolicznościach przyrody."
      body=""
    ></MLead>

    <MFeaturette
      img-align="right"
      :images="imagesHome"
      :img-src="require(`@/static/img/home-01.avif`)"
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-green">Dom</span>
        składa się z:
      </template>
      <template #body>
        <ul>
          <li>dużego, przestronnego pokoju z antresolą z 4 łóżkami</li>
          <li>kuchni</li>
          <li>przedsionka</li>
          <li>łazienki i ubikacji</li>
          <li>ogródka za domem</li>
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
        <span class="text-green">Na posesji</span>
        na której położony jest dom, znajdują się także:
      </template>
      <template #body>
        <ul>
          <li>trzy stawy</li>
          <li>miejsce na ognisko</li>
          <li>bujna roślinność</li>
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
        <span class="text-green">W niedalekiej odległości od domu</span>
        znajdują się:
      </template>
      <template #body>
        <ul>
          <li>
            Jezioro Łętowskie - wspaniałe miejsce do pływania, łowienia ryb, na
            biwak lub piknik (1,5 km)
          </li>
          <li>
            lasy, łąki i pola, idealne na długie spacery, piesze i rowerowe
            wędrówki
          </li>
          <li>unikalny Rezerwat Przyrody Janiewickie Bagno (4 km)</li>
          <li>Pałac Bismarcka w Warcinie (7 km)</li>
          <li>Zamek Rycerski Podewils w Krągu (12 km)</li>
        </ul>
      </template>
    </MFeaturette>

    <MLead
      header="Odwiedź nas - wieś Żukowo"
      lead="Żukowo to malownicza wieś w Polsce północnej, położona 1,5 km od Jeziora Łętowskiego i 30 km od Morza Bałtyckiego i plaży w Darłowie i Jarosławcu. W 2018 roku Żukowo zostało wybrane najpiękniejszą wsią województwa zachodniopomorskiego."
    ></MLead>

    <MAddress
      :headers="['Żukowo 39', '76-124 Sławno', 'Zachodniopomorskie, Polska']"
    ></MAddress>

    <GoogleMap></GoogleMap>

    <MCallMe
      :headers="['Zadzwoń i dowiedz się, ', 'czy jest wolne miejsce']"
      :paragraphs="['+48 608 417 513 lub +48 608 417 512']"
    ></MCallMe>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      imagesCarousel: [
        {image: require('@/static/img/hero-01.avif')},
        {image: require('@/static/img/hero-02.avif')},
      ],
      imagesHome: [
        {
          thumb: require('@/static/img/home-02.avif'),
          src: require('@/static/img/home-02.avif'),
          caption: 'Duży pokój', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/home-03.avif'),
          src: require('@/static/img/home-03.avif'),
          caption: 'Antresola', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/home-04.avif'),
          src: require('@/static/img/home-04.avif'),
          caption: 'Kuchnia', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/home-05.avif'),
          src: require('@/static/img/home-05.avif'),
          caption: 'Przedsionek', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/home-06.avif'),
          src: require('@/static/img/home-06.avif'),
          caption: 'Okno z widokiem na ogródek', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/home-07.avif'),
          src: require('@/static/img/home-07.avif'),
          caption: 'Dom od strony ogrodu', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/home-08.avif'),
          src: require('@/static/img/home-08.avif'),
          //   srcset: '...', // Optional for displaying responsive images
        },        
      ],
      imagesLand: [
        {
          thumb: require('@/static/img/land-01.avif'),
          src: require('@/static/img/land-01.avif'),
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-02.avif'),
          src: require('@/static/img/land-02.avif'),
          caption: 'Staw', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-03.avif'),
          src: require('@/static/img/land-03.avif'),
          caption: 'Miejsce na ognisko', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-04.avif'),
          src: require('@/static/img/land-04.avif'),
          caption: 'Staw', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-05.avif'),
          src: require('@/static/img/land-05.avif'),
          caption: 'Miejsce na ognisko', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-06.avif'),
          src: require('@/static/img/land-06.avif'),
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-07.avif'),
          src: require('@/static/img/land-07.avif'),
          //   srcset: '...', // Optional for displaying responsive images
        },
          {
          thumb: require('@/static/img/land-08.avif'),
          src: require('@/static/img/land-08.avif'),
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/land-09.avif'),
          src: require('@/static/img/land-09.avif'),
          //   srcset: '...', // Optional for displaying responsive images
        },
      ],
      imagesNear: [
        {
          thumb: require('@/static/img/near-01.avif'),
          src: require('@/static/img/near-01.avif'),
          caption: 'Wieś Żukowo', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
{
          thumb: require('@/static/img/near-02.avif'),
          src: require('@/static/img/near-02.avif'),
          caption: 'Zabytkowy kościół w Żukowie', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-03.avif'),
          src: require('@/static/img/near-03.avif'),
          caption: 'Zamek w Krągu', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-04.avif'),
          src: require('@/static/img/near-04.avif'),
          caption: 'Zamek w Krągu', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-05.avif'),
          src: require('@/static/img/near-05.avif'),
          caption: 'Jezioro Łętowskie', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-06.avif'),
          src: require('@/static/img/near-06.avif'),
          caption: 'Jezioro Łętowskie', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-07.avif'),
          src: require('@/static/img/near-07.avif'),
          caption: 'Okoliczne pola', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-08.avif'),
          src: require('@/static/img/near-08.avif'),
          caption: 'Okoliczne pola', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb: require('@/static/img/near-09.avif'),
          src: require('@/static/img/near-09.avif'),
          caption: 'Okoliczne lasy', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
      ],
    }
  },
})
</script>

<style>
@import "@/static/css/style.css";
</style>