<template>
  <main id="plans" class="page page-plans width">
    <div id="facade" class="plans-facade animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">
      <div ref="facadeInteractiveRef" class="plans-facade-interactive" @mouseleave="clearActiveZone">
        <img :src="baseUrl + 'imgs/photomontage-small.webp'" alt="Residence Kreuzweg facade view" class="plans-facade-image" />
        <img
          v-if="activeZone"
          :src="baseUrl + activeZone.overlay"
          alt=""
          class="plans-facade-overlay"
          aria-hidden="true"
        />

        <svg class="plans-facade-hitmap" viewBox="0 0 828 466" preserveAspectRatio="none" aria-hidden="true">
          <path
            v-for="zone in facadePathZones"
            :key="zone.id"
            class="plans-facade-hit"
            :d="zone.d"
            tabindex="0"
            @mouseenter="setActiveZone(zone.id, $event)"
            @mousemove="moveActiveCard($event)"
            @focus="setActiveZone(zone.id)"
            @click="setActiveZone(zone.id, $event)"
          />
          <rect
            v-for="zone in facadeRectZones"
            :key="zone.id"
            class="plans-facade-hit"
            :x="zone.x"
            :y="zone.y"
            :width="zone.width"
            :height="zone.height"
            tabindex="0"
            @mouseenter="setActiveZone(zone.id, $event)"
            @mousemove="moveActiveCard($event)"
            @focus="setActiveZone(zone.id)"
            @click="setActiveZone(zone.id, $event)"
          />
        </svg>

        <article
          ref="facadeCardRef"
          v-if="activeApartment"
          class="plans-facade-card"
          :class="{ 'is-available': activeApartment.status === 'available', 'is-sold': activeApartment.status === 'sold' }"
          :style="facadeCardStyle"
        >
          <div class="plans-facade-card-status">{{ t(`plans.statusValues.${activeApartment.status}`) }}</div>
          <div class="plans-facade-card-row">
            <strong>{{ t('plans.apartment') }}</strong>
            <span>{{ activeApartment.apartment }}</span>
          </div>
          <div class="plans-facade-card-row">
            <strong>{{ t('plans.rooms') }}</strong>
            <span>{{ activeApartment.pieces }}</span>
          </div>
          <div class="plans-facade-card-row">
            <strong>m2</strong>
            <span>{{ activeApartment.surface }} m<sup>2</sup></span>
          </div>
        </article>
      </div>
    </div>

    <div id="facade-table" class="plans-table animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .12s forwards">
      <div class="table plans-table-inner">
        <table class="avp-table avp-prix">
          <thead>
            <tr>
              <th class="column-1">{{ t('plans.apartment') }}</th>
              <th class="column-3">{{ t('plans.rooms') }}</th>
              <th class="column-6">m2</th>
              <th class="column-7">{{ t('plans.terraceBalcony') }}</th>
              <th class="column-8">m2</th>
              <th class="column-19">{{ t('plans.downloadPlan') }}</th>
              <th class="column-20">{{ t('plans.downloadPlan') }}</th>
              <th class="column-21">{{ t('plans.status') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="apartment in apartmentRows" :key="apartment.lot" :class="['lot-' + apartment.lot, apartment.status === 'available' ? 'd' : 'r']">
              <td class="column-1">{{ apartment.apartment }}</td>
              <td class="column-3">{{ apartment.pieces }}</td>
              <td class="column-6">{{ apartment.surface }} m<sup>2</sup></td>
              <td class="column-7">{{ apartment.terrasse }}</td>
              <td class="column-8">{{ apartment.jardin }}</td>
              <td class="column-19">
                <a :href="fileUrl(apartment.planFileFr)" download class="plan-lang-link">FR</a>
              </td>
              <td class="column-20">
                <a :href="fileUrl(apartment.planFileDe)" download class="plan-lang-link">DE</a>
              </td>
              <td class="column-21"><i></i><span>{{ t(`plans.statusValues.${apartment.status}`) }}</span></td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="plans-table-note">
          <p class="plans-table-note-text">{{ t('plans.note') }}</p>
        </div> -->
      </div>
    </div>

    <div class="table-btns animate" data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .18s forwards">
      <div>
        <router-link to="/contact" class="btn">{{ t('nav.contact') }}</router-link>
      </div>
    </div>

    <section class="plans-partners animate" data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .24s forwards">
      <h2>{{ t('contact.partners') }}</h2>
      <div class="plans-partners-grid">
        <div v-for="partner in partnerLogos" :key="partner" class="plans-partners-item">
          <img :src="partnerImageUrl(partner)" alt="Partner logo" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { useI18n } from '../composables/useI18n'
const baseUrl = inject('baseUrl', '/')
const { t } = useI18n()
const apartments = [
  { apartment: '128-1', pieces: 5.5, surface: 224, terrasse: '47,2', jardin: '271,2', status: 'available' },
  { apartment: '128-2', pieces: 5.5, surface: 224, terrasse: '47,2', jardin: '271,2', status: 'sold' },
  { apartment: '128-3', pieces: 4.5, surface: 141, terrasse: '26,05', jardin: '167,05', status: 'available' },
  { apartment: '128-4', pieces: 4.5, surface: 141, terrasse: '26,05', jardin: '167,05', status: 'sold' },
  { apartment: '128-5', pieces: 3.5, surface: 141, terrasse: '15', jardin: '156', status: 'available' },
  { apartment: '128-6', pieces: 3.5, surface: 141, terrasse: '15', jardin: '156', status: 'sold' },
]

function buildPlanFileFr(apartment) {
  return `files/fran\u00e7ais/Suisse ${apartment}_full.pdf`
}

function buildPlanFileDe(apartment) {
  return `files/deutsch/Schweiz ${apartment}_full.pdf`
}

const apartmentRows = [
  ...apartments.map((item) => ({
    ...item,
    lot: item.apartment,
    planFileFr: buildPlanFileFr(item.apartment),
    planFileDe: buildPlanFileDe(item.apartment),
  })),
]
const partnerLogos = [
  'Frame 1534994131.png',
  'Frame 1534994132.png',
  'Frame 1534994133.png',
  'Frame 1534994134.png',
  'Frame 1534994135.png',
  'Frame 1534994136.png',
]

function fileUrl(relativePath) {
  return encodeURI(baseUrl + relativePath)
}

function partnerImageUrl(fileName) {
  return encodeURI(baseUrl + 'imgs/partners/' + fileName)
}

const facadeZones = [
  { id: 'top-left', overlay: 'imgs/plans/top-left.svg', apartmentIndex: 5, kind: 'path', d: 'M174.5 147.5H211.5V129H231V147.5H373V137.5H381V147.5H418.5V271.5H102L174.5 147.5Z' },
  { id: 'top-right', overlay: 'imgs/plans/top-right.svg', apartmentIndex: 4, kind: 'path', d: 'M418 147.562H447V137.526H455.5V147.562H594.499V130H614.223V147.562H651.141L727 272H418V147.562Z' },
  { id: 'mid-left', overlay: 'imgs/plans/mid-left.svg', apartmentIndex: 3, kind: 'rect', x: 133, y: 275, width: 285, height: 54 },
  { id: 'mid-right', overlay: 'imgs/plans/mid-right.svg', apartmentIndex: 2, kind: 'rect', x: 418, y: 275, width: 276, height: 54 },
  { id: 'bot-left', overlay: 'imgs/plans/bot-left.svg', apartmentIndex: 1, kind: 'rect', x: 133, y: 329, width: 285, height: 62 },
  { id: 'bot-right', overlay: 'imgs/plans/bot-right.svg', apartmentIndex: 0, kind: 'rect', x: 418, y: 329, width: 276, height: 62 },
]

const facadePathZones = computed(() => facadeZones.filter((zone) => zone.kind === 'path'))
const facadeRectZones = computed(() => facadeZones.filter((zone) => zone.kind === 'rect'))
const activeZoneId = ref(null)
const activeZone = computed(() => facadeZones.find((zone) => zone.id === activeZoneId.value) || null)
const activeApartment = computed(() => (activeZone.value ? apartmentRows[activeZone.value.apartmentIndex] : null))
const facadeInteractiveRef = ref(null)
const facadeCardRef = ref(null)
const cardPosition = ref({ left: 14, top: 14 })
const facadeCardStyle = computed(() => ({
  left: `${cardPosition.value.left}px`,
  top: `${cardPosition.value.top}px`,
}))

function setActiveZone(zoneId, event) {
  activeZoneId.value = zoneId
  if (event) {
    updateCardPosition(event)
  }
}

function moveActiveCard(event) {
  if (!activeZoneId.value) return
  updateCardPosition(event)
}

function clearActiveZone() {
  activeZoneId.value = null
}

function updateCardPosition(event) {
  const container = facadeInteractiveRef.value
  if (!container || !event || typeof event.clientX !== 'number' || typeof event.clientY !== 'number') return

  const containerRect = container.getBoundingClientRect()
  const cardWidth = facadeCardRef.value ? facadeCardRef.value.offsetWidth : 240
  const cardHeight = facadeCardRef.value ? facadeCardRef.value.offsetHeight : 150
  const margin = 12

  const pointerX = event.clientX - containerRect.left
  const pointerY = event.clientY - containerRect.top

  let left = pointerX + margin
  let top = pointerY - cardHeight - margin

  if (left + cardWidth > containerRect.width - margin) {
    left = pointerX - cardWidth - margin
  }

  if (top < margin) {
    top = pointerY + margin
  }

  left = Math.max(margin, Math.min(left, containerRect.width - cardWidth - margin))
  top = Math.max(margin, Math.min(top, containerRect.height - cardHeight - margin))

  cardPosition.value = { left, top }
}
</script>

