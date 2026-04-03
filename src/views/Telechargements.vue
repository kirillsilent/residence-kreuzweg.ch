<template>
  <main id="telechargements" class="page page-telechargements">
    <section class="downloads-page-title width">
      <h1 class="page-title">{{ t('downloads.title') }}</h1>
    </section>

    <section class="main-section">
      <div class="slider-container">
        <img class="mySlides" :src="baseUrl + 'imgs/vis/12.webp'" alt="Residence de Muses" />
        <img class="mySlides" :src="baseUrl + 'imgs/vis/9.webp'" alt="Residence de Muses" />
        <img class="mySlides" :src="baseUrl + 'imgs/vis/3.webp'" alt="Residence de Muses" />
      </div>
      <div class="slider-controlers">
        <div class="slider-arrows">
          <span @click="changeImg(-1)" class="nav-btn">&#10094;</span>
          <span @click="changeImg(1)" class="nav-btn">&#10095;</span>
        </div>
      </div>
    </section>

    <section class="telechargements width">
      <div>
        <span><img :src="baseUrl + 'imgs/icons/brochure.webp'" alt="" /></span>
        <h3>{{ t('downloads.brochure') }}</h3>
        <a :href="baseUrl + 'files/Residence_Des_Muses-brochure.pdf'" class="btn" target="_blank" rel="noopener">{{ t('downloads.button') }}</a>
      </div>
      <div>
        <span><img :src="baseUrl + 'imgs/icons/brochure.webp'" alt="" /></span>
        <h3>{{ t('downloads.plans') }}</h3>
        <a :href="baseUrl + 'files/Residence_Des_Muses_Plans.pdf'" class="btn" target="_blank" rel="noopener">{{ t('downloads.button') }}</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { inject } from 'vue'
import { useI18n } from '../composables/useI18n'
const baseUrl = inject('baseUrl', '/')
const { t } = useI18n()
function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}
</script>
