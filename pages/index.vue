<template>
  <main>
    <MCarousel />
    <MLead
      header="Wynajmij mały dom na wsi otoczony przyrodą."
      lead="Dom położony jest nad trzema stawami, niedaleko jeziora, w pięknych okolicznościach przyrody."
      body=""
    ></MLead>

    <MFeaturette
      img-align="right"
      :images="imagesHome"
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-muted">Dom</span>
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
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-muted">Na posesji</span>
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
      lead="Lorem ipsum solo cedit"
    >
      <template #header>
        <span class="text-muted">W niedalekiej odległości od domu</span>
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
      imagesHome: [
        {
          thumb: require('@/static/img/clock_500x500.avif'),
          src: require('@/static/img/clock_500x500.avif'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb:
            'https://images.dog.ceo//breeds//mountain-bernese//n02107683_3351.jpg',
          src: 'https://images.dog.ceo//breeds//mountain-bernese//n02107683_3351.jpg',
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
      ],
      imagesLand: [
        {
          thumb: 'https://images.dog.ceo//breeds//kuvasz//n02104029_4131.jpg',
          src: 'https://images.dog.ceo//breeds//kuvasz//n02104029_4131.jpg',
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb:
            'https://images.dog.ceo//breeds//mountain-bernese//n02107683_3351.jpg',
          src: 'https://images.dog.ceo//breeds//mountain-bernese//n02107683_3351.jpg',
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
      ],
      imagesNear: [
        {
          thumb: 'https://images.dog.ceo//breeds//kuvasz//n02104029_4131.jpg',
          src: 'https://images.dog.ceo//breeds//kuvasz//n02104029_4131.jpg',
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
        {
          thumb:
            'https://images.dog.ceo//breeds//mountain-bernese//n02107683_3351.jpg',
          src: 'https://images.dog.ceo//breeds//mountain-bernese//n02107683_3351.jpg',
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          //   srcset: '...', // Optional for displaying responsive images
        },
      ],
    }
  },
})
</script>
