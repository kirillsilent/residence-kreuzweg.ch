const HERO_POOL = [
  'imgs/hero/001_10 - Photo 1.png',
  'imgs/hero/001_3 - Photo 1.png',
  'imgs/hero/001_4 - Photo 1.png',
  'imgs/hero/001_7 - Photo 1.png',
  'imgs/hero/002_11 - Photo 1.png',
  'imgs/hero/002_12 - Photo 1.png',
  'imgs/hero/002_13 - Photo 1.png',
  'imgs/hero/002_15 - Photo 1.png',
  'imgs/hero/002_17 - Photo 1.png',
  'imgs/hero/002_19 - Photo 1.png',
]

const ROUTES_WITH_HERO_EXTRAS = ['/projet', '/situation', '/appartements', '/baufortschritt', '/contact']

const HERO_EXTRAS_BY_ROUTE = (() => {
  const extrasByRoute = {}
  let poolIndex = 0

  for (const route of ROUTES_WITH_HERO_EXTRAS) {
    extrasByRoute[route] = []
    for (let i = 0; i < 2 && poolIndex < HERO_POOL.length; i++) {
      extrasByRoute[route].push(HERO_POOL[poolIndex])
      poolIndex += 1
    }
  }

  // Manual tweak: `/situation` third slide felt too similar, swap the 2nd extra.
  if (extrasByRoute['/situation']?.length >= 2) {
    extrasByRoute['/situation'][1] = 'imgs/hero/002_11 - Photo 1.png'
  }

  return extrasByRoute
})()

function joinBaseUrl(baseUrl, relativePath) {
  const safeBase = typeof baseUrl === 'string' ? baseUrl : '/'
  const base = safeBase.endsWith('/') ? safeBase : `${safeBase}/`
  const rel = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath
  return `${base}${rel}`
}

export function resolveHeroExtras(routePath, baseUrl) {
  const extras = HERO_EXTRAS_BY_ROUTE[routePath] || []
  // File names include spaces; encode them so the URL works in the browser.
  return extras.map((relativePath) => encodeURI(joinBaseUrl(baseUrl, relativePath)))
}
