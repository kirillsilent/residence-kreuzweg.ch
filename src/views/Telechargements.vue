<template>
  <main id="telechargements" class="page page-telechargements">
    <section class="downloads-page-title width">
      <h1 class="page-title">{{ t('downloads.title') }}</h1>
    </section>

    <section class="main-section">
      <div class="slider-container">
        <img
          v-for="(img, index) in heroSlides"
          :key="img"
          :class="['mySlides', { 'hero-primary-slide': index === 0 }]"
          :src="img"
          alt="Residence Kreuzweg"
        />
      </div>
    </section>

    <section class="telechargements width">
      <div class="telechargements-gallery">
        <div class="telechargements-gallery-top">
          <figure
            class="telechargements-gallery-item telechargements-gallery-item--large animate"
            data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards"
            @click="openProgressGallery(0)"
          >
            <img :src="progressImages[0]" alt="Aktueller Baufortschritt Residence Kreuzweg" />
          </figure>

          <div class="telechargements-gallery-side">
            <figure
              v-for="(img, index) in sideImages"
              :key="img"
              class="telechargements-gallery-item animate"
              :data-animate="`animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${(0.11 + index * 0.06).toFixed(2)}s forwards`"
              @click="openProgressGallery(index + 1)"
            >
              <img :src="img" alt="Aktueller Baufortschritt Residence Kreuzweg" />
            </figure>
          </div>
        </div>

        <div class="telechargements-gallery-bottom">
          <figure
            v-for="(img, index) in bottomImages"
            :key="img"
            class="telechargements-gallery-item animate"
            :data-animate="`animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${(0.23 + index * 0.06).toFixed(2)}s forwards`"
            @click="openProgressGallery(index + 3)"
          >
            <img :src="img" alt="Aktueller Baufortschritt Residence Kreuzweg" />
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useI18n } from '../composables/useI18n'
import { resolveHeroExtras } from '../composables/useHeroImages'
const baseUrl = inject('baseUrl', '/')
const { t } = useI18n()

const heroSlides = computed(() => [
  baseUrl + 'imgs/vis/12.webp',
  ...resolveHeroExtras('/baufortschritt', baseUrl),
])

const progressImages = computed(() => [
  baseUrl + 'imgs/baufortschritt/progress-01.jpg',
  baseUrl + 'imgs/baufortschritt/progress-02.jpg',
  baseUrl + 'imgs/baufortschritt/progress-03.jpg',
  baseUrl + 'imgs/baufortschritt/progress-04.jpg',
  baseUrl + 'imgs/baufortschritt/progress-05.jpg',
  baseUrl + 'imgs/baufortschritt/progress-06.jpg',
  baseUrl + 'imgs/baufortschritt/progress-07.jpg',
])
const sideImages = computed(() => progressImages.value.slice(1, 3))
const bottomImages = computed(() => progressImages.value.slice(3))

function openProgressGallery(index) {
  if (typeof window === 'undefined') return
  if (typeof window.openGalleryFullscreen === 'function') {
    window.openGalleryFullscreen(progressImages.value, index)
  }
}
</script>
