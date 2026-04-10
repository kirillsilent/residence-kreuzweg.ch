<template>
  <main id="situation" class="page page-situation">
    <section class="main-section">
      <div class="slider-container">
        <img v-for="img in heroSlides" :key="img" class="mySlides" :src="img" alt="Residence Kreuzweg" />
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
        <h2 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">{{ t('situation.heading') }}</h2>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .14s forwards">{{ t('situation.p1') }} {{ t('situation.p2') }}</p>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .24s forwards">{{ t('situation.p3') }}</p>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .32s forwards">{{ t('situation.p4') }}</p>
      </div>
      <div class="img animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .18s forwards" @click="openMapGallery(0)">
        <img class="situation-map-image" :src="baseUrl + 'imgs/maps/map-1.svg'" alt="Residence Kreuzweg location map" />
      </div>
    </section>

    <section class="two-columns width padding-bottom">
      <div class="img animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards" @click="openMapGallery(1)">
        <img class="situation-map-image" :src="baseUrl + 'imgs/maps/map-2.svg'" alt="Residence Kreuzweg satellite map" />
      </div>
      <div class="txt">
        <div class="situation-infrastructure animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .16s forwards">
          <h3>{{ t('situation.infrastructureTitle') }}</h3>
          <ul>
            <li v-for="(item, index) in t('situation.infrastructureItems')" :key="index">{{ item }}</li>
          </ul>
        </div>
        <a :href="googleMapsLinkUrl" class="btn animate" target="_blank" rel="noopener" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .26s forwards">{{ t('situation.mapCta') }}</a>
      </div>
    </section>

    <section class="situation-gallery width">
      <div class="situation-gallery-shell">
        <figure
          class="situation-gallery-item situation-gallery-item--main animate"
          data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards"
          @click="openSituationGallery(0)"
        >
          <img :src="situationGalleryImages[0]" alt="Vue aerienne du paysage autour de Gals" />
        </figure>
        <div class="situation-gallery-row">
          <figure
            class="situation-gallery-item animate"
            data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .14s forwards"
            @click="openSituationGallery(1)"
          >
            <img :src="situationGalleryImages[1]" alt="Vue aerienne du village de Gals et du lac" />
          </figure>
          <figure
            class="situation-gallery-item animate"
            data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .23s forwards"
            @click="openSituationGallery(2)"
          >
            <img :src="situationGalleryImages[2]" alt="Vue aerienne de Gals et de son environnement naturel" />
          </figure>
        </div>
      </div>
    </section>

    <!-- <section
      class="fullImg"
      :style="{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(' + baseUrl + 'imgs/Coffrane.webp)' }"
    ></section> -->
  </main>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useI18n } from '../composables/useI18n'
import { resolveHeroExtras } from '../composables/useHeroImages'
const baseUrl = inject('baseUrl', '/')
const { language, t } = useI18n()

const heroSlides = computed(() => [
  baseUrl + 'imgs/vis/6.webp',
  ...resolveHeroExtras('/situation', baseUrl),
])

const mapLang = computed(() => (language.value === 'fr' ? 'fr' : 'de'))
const googleMapsLinkUrl = computed(
  () => `https://www.google.com/maps/search/?api=1&query=Kreuzweg%202%2C%20Gals%2C%20Switzerland&hl=${mapLang.value}`
)
const situationMapImages = computed(() => [
  baseUrl + 'imgs/maps/map-1.svg',
  baseUrl + 'imgs/maps/map-2.svg',
])
const situationGalleryImages = computed(() => [
  baseUrl + 'imgs/situation/gals-view-3.jpg',
  baseUrl + 'imgs/situation/gals-view-1.jpg',
  baseUrl + 'imgs/situation/gals-view-2.jpg',
])

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}

function openSituationGallery(index) {
  if (typeof window === 'undefined') return
  if (typeof window.openGalleryFullscreen === 'function') {
    window.openGalleryFullscreen(situationGalleryImages.value, index)
  }
}

function openMapGallery(index) {
  if (typeof window === 'undefined') return
  if (typeof window.openGalleryFullscreen === 'function') {
    window.openGalleryFullscreen(situationMapImages.value, index)
  }
}
</script>
