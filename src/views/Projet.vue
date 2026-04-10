<template>
  <main id="projet" class="page page-projet">
    <section class="main-section">
      <div class="slider-container">
        <img v-for="img in heroSlides" :key="img" class="mySlides" :src="img" alt="Residence Kreuzweg" />
      </div>
      <div class="txt">
        <div>
          <h1 class="page-title">{{ t('project.title') }}</h1>
        </div>
      </div>
      <div class="slider-controlers">
        <div class="slider-arrows">
          <span @click="changeImg(-1)" class="nav-btn">&#10094;</span>
          <span @click="changeImg(1)" class="nav-btn">&#10095;</span>
        </div>
      </div>
    </section>

    <section class="tree-columns width">
      <div class="animate" data-animate="animContent .3s .05s forwards">
        <img class="small-logo animate" data-animate="animContent .3s .05s forwards" :src="baseUrl + 'imgs/logos/logo-rewus-main.svg'" alt="" />
      </div>
      <div class="animate" data-animate="animContent .3s .02s forwards">
        <p>{{ t('project.p1') }}<br /><br />{{ t('project.p2') }}<br /><br />{{ t('project.p3') }}</p>
      </div>
      <div class="animate" data-animate="animContent .5s .05s forwards">
        <p>
          {{ t('project.p4') }}
          <template v-if="projectP5"><br /><br />{{ projectP5 }}</template>
        </p>
      </div>
    </section>
    <section class="project-lead-row width">
      <p class="project-lead-row-text animate" data-animate="animContent .35s .08s forwards">{{ t('project.lead') }}</p>
    </section>

    <section class="fullImg" :style="{ backgroundImage: 'url(' + baseUrl + 'imgs/vis/4.webp)' }">
      <div>
        <img class="animate" data-animate="animContent .3s .05s forwards" :src="baseUrl + 'imgs/logos/logo-rewus.svg'" alt="" />
        <router-link to="/plans" class="btn animate" data-animate="animContent .5s 1s forwards">{{ t('project.cta') }}</router-link>
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
  baseUrl + 'imgs/vis/1-night.webp',
  ...resolveHeroExtras('/projet', baseUrl),
])

const projectP5 = computed(() => t('project.p5'))

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}
</script>

