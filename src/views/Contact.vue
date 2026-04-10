<template>
  <main id="contact" class="page page-contact">
    <section class="main-section">
      <div class="slider-container">
        <img v-for="img in heroSlides" :key="img" class="mySlides" :src="img" alt="Residence Kreuzweg" />
      </div>
      <div class="txt">
        <div>
          <h1 class="page-title">{{ t('contact.title') }}</h1>
        </div>
      </div>
      <div class="slider-controlers">
        <div class="slider-arrows">
          <span @click="changeImg(-1)" class="nav-btn">&#10094;</span>
          <span @click="changeImg(1)" class="nav-btn">&#10095;</span>
        </div>
      </div>
    </section>

    <section class="contact-container width">
      <div>
        <h2 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">{{ t('contact.writeUs') }}</h2>
        <form class="animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .16s forwards" @submit.prevent="submitForm">
          <div style="position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;" aria-hidden="true">
            <label for="website">Website</label>
            <input id="website" v-model.trim="form.website" type="text" tabindex="-1" autocomplete="off" />
          </div>
          <div><input v-model.trim="form.lastName" type="text" :placeholder="t('contact.lastName')" required /></div>
          <div><input v-model.trim="form.firstName" type="text" :placeholder="t('contact.firstName')" required /></div>
          <div><input v-model.trim="form.phone" type="tel" :placeholder="t('contact.phone')" /></div>
          <div><input v-model.trim="form.email" type="email" :placeholder="t('contact.email')" required /></div>
          <div><textarea v-model.trim="form.message" :placeholder="t('contact.message')" required minlength="30"></textarea></div>
          <button type="submit" class="btn" :disabled="isSubmitting">{{ isSubmitting ? t('contact.sending') : t('contact.send') }}</button>
          <p v-if="submitStatus === 'success'">{{ t('contact.success') }}</p>
          <p v-else-if="submitStatus === 'error'">{{ submitError }}</p>
        </form>
      </div>
      <div>
        <h2 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">{{ t('contact.person') }}</h2>
        <div class="client-img animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .16s forwards">
          <img class="client-img" :src="baseUrl + 'imgs/logos/footer.svg'" alt="" />
        </div>
        <div class="client">
          <!-- <h3 class="animate" data-animate="animTitle 0.3s 1.2s forwards">Alen</h3> -->
          <div class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .22s forwards">
            <img :src="baseUrl + 'imgs/icons/telephone.svg'" alt="" />
            <a href="tel:+41799532730">+41 79 953 27 30</a>
          </div>
          <div class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .30s forwards">
            <img class="bigger" :src="baseUrl + 'imgs/icons/mail.svg'" alt="" />
            <a href="mailto:info@esm-technologie.ch">info@esm-technologie.ch</a>
          </div>
          <div class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .38s forwards">
            <img :src="baseUrl + 'imgs/icons/pin.svg'" alt="" />
            <p>ESM TECHNOLOGIE GMBH<br />Britschenmattstrasse 29<br /></p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="partenaires" class="width partners-section">
      <div class="partenaires-container">
        <div>
        </div>
        <div>
          <p class="partner-info">{{ t('contact.partnerAxaLine1') }}<br />{{ t('contact.partnerAxaLine2') }}</p>
        </div>
        <div>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script setup>
import { computed, inject, reactive, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const baseUrl = inject('baseUrl', '/')
const { t, language } = useI18n()

const heroSlides = computed(() => [
  baseUrl + 'imgs/contact/contact-hero-1.jpg',
  baseUrl + 'imgs/contact/contact-hero-2.jpg',
  baseUrl + 'imgs/contact/contact-hero-3.jpg',
])

// Vor dem Deployment durch die Zieladresse ersetzen.
const CONTACT_RECIPIENT = 'info@rewus.ch'

const form = reactive({
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  message: '',
  website: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('idle')
const submitError = ref('')
const formOpenedAt = Date.now()

const MIN_SUBMIT_DELAY_MS = 3000
const SPAM_KEYWORDS_REGEX = /\b(casino|crypto|loan|viagra|porn|betting|forex|seo|backlinks?)\b/i
const URL_REGEX = /(https?:\/\/|www\.)/gi

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}

function formatSubmittedAt(date) {
  return new Intl.DateTimeFormat('de-CH', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  }).format(date)
}

function buildEmailBody({ senderName, submittedAt }) {
  const lines = [
    'RESIDENCE KREUZWEG',
    'Kontaktanfrage',
    '========================================',
    `Name: ${senderName || '-'}`,
    `E-Mail: ${form.email || '-'}`,
    `Telefon: ${form.phone || '-'}`,
    '----------------------------------------',
    'Nachricht:',
    form.message || '-',
    '----------------------------------------',
    `Sprache: ${language.value?.toUpperCase?.() || 'DE'}`,
    `Eingang: ${formatSubmittedAt(submittedAt)}`,
  ]
  return lines.join('\n')
}

async function submitForm() {
  if (isSubmitting.value) return

  if (form.website) {
    submitStatus.value = 'success'
    form.website = ''
    return
  }

  if (CONTACT_RECIPIENT === 'your-email@example.com') {
    submitStatus.value = 'error'
    submitError.value = t('contact.recipientError')
    return
  }

  if (Date.now() - formOpenedAt < MIN_SUBMIT_DELAY_MS) {
    submitStatus.value = 'error'
    submitError.value = t('contact.tooFastError')
    return
  }

  const linkCount = (form.message.match(URL_REGEX) || []).length
  const containsSpamKeywords = SPAM_KEYWORDS_REGEX.test(form.message)
  if (linkCount > 1 || containsSpamKeywords) {
    submitStatus.value = 'error'
    submitError.value = t('contact.spamError')
    return
  }

  isSubmitting.value = true
  submitStatus.value = 'idle'
  submitError.value = ''

  try {
    const senderName = `${form.firstName} ${form.lastName}`.trim()
    const submittedAt = new Date()
    const styledBody = buildEmailBody({ senderName, submittedAt })

    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECIPIENT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        _subject: `[Website] ${t('contact.subject')}`,
        _template: 'table',
        _captcha: 'true',
        _replyto: form.email,
        _honey: form.website,
        project: 'Residence Kreuzweg',
        contact_type: t('contact.subject'),
        name: senderName,
        email: form.email,
        phone: form.phone || '-',
        message: form.message,
        email_body: styledBody,
        submitted_at_iso: submittedAt.toISOString(),
        submitted_at_local: formatSubmittedAt(submittedAt),
        site: 'https://residence-des-muses.ch'
      })
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok || (result.success !== true && result.success !== 'true')) {
      throw new Error(result.message || t('contact.genericError'))
    }

    submitStatus.value = 'success'
    form.lastName = ''
    form.firstName = ''
    form.phone = ''
    form.email = ''
    form.message = ''
    form.website = ''
  } catch (error) {
    submitStatus.value = 'error'
    submitError.value = error instanceof Error ? error.message : t('contact.genericError')
  } finally {
    isSubmitting.value = false
  }
}
</script>
