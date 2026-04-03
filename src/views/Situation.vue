<template>
  <main id="situation" class="page page-situation">
    <section class="main-section">
      <div class="slider-container">
        <img class="mySlides" :src="baseUrl + 'imgs/vis/6.webp'" alt="Residence de Muses" />
        <img class="mySlides" :src="baseUrl + 'imgs/vis/3.webp'" alt="Residence de Muses" />
        <img class="mySlides" :src="baseUrl + 'imgs/vis/11.webp'" alt="Residence de Muses" />
      </div>
      <div class="txt">
        <div>
          <h1 class="page-title">{{ t('situation.title') }}</h1>
        </div>
      </div>
      <div class="slider-controlers">
        <div class="slider-arrows">
          <span @click="changeImg(-1)" class="nav-btn">&#10094;</span>
          <span @click="changeImg(1)" class="nav-btn">&#10095;</span>
        </div>
      </div>
    </section>

    <section class="two-columns width">
      <div class="txt">
        <h2 class="animate" data-animate="animContent 0.3s .6s forwards">{{ t('situation.heading') }}</h2>
        <p class="animate" data-animate="animContent 0.3s .8s forwards">{{ t('situation.p1') }} {{ t('situation.p2') }}</p>
        <p class="animate" data-animate="animContent 0.3s 1s forwards">{{ t('situation.p3') }}</p>
      </div>
      <div class="img animate" data-animate="animContent 0.3s 1s forwards">
        <img class="situation-map-image" :src="baseUrl + 'imgs/maps/map-1.svg'" alt="Residence de Muses location map" />
      </div>
    </section>

    <section class="two-columns width padding-bottom">
      <div class="img animate" data-animate="animContent 0.3s .8s forwards">
        <img class="situation-map-image" :src="baseUrl + 'imgs/maps/map-2.svg'" alt="Residence de Muses satellite map" />
      </div>
      <div class="txt">
        <p class="animate" data-animate="animContent 0.3s .8s forwards">{{ t('situation.p4') }}</p>
        <p class="animate" data-animate="animContent 0.3s 1.1s forwards">{{ t('situation.p5') }}</p>
        <a :href="googleMapsLinkUrl" class="btn animate" target="_blank" rel="noopener" data-animate="animContent 0.3s 1.3s forwards">{{ t('situation.mapCta') }}</a>
      </div>
    </section>

    <section
      class="fullImg"
      :style="{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(' + baseUrl + 'imgs/Coffrane.webp)' }"
    ></section>
  </main>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useI18n } from '../composables/useI18n'
const baseUrl = inject('baseUrl', '/')
const { language, t } = useI18n()

const mapLang = computed(() => (language.value === 'fr' ? 'fr' : 'de'))
const googleMapsLinkUrl = computed(
  () => `https://www.google.com/maps/search/?api=1&query=Herzogenbuchsee%2C%20Switzerland&hl=${mapLang.value}`
)

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}
</script>
