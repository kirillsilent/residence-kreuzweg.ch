import { ref } from 'vue'

const STORAGE_KEY = 'site_language'
const SUPPORTED_LANGUAGES = ['de', 'fr']

const messages = {
  de: {
    nav: {
      project: 'Projekt',
      situation: 'Lage',
      apartments: 'Wohnungen',
      gallery: 'Galerie',
      plans: 'Preise und Grundrisse',
      downloads: 'Aktueller Baufortschritt',
      contact: 'Kontakt',
      menu: 'Menue',
      languageSwitcher: 'Sprachumschalter'
    },
    project: {
      title: 'PROJEKT',
      heroTitle: 'EXKLUSIVE RESIDENZ',
      heroSubtitle: 'HERZOGENBUCHSEE',
      lead: 'Eco Premium Residence Kreuzweg',
      p1: 'Architektur, Raum und Lebensqualität auf höchstem Niveau.',
      p2: 'Eine exklusive Residenz mit insgesamt sechs Wohneinheiten, konzipiert für hohe Ansprüche an Komfort, Qualität und Wohnkultur. Die zeitlose Architektur kombiniert hochwertige Materialien mit grosszügigen Fensterflächen und schafft ein lichtdurchflutetes, elegantes Wohnambiente.',
      p3: 'Die Bauweise setzt neue Massstäbe: Realisiert mit der innovativen EmisCo-Technologie auf Basis von Miscanthus und Bio-Beton, verbindet das Gebäude ökologische Nachhaltigkeit mit hoher baulicher Qualität und schafft ein gesundes, spürbar angenehmes Raumklima bei reduziertem CO₂-Fussabdruck.',
      p4: 'Die Attikawohnungen mit Mezzanin bieten ein exklusives Raumgefühl mit zusätzlicher architektonischer Ebene, während die Gartenwohnungen mit zusätzlichem Untergeschoss vielseitige Nutzungsmöglichkeiten eröffnen.',
      p5: 'Ein aussergewöhnliches Wohnangebot für anspruchsvolle Eigennutzer und Investoren mit Fokus auf Qualität, Ruhe und langfristige Wertbeständigkeit.',
      cta: 'Preise und Grundrisse'
    },
    situation: {
      title: 'LAGE',
      heading: 'Lage',
      p1: 'Die Residenz am Kreuzweg 2 liegt in Gals, im Herzen des Seelands, und profitiert von einem besonders gefragten Wohnumfeld, das Natur, Ruhe und hervorragende Erreichbarkeit miteinander verbindet.',
      p2: 'Nur wenige Minuten von Neuenburg, Biel und Murten entfernt, bietet sie ein ideales Gleichgewicht zwischen wohnlicher Gelassenheit und der Naehe zu den wichtigsten urbanen Zentren.',
      p3: 'Abseits von Stoerungen und dem hektischen Rhythmus der Staedte ueberzeugt Gals durch seine friedliche Atmosphaere und seine natuerliche, gut erhaltene Umgebung. Als Dorf mit landwirtschaftlichem Charakter ist Gals von weiten Feldern und offenen Landschaften umgeben und bietet eine seltene und authentische Lebensqualitaet.',
      p4: 'Geschaetzt fuer sein natuerliches Umfeld und seine hohe Wohnqualitaet bietet die Gemeinde ein ausgewogenes Lebensumfeld, in dem Komfort, Freiraum und Ruhe zusammenkommen.',
      infrastructureTitle: 'Distanzen & Infrastruktur',
      infrastructureItems: [
        'Primarschule: ca. 100 m',
        'Restaurant Kreuz (Michelin-Stern): ca. 100 m',
        'Aldi: ca. 1 km',
        'Denner: ca. 1.1 km',
        'Coop: ca. 1.1 km',
        'Marin Centre: ca. 4.5 km'
      ],
      mapCta: 'Auf Google Maps'
    },
    apartments: {
      title: 'WOHNUNGEN',
      heading: 'Die Wohnungen',
      intro1: 'Die Wohnungen überzeugen durch grosszügige Raumverhältnisse, klare architektonische Linien und eine konsequent auf hohen Wohnkomfort ausgerichtete Konzeption. Die lichtdurchfluteten Wohn- und Essbereiche mit offener Küche öffnen sich über grossflächige Verglasungen zu den Aussenräumen und schaffen eine fliessende Verbindung zwischen Innen und Aussen.',
      intro2: 'Durchdachte Grundrisse ermöglichen Flexibilität in der Nutzung und ein aussergewöhnliches Raumgefühl. Während die Wohnbereiche Offenheit vermitteln, bieten die Schlafbereiche ruhige Rückzugsorte mit hoher Privatsphäre. Hochwertige Badezimmer runden das Gesamtbild ab.',
      buildTitle: 'Ein entscheidender Unterschied: die Bauweise',
      buildIntro: 'Das Projekt basiert auf der innovativen EmisCo-Technologie – einem Baustoffsystem aus Miscanthus und Bio-Beton, das den Wohnkomfort neu definiert.',
      buildLead: 'Die Gebäudehülle reguliert Luft und Feuchtigkeit auf natürliche Weise und sorgt ganzjährig für ein stabiles, angenehmes Raumklima. Gleichzeitig werden CO₂ reduziert und die Luftqualität im Innenraum spürbar verbessert.',
      buildFeatures: [],
      buildOutro1: 'Das Ergebnis ist ein ausgeglichenes, hochwertiges Wohnklima – vergleichbar mit einer natürlichen Klimaregulierung und unmittelbar wahrnehmbar durch frische, reine Luft.',
      buildOutro2: '',
      buildOutro3: '',
      technologyTitle: 'Technologie & Individualität',
      technologyText: 'Ein modernes Lüftungssystem von Zehnder sorgt zusätzlich für kontinuierliche Frischluftzufuhr und optimalen Luftaustausch.',
      customizationTitle: 'Individuelle Gestaltung',
      customizationText: 'Die Innenausstattung bleibt bewusst offen und ermöglicht der Käuferschaft eine individuelle Gestaltung – für ein Zuhause, das sowohl architektonisch als auch persönlich überzeugt.'
    },
    gallery: {
      title: 'Galerie'
    },
    plans: {
      apartment: 'Wohnung',
      rooms: 'Zimmer',
      area: 'Wohnflaeche',
      terraceBalcony: 'Terrasse / Balkon',
      garden: 'Garten',
      priceWithoutParking: 'Preis ohne Parkplatz',
      status: 'Status',
      download: 'Plan',
      downloadPlan: 'Herunterladen',
      priceOnRequest: 'Preis auf Anfrage',
      note: '2 Parkplaetze pro Wohnung in der Tiefgarage zusaetzlich',
      allPlans: 'Alle Grundrisse herunterladen',
      brochure: 'Broschuere herunterladen',
      statusValues: {
        available: 'Verfuegbar',
        reserved: 'Reserviert',
        sold: 'Verkauft'
      }
    },
    downloads: {
      title: 'Aktueller Baufortschritt',
      brochure: 'Broschuere',
      plans: 'Grundrisse',
      button: 'Herunterladen'
    },
    contact: {
      title: 'Kontakt',
      writeUs: 'Schreiben Sie uns',
      lastName: 'Ihr Nachname*',
      firstName: 'Ihr Vorname*',
      phone: 'Telefonnummer*',
      email: 'E-mail*',
      message: 'Kurze Nachricht*',
      send: 'Senden',
      sending: 'Wird gesendet...',
      success: 'Ihre Nachricht wurde erfolgreich gesendet.',
      person: 'Ansprechpartner',
      partners: 'Partner',
      partnerCompanyA: 'A.DT Planung & Projektmanagement Sarl',
      partnerAxaLine1: 'Generalagentur Neuchatel | Rue St-Honore 2 |',
      partnerAxaLine2: 'Postfach 3256 | 2001 Neuchatel',
      recipientError: 'Bitte setzen Sie zuerst die Empfaenger-E-Mail in CONTACT_RECIPIENT.',
      genericError: 'Beim Senden ist ein Fehler aufgetreten.',
      tooFastError: 'Bitte warten Sie einen Moment und senden Sie das Formular erneut.',
      spamError: 'Die Nachricht konnte nicht gesendet werden. Bitte entfernen Sie Verweise/Links und versuchen Sie es erneut.',
      subject: 'Neue Nachricht vom Kontaktformular',
      fieldLastName: 'Nachname',
      fieldFirstName: 'Vorname',
      fieldPhone: 'Telefon',
      fieldEmail: 'E-Mail',
      fieldMessage: 'Nachricht'
    },
    footer: {
      legal: 'Bilder und Plaene unverbindlich · www.atelier-vert-pomme.com'
    }
  },
  fr: {
    nav: {
      project: 'Projet',
      situation: 'Situation',
      apartments: 'Appartements',
      gallery: 'Galerie',
      plans: 'Plans et prix',
      downloads: 'Etat actuel de la construction',
      contact: 'Contact',
      menu: 'Menu',
      languageSwitcher: 'Selecteur de langue'
    },
    project: {
      title: 'PROJET',
      heroTitle: 'RESIDENCE EXCLUSIVE',
      heroSubtitle: 'HERZOGENBUCHSEE',
      lead: 'Eco Premium Residence Kreuzweg',
      p1: 'Architecture, espace et qualite de vie au plus haut niveau.',
      p2: 'Une residence exclusive composee de six logements au total, concue pour repondre a des exigences elevees en matiere de confort, de qualite et d art de vivre. L architecture intemporelle associe des materiaux haut de gamme a de vastes surfaces vitrees afin de creer une atmosphere lumineuse et elegante.',
      p3: 'La construction etablit de nouveaux standards : realise avec la technologie innovante EmisCo, basee sur le miscanthus et le bio-beton, le batiment associe durabilite ecologique et haute qualite constructive, tout en offrant un climat interieur sain, sensiblement plus agreable, avec une empreinte CO₂ reduite.',
      p4: 'Les appartements en attique avec mezzanine offrent une sensation d espace exclusive grace a un niveau architectural supplementaire, tandis que les appartements de jardin avec sous-sol additionnel ouvrent des possibilites d usage polyvalentes.',
      p5: 'Une offre residentielle exceptionnelle pour des proprietaires occupants et investisseurs exigeants, avec un accent sur la qualite, le calme et la valorisation a long terme.',
      cta: 'Plans et prix'
    },
    situation: {
      title: 'SITUATION',
      heading: 'Situation',
      p1: 'La residence du Kreuzweg 2 se situe a Gals, au coeur du Seeland, et profite d un environnement residentiel tres recherche, alliant nature, calme et excellente accessibilite.',
      p2: 'A seulement quelques minutes de Neuchatel, Bienne et Morat, elle offre un equilibre ideal entre serenite residentielle et proximite des principaux centres urbains.',
      p3: 'A l ecart des nuisances et du rythme soutenu des villes, Gals seduit par son atmosphere paisible et son environnement naturel preserve. Avec son caractere agricole, le village est entoure de vastes champs et de paysages ouverts, offrant une qualite de vie rare et authentique.',
      p4: 'Appreciee pour son cadre naturel et sa grande qualite de vie, la commune propose un environnement equilibre ou confort, espace et tranquillite se rejoignent.',
      infrastructureTitle: 'Distances & infrastructures',
      infrastructureItems: [
        'Ecole primaire : env. 100 m',
        'Restaurant Kreuz (etoile Michelin) : env. 100 m',
        'Aldi : env. 1 km',
        'Denner : env. 1.1 km',
        'Coop : env. 1.1 km',
        'Marin Centre : env. 4.5 km'
      ],
      mapCta: 'Voir sur Google Maps'
    },
    apartments: {
      title: 'APPARTEMENTS',
      heading: 'Les appartements',
      intro1: 'Les appartements se distinguent par des volumes genereux, des lignes architecturales claires et une conception resolument orientee vers un confort de vie eleve. Les espaces de vie et de repas, lumineux et ouverts avec cuisine integree, se prolongent vers les exterieurs grace a de larges surfaces vitrees et creent une transition fluide entre interieur et exterieur.',
      intro2: 'Des plans bien penses permettent une utilisation flexible et procurent une sensation d espace exceptionnelle. Tandis que les espaces de vie expriment l ouverture, les zones nuit offrent des retraits calmes avec un haut niveau d intimite. Des salles de bain haut de gamme viennent parfaire l ensemble.',
      buildTitle: 'Une difference decisive : la construction',
      buildIntro: 'Le projet repose sur la technologie innovante EmisCo – un systeme constructif base sur le miscanthus et le bio-beton, qui redefine le confort de vie.',
      buildLead: 'L enveloppe du batiment regule naturellement l air et l humidite et assure toute l annee un climat interieur stable et agreable. En parallele, les emissions de CO₂ sont reduites et la qualite de l air interieur est sensiblement amelioree.',
      buildFeatures: [],
      buildOutro1: 'Le resultat est un climat de vie equilibre et haut de gamme, comparable a une regulation climatique naturelle et perceptible immediatement grace a un air frais et pur.',
      buildOutro2: '',
      buildOutro3: '',
      technologyTitle: 'Technologie & individualite',
      technologyText: 'Un systeme de ventilation moderne de Zehnder assure en complement un apport continu d air frais et un renouvellement d air optimal.',
      customizationTitle: 'Amenagement individuel',
      customizationText: 'Les finitions interieures restent volontairement ouvertes et permettent a l acquereur une personnalisation sur mesure, pour un lieu de vie convaincant a la fois sur le plan architectural et personnel.'
    },
    gallery: {
      title: 'Galerie'
    },
    plans: {
      apartment: 'Appartement',
      rooms: 'Pieces',
      area: 'Surf. hab.',
      terraceBalcony: 'Terrasses / Balcons',
      garden: 'Jardin',
      priceWithoutParking: 'Prix hors parking',
      status: 'Statut',
      download: 'Plan',
      downloadPlan: 'Telecharger',
      priceOnRequest: 'Prix sur demande',
      note: '2 places de parking par appartement dans le garage souterrain en sus',
      allPlans: 'Telecharger tous les plans',
      brochure: 'Telecharger la brochure',
      statusValues: {
        available: 'Disponible',
        reserved: 'Reserve',
        sold: 'Vendu'
      }
    },
    downloads: {
      title: 'Etat actuel de la construction',
      brochure: 'Brochure',
      plans: 'Plans',
      button: 'Telecharger'
    },
    contact: {
      title: 'Nous contacter',
      writeUs: 'Ecrivez-nous',
      lastName: 'Votre nom*',
      firstName: 'Votre prenom*',
      phone: 'Numero de telephone*',
      email: 'E-mail*',
      message: 'Message court*',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Votre message a ete envoye avec succes.',
      person: 'Interlocuteur',
      partners: 'Partenaires',
      partnerCompanyA: 'A.DT Planification & Gestion de Projets Sarl',
      partnerAxaLine1: 'Agence generale de Neuchatel | Rue St-Honore 2 |',
      partnerAxaLine2: 'Case postale 3256 | 2001 Neuchatel',
      recipientError: 'Veuillez d abord definir l adresse e-mail du destinataire dans CONTACT_RECIPIENT.',
      genericError: 'Une erreur est survenue lors de l envoi.',
      tooFastError: 'Veuillez patienter un instant puis renvoyer le formulaire.',
      spamError: 'Le message n a pas pu etre envoye. Merci de retirer les liens et de reessayer.',
      subject: 'Nouveau message du formulaire de contact',
      fieldLastName: 'Nom',
      fieldFirstName: 'Prenom',
      fieldPhone: 'Telephone',
      fieldEmail: 'E-mail',
      fieldMessage: 'Message'
    },
    footer: {
      legal: 'Images et plans non contractuels · www.atelier-vert-pomme.com'
    }
  }
}

function resolvePath(source, key) {
  return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), source)
}

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'de'

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) return storedLanguage

  const browserLanguage = (window.navigator.language || '').toLowerCase()
  return browserLanguage.startsWith('fr') ? 'fr' : 'de'
}

const language = ref(detectInitialLanguage())

function applyLanguage(lang) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang
}

applyLanguage(language.value)

function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) return
  language.value = lang
  applyLanguage(lang)
}

function t(key) {
  const value = resolvePath(messages[language.value], key)
  if (value !== undefined) return value

  const fallbackValue = resolvePath(messages.de, key)
  return fallbackValue !== undefined ? fallbackValue : key
}

export function useI18n() {
  return { language, setLanguage, t }
}
