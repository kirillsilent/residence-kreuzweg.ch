<template>
  <main id="galerie" class="page page-galerie">
    <section class="main-section">
      <div class="slider-container">
        <img v-for="img in heroSlides" :key="img" class="mySlides" :src="img" alt="Residence Kreuzweg" />
      </div>
      <div class="txt">
        <div>
          <h1 class="page-title">{{ t('gallery.title') }}</h1>
        </div>
      </div>
      <div class="slider-controlers">
        <div class="slider-arrows">
          <span @click="changeImg(-1)" class="nav-btn">&#10094;</span>
          <span @click="changeImg(1)" class="nav-btn">&#10095;</span>
        </div>
      </div>
    </section>

    <section class="galerie-container width">
      <div class="title animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">
        <h2>{{ t('gallery.title') }}</h2>
      </div>
      <div class="galerie-imgs">
        <div
          v-for="(img, i) in galleryImgs"
          :key="i"
          class="animate"
          :data-animate="`animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${Math.min(0.05 + i * 0.03, 0.35).toFixed(2)}s forwards`"
          :data-src="img"
          @click="openFullscreen(i)"
        >
          <img :src="img" alt="Residence Kreuzweg" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useI18n } from '../composables/useI18n'
const baseUrl = inject('baseUrl', '/')
const { t } = useI18n()

function publicImageUrl(relativePath) {
  return encodeURI(`${baseUrl}${relativePath}`)
}

// Hero slider: take images from `public/imgs/gallery`.
const heroImgs = computed(() => [
  publicImageUrl('imgs/gallery/12 9.png'),
  publicImageUrl('imgs/gallery/13 1.png'),
  publicImageUrl('imgs/gallery/6 41.png'),
  publicImageUrl('imgs/gallery/7 (3) 1.png'),
])

// Grid below: keep the original full set from `public/imgs/galerie`.
const galleryImgs = computed(() => [
  baseUrl + 'imgs/galerie/galerie-01-bedroom-main.webp',
  baseUrl + 'imgs/galerie/galerie-02-bedroom-front.webp',
  baseUrl + 'imgs/galerie/galerie-03-walk-in-closet.webp',
  baseUrl + 'imgs/galerie/galerie-04-bathroom-shower.webp',
  baseUrl + 'imgs/galerie/galerie-05-entry-hallway.webp',
  baseUrl + 'imgs/galerie/galerie-06-living-kitchen-wide.webp',
  baseUrl + 'imgs/galerie/galerie-07-dining-kitchen.webp',
  baseUrl + 'imgs/galerie/galerie-08-atrium-gable.webp',
  baseUrl + 'imgs/galerie/galerie-09-dining-window-view.webp',
  baseUrl + 'imgs/galerie/galerie-10-living-tv-wall.webp',
  baseUrl + 'imgs/galerie/galerie-11-kitchen-island.webp',
  baseUrl + 'imgs/galerie/galerie-12-dining-closeup.webp',
  baseUrl + 'imgs/galerie/galerie-13-hallway-wood-panel.webp',
  baseUrl + 'imgs/galerie/galerie-14-bathroom-vanity.webp',
  baseUrl + 'imgs/galerie/galerie-15-corridor-view.webp',
  baseUrl + 'imgs/galerie/galerie-16-attic-bedroom.webp',
  baseUrl + 'imgs/galerie/galerie-17-bathroom-tub-side.webp',
  baseUrl + 'imgs/galerie/galerie-18-bathroom-tub-shower.webp',
  baseUrl + 'imgs/galerie/galerie-19-attic-bedroom-shelves.webp',
  baseUrl + 'imgs/galerie/galerie-20-attic-living-sofa.webp',
  baseUrl + 'imgs/galerie/galerie-21-bedroom-vanity-corner.webp',
  baseUrl + 'imgs/galerie/galerie-22-bathroom-vanity-shelf.webp',
  baseUrl + 'imgs/galerie/galerie-23-living-to-kitchen.webp',
  baseUrl + 'imgs/galerie/galerie-24-entrance-console.webp',
])

const heroSlides = computed(() => {
  const imgs = heroImgs.value
  if (imgs.length >= 3) return [imgs[2], imgs[0], imgs[1]].filter(Boolean)
  return imgs.slice(0, 3).filter(Boolean)
})

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}

function openFullscreen(index) {
  const images = galleryImgs.value
  if (!images.length) return
  if (typeof window === 'undefined') return

  if (typeof window.openGalleryFullscreen === 'function') {
    window.openGalleryFullscreen(images, index)
  }
}
</script>
