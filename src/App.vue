<template>
  <div>
    <header class="site-header">
      <div class="header-contact">
        <div>
          <div><a href="tel:+41795760405"><img :src="baseUrl + 'imgs/icons/telephone.webp'" alt="" /></a></div>
          <div><a href="mailto:info@esm-technologie.ch"><img :src="baseUrl + 'imgs/icons/email.webp'" alt="" /></a></div>
          <div class="lang-switcher" role="group" :aria-label="t('nav.languageSwitcher')">
            <button type="button" :class="['lang-btn', { active: language === 'de' }]" @click="setLanguage('de')">DE</button>
            <button type="button" :class="['lang-btn', { active: language === 'fr' }]" @click="setLanguage('fr')">FR</button>
          </div>
        </div>
      </div>
      <div class="width header-inner">
        <div class="logo header-logo">
          <router-link to="/projet"><img class="header-logo-image" :src="baseUrl + 'imgs/logos/logo-rewus-main.svg'" alt="Residence de Muses logo" /></router-link>
        </div>
        <nav class="menu header-nav">
          <ul class="menu header-nav-list">
            <li><router-link to="/projet" class="header-nav-link">{{ t('nav.project') }}</router-link></li>
            <li><router-link to="/situation" class="header-nav-link">{{ t('nav.situation') }}</router-link></li>
            <li><router-link to="/appartements" class="header-nav-link">{{ t('nav.apartments') }}</router-link></li>
            <li><router-link to="/galerie" class="header-nav-link">{{ t('nav.gallery') }}</router-link></li>
            <li><router-link to="/plans" class="header-nav-link">{{ t('nav.plans') }}</router-link></li>
            <li><router-link to="/telechargements" class="header-nav-link">{{ t('nav.downloads') }}</router-link></li>
            <li><router-link to="/contact" class="header-nav-link">{{ t('nav.contact') }}</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <button id="menu-btn" class="menu-btn"><span></span></button>

    <div id="loading" class="loading-screen" :class="{ hidden: loaded }">
      <div class="loading-inner">
        <img :src="baseUrl + 'imgs/logos/logo-rewus-main.svg'" alt="Residence de Muses logo" />
      </div>
    </div>

    <main>
      <router-view />
    </main>

    <div id="fullscreenMap" class="fullscreen fullscreen-map" :class="{ active: fullscreenVisible }" @click.self="closeFullscreen">
      <div class="full-img-wrap">
        <div class="full-border"></div>
        <div id="full-img" class="fullscreen-img"><img :src="currentFullscreenImage" alt="Fullscreen gallery image" /></div>
      </div>
      <span v-if="canNavigateFullscreen" class="nav-btn prev" role="button" aria-label="Previous image" @click.stop="showPrevFullscreenImage">&#10094;</span>
      <span v-if="canNavigateFullscreen" class="nav-btn next" role="button" aria-label="Next image" @click.stop="showNextFullscreenImage">&#10095;</span>
      <button class="close fullscreen-close" :style="{ display: fullscreenVisible ? 'block' : 'none' }" aria-label="Close fullscreen gallery" @click="closeFullscreen">&times;</button>
    </div>
    <footer class="site-footer">
      <div class="width footer-inner">
        <div class="footer-details">
          <div><p>ESM TECHNOLOGIE GMBH<br />Britschenmattstrasse 29</p></div>
          <div><a href="https://www.lrm-services.ch" target="_blank"><img :src="baseUrl + 'imgs/logos/logo-rewus.svg'" alt="Rewus GmbH logo" /></a></div>
          <div><p><a href="mailto:info@esm-technologie.ch">info@esm-technologie.ch</a><br /><a href="tel:+41795760405">+41 79 576 04 05</a></p></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, inject, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from './composables/useI18n'

const baseUrl = inject('baseUrl', '/')
const router = useRouter()
const route = useRoute()
const loaded = ref(false)
const fullscreenVisible = ref(false)
const fullscreenImages = ref([])
const fullscreenIndex = ref(0)
const { language, setLanguage, t } = useI18n()

const SITE_NAME = 'Residence des Muses'
const SITE_URL = 'https://residence-des-muses.ch'
const DEFAULT_OG_IMAGE = `${SITE_URL}/imgs/vis/1-night.webp`

const seoByRoute = {
  '/': {
    de: {
      title: 'Projekt',
      description:
        'Exklusive Residenz in Herzogenbuchsee mit hochwertigen Wohnungen, klarer Architektur und nachhaltiger Wohnqualitaet.',
    },
    fr: {
      title: 'Projet',
      description:
        'Residence exclusive a Herzogenbuchsee avec appartements haut de gamme, architecture epuree et qualite de vie durable.',
    },
  },
  '/projet': {
    de: {
      title: 'Projekt',
      description:
        'Exklusive Residenz in Herzogenbuchsee mit hochwertigen Wohnungen, klarer Architektur und nachhaltiger Wohnqualitaet.',
    },
    fr: {
      title: 'Projet',
      description:
        'Residence exclusive a Herzogenbuchsee avec appartements haut de gamme, architecture epuree et qualite de vie durable.',
    },
  },
  '/situation': {
    de: {
      title: 'Lage',
      description:
        'Residenz in Gals im Herzen des Seelands mit ruhigem natuerlichem Umfeld und schneller Anbindung an Neuenburg, Biel und Murten.',
    },
    fr: {
      title: 'Situation',
      description:
        'Residence a Gals, au coeur du Seeland, avec cadre naturel paisible et acces rapide a Neuchatel, Bienne et Morat.',
    },
  },
  '/appartements': {
    de: {
      title: 'Wohnungen',
      description:
        'Wohnungen mit Terrasse, privatem Garten, hochwertigen Budgets und nachhaltiger Energieversorgung.',
    },
    fr: {
      title: 'Appartements',
      description:
        'Appartements avec terrasse, jardin prive, finitions qualitatives et solutions energetiques durables.',
    },
  },
  '/galerie': {
    de: {
      title: 'Galerie',
      description:
        'Visualisierungen und Innenansichten der Residence des Muses: Architektur, Wohnraeume und Aussenbereiche.',
    },
    fr: {
      title: 'Galerie',
      description:
        'Galerie des visualisations et espaces de vie de la Residence des Muses: interieur, architecture et exterieur.',
    },
  },
  '/plans': {
    de: {
      title: 'Preise und Grundrisse',
      description:
        'Grundrisse, Flaechen, Status und Preisinformationen der Wohnungen inklusive Download der Planunterlagen.',
    },
    fr: {
      title: 'Plans et prix',
      description:
        'Plans, surfaces, statuts et informations de prix des appartements, avec telechargement des documents.',
    },
  },
  '/telechargements': {
    de: {
      title: 'Downloads',
      description:
        'Broschuere und Planunterlagen der Residence des Muses als PDF zum direkten Download.',
    },
    fr: {
      title: 'Telechargements',
      description:
        'Brochure et plans de la Residence des Muses en PDF, disponibles en telechargement direct.',
    },
  },
  '/contact': {
    de: {
      title: 'Kontakt',
      description:
        'Kontaktieren Sie das Team der Residence des Muses fuer Beratung, Verfuegbarkeit und weitere Informationen.',
    },
    fr: {
      title: 'Contact',
      description:
        'Contactez l equipe de la Residence des Muses pour disponibilites, conseils et informations complementaires.',
    },
  },
}

const normalizedPath = computed(() => (route.path === '/' ? '/projet' : route.path))
const currentLanguage = computed(() => (language.value === 'fr' ? 'fr' : 'de'))
const currentSeo = computed(() => seoByRoute[route.path] || seoByRoute[normalizedPath.value] || seoByRoute['/projet'])
const seoTitle = computed(() => `${currentSeo.value[currentLanguage.value].title} | ${SITE_NAME}`)
const seoDescription = computed(() => currentSeo.value[currentLanguage.value].description)
const canonicalUrl = computed(() => `${SITE_URL}${normalizedPath.value}`)
const locale = computed(() => (currentLanguage.value === 'fr' ? 'fr_CH' : 'de_CH'))
const languageTag = computed(() => (currentLanguage.value === 'fr' ? 'fr-CH' : 'de-CH'))
const currentFullscreenImage = computed(() => fullscreenImages.value[fullscreenIndex.value] || '')
const canNavigateFullscreen = computed(() => fullscreenImages.value.length > 1)
const jsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE_NAME,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: `${SITE_URL}/imgs/logos/logo-rewus-main.svg`,
    telephone: '+41 79 576 04 05',
    email: 'info@rewus.ch',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Britschenmattstrasse 29',
      postalCode: '3238',
      addressLocality: 'Gals',
      addressCountry: 'CH',
    },
    areaServed: 'Switzerland',
    inLanguage: languageTag.value,
  })
)

useHead(() => ({
  title: seoTitle.value,
  htmlAttrs: {
    lang: currentLanguage.value,
  },
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/projet` },
  ],
  meta: [
    { name: 'description', content: seoDescription.value },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: locale.value },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:image', content: DEFAULT_OG_IMAGE },
    { property: 'og:image:alt', content: SITE_NAME },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle.value },
    { name: 'twitter:description', content: seoDescription.value },
    { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
  ],
  script: [
    {
      key: 'structured-data',
      type: 'application/ld+json',
      textContent: jsonLd.value,
    },
  ],
}))

function openFullscreenGallery(images, startIndex = 0) {
  if (!Array.isArray(images) || !images.length) return

  const preparedImages = images.filter((item) => typeof item === 'string' && item.length > 0)
  if (!preparedImages.length) return

  const safeIndex = Math.max(0, Math.min(startIndex, preparedImages.length - 1))
  fullscreenImages.value = preparedImages
  fullscreenIndex.value = safeIndex
  fullscreenVisible.value = true
}

function closeFullscreen() {
  fullscreenVisible.value = false
  fullscreenImages.value = []
  fullscreenIndex.value = 0
}

function showPrevFullscreenImage() {
  if (fullscreenImages.value.length < 2) return
  fullscreenIndex.value =
    (fullscreenIndex.value - 1 + fullscreenImages.value.length) % fullscreenImages.value.length
}

function showNextFullscreenImage() {
  if (fullscreenImages.value.length < 2) return
  fullscreenIndex.value = (fullscreenIndex.value + 1) % fullscreenImages.value.length
}

function onFullscreenKeydown(event) {
  if (!fullscreenVisible.value) return
  if (event.key === 'Escape') closeFullscreen()
  if (event.key === 'ArrowLeft') showPrevFullscreenImage()
  if (event.key === 'ArrowRight') showNextFullscreenImage()
}

let slideIndex = 1
function changeImg(n) {
  const x = document.getElementsByClassName('mySlides')
  if (!x.length) return
  slideIndex += n
  if (slideIndex > x.length) slideIndex = 1
  if (slideIndex < 1) slideIndex = x.length
  for (let i = 0; i < x.length; i++) x[i].style.display = 'none'
  x[slideIndex - 1].style.display = 'block'
}
function initSlider() {
  slideIndex = 1
  const x = document.getElementsByClassName('mySlides')
  if (x.length) {
    for (let i = 0; i < x.length; i++) x[i].style.display = 'none'
    x[0].style.display = 'block'
  }
  window.changeImg = changeImg
}

async function initSliderSafe() {
  await nextTick()
  initSlider()
}

function initImgShow() {
  const $ = window.jQuery || window.$
  if (typeof window === 'undefined' || !$) return
  $(document).off('click', '.imgShow').on('click', '.imgShow', function () {
    const src = $(this).attr('data-src')
    openFullscreenGallery([src], 0)
  })
}

function initHeaderInteractions() {
  if (typeof window === 'undefined') return
  const header = document.querySelector('header')
  const menuBtn = document.getElementById('menu-btn')
  const menu = header ? header.querySelector('.menu') : null
  if (!header || !menuBtn || !menu) return

  const onScroll = () => {
    if (window.scrollY >= 50) {
      header.classList.add('headerActive')
      menuBtn.classList.add('headerActive-menu')
    } else {
      header.classList.remove('headerActive')
      menuBtn.classList.remove('headerActive-menu')
    }
  }

  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    header.classList.toggle('headerActive', menuBtn.classList.contains('active'))
  })

  menu.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) return
    if (!target.closest('a')) return
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
    header.classList.remove('headerActive')
  })
}

function runAnimations() {
  if (typeof window !== 'undefined' && window.initAnimations) {
    window.initAnimations()
  }
}

onMounted(() => {
  loaded.value = true
  initSliderSafe()
  initHeaderInteractions()
  runAnimations()

  if (typeof window !== 'undefined') {
    window.openGalleryFullscreen = openFullscreenGallery
    window.addEventListener('keydown', onFullscreenKeydown)
  }

  const $ = window.jQuery || window.$
  if ($) {
    initImgShow()
  }

  router.afterEach(() => {
    closeFullscreen()
    setTimeout(() => {
      initSliderSafe()
      runAnimations()
    }, 50)
  })
})

onUnmounted(() => {
  const $ = window.jQuery || window.$
  if ($) {
    $(document).off('click', '.imgShow')
  }

  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onFullscreenKeydown)
    window.openGalleryFullscreen = undefined
  }
})
</script>

<style scoped>
.lang-switcher {
  align-items: center;
  display: flex;
  gap: 6px;
}

.lang-btn {
  background: transparent;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  font-size: 11px;
  line-height: 1;
  min-width: 30px;
  padding: 4px 6px;
}

.lang-btn.active {
  background-color: #a59078a5;
  color: #000;
}
</style>
