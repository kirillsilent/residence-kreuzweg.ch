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
      downloads: 'Downloads',
      contact: 'Kontakt',
      menu: 'Menue',
      languageSwitcher: 'Sprachumschalter'
    },
    project: {
      title: 'PROJEKT',
      heroTitle: 'EXKLUSIVE RESIDENZ',
      heroSubtitle: 'HERZOGENBUCHSEE',
      lead: 'Architektur, Raum und Lebensqualitaet auf hoechstem Niveau.',
      p1: 'Eine exklusive Residenz mit nur zwei grosszuegigen Wohneinheiten, konzipiert fuer hoechste Ansprueche an Privatsphaere, Raum und Lebensqualitaet.',
      p2: 'Die klare, zeitlose Architektur kombiniert hochwertige Materialien wie Holz und Beton mit grosszuegigen Fensterflaechen und schafft ein lichtdurchflutetes, elegantes Wohnambiente. Jede Einheit wurde so gestaltet, dass sie maximale Freiheit in der Nutzung und ein aussergewoehnliches Raumgefuehl bietet.',
      p3: 'Die Attikawohnung erstreckt sich ueber zwei Ebenen und vermittelt ein exklusives Penthouse-Gefuehl, waehrend die Gartenwohnung mit zusaetzlichem Untergeschoss vielseitige Moeglichkeiten fuer individuelle Wohnkonzepte eroeffnet.',
      p4: 'Ein seltenes Wohnangebot fuer anspruchsvolle Eigennutzer und Investoren, die Wert auf Qualitaet, Ruhe und nachhaltige Wertbestaendigkeit legen.',
      cta: 'Preise und Grundrisse'
    },
    situation: {
      title: 'LAGE',
      heading: 'Lage',
      p1: 'Die Residenz am Kreuzweg 2 liegt in Gals, im Herzen des Seelands, und profitiert von einem besonders gefragten Wohnumfeld, das Natur, Ruhe und hervorragende Erreichbarkeit miteinander verbindet.',
      p2: 'Nur wenige Minuten von Neuenburg, Biel und Murten entfernt, bietet sie ein ideales Gleichgewicht zwischen wohnlicher Gelassenheit und der Naehe zu den wichtigsten urbanen Zentren.',
      p3: 'Abseits von Stoerungen und dem hektischen Rhythmus der Staedte ueberzeugt Gals durch seine friedliche Atmosphaere und seine natuerliche, gut erhaltene Umgebung.',
      p4: 'Als Dorf mit landwirtschaftlichem Charakter ist Gals von weiten Feldern und offenen Landschaften umgeben und bietet eine seltene und authentische Lebensqualitaet.',
      p5: 'Geschaetzt fuer sein natuerliches Umfeld und seine hohe Wohnqualitaet bietet die Gemeinde ein ausgewogenes Lebensumfeld, in dem Komfort, Freiraum und Ruhe zusammenkommen und einen besonders privilegierten Wohnort schaffen.',
      mapCta: 'Auf Google Maps'
    },
    apartments: {
      title: 'WOHNUNGEN',
      heading: 'Die Wohnungen',
      p1: 'Die Wohnungen zeichnen sich durch grosszuegige Raumverhaeltnisse und eine funktionale Konzeption aus, die auf optimalen Wohnkomfort ausgelegt ist. Die weitlaeufigen und lichtdurchfluteten Wohnbereiche integrieren eine offene Kueche und oeffnen sich ueber grossflaechige Verglasungen direkt zu den Aussenraeumen, wodurch eine schoene Kontinuitaet zwischen Innen- und Aussenbereich entsteht. Jede Einheit profitiert von einer harmonischen Grundrissgestaltung, die natuerliches Licht und eine fliessende Raumzirkulation beguenstigt. Die Tagesbereiche schaffen eine einladende Atmosphaere, waehrend die Schlafbereiche Ruhe und Privatsphaere gewaehren. Die Wohnungen verfuegen ueber mehrere Schlafzimmer, darunter ein Elternschlafzimmer, sowie ueber moderne und funktionale Baeder, die den heutigen Anforderungen an Komfort gerecht werden.',
      brochure: 'Broschuere herunterladen',
      energyIntro: 'Um den heutigen Standards in Bezug auf Energieeffizienz und Nachhaltigkeit zu entsprechen, ist das Gebaeude mit einem zentralen Heizsystem ausgestattet, das die Waermeversorgung und die Bereitstellung von Warmwasser optimal sicherstellt.',
      energyDetails: 'Die Innenausstattung bleibt der Wahl der Kaeuferschaft ueberlassen und ermoeglicht eine vollstaendige Personalisierung der Wohnung entsprechend den individuellen Vorlieben und Beduerfnissen.',
      ctaText: 'Damit Sie Ihr neues Wohnprojekt verwirklichen koennen, beraten wir Sie gerne persoenlich und stellen Ihnen alle weiteren Informationen zur Verfuegung.',
      ctaButton: 'Kontakt aufnehmen',
      exteriorTitle: 'AUSSENBEREICHE',
      exteriorText: 'Die Residenz Kreuzweg fuegt sich harmonisch in ihre natuerliche Umgebung ein und bietet sorgfaeltig gestaltete Aussenbereiche mit hoher Aufenthaltsqualitaet. Die Gestaltung der Aussenanlagen stellt Ruhe, Lebensqualitaet und eine respektvolle Einbindung in die umliegende Landschaft in den Vordergrund.',
      exteriorText2: 'Die Gruenflaechen vermitteln ein echtes Gefuehl von Offenheit und Gelassenheit und schaffen ein Umfeld, das Entspannung und taegliches Wohlbefinden foerdert.',
      exteriorText3: 'Die Residenz Kreuzweg zeichnet sich durch eine ruhige und ausgewogene Wohnatmosphaere aus und ist ideal fuer alle, die ein harmonisches Lebensumfeld zwischen Natur und modernem Komfort suchen.'
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
      title: 'Downloads',
      brochure: 'Broschuere',
      plans: 'Grundrisse',
      button: 'Herunterladen'
    },
    contact: {
      title: 'So erreichen Sie uns',
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
      downloads: 'Telechargements',
      contact: 'Contact',
      menu: 'Menu',
      languageSwitcher: 'Selecteur de langue'
    },
    project: {
      title: 'PROJET',
      heroTitle: 'RESIDENCE EXCLUSIVE',
      heroSubtitle: 'HERZOGENBUCHSEE',
      lead: 'Architecture, espace et qualite de vie au plus haut niveau.',
      p1: 'Une residence exclusive composee de deux logements seulement, concue pour les plus hautes exigences en matiere d intimite, d espace et de qualite de vie.',
      p2: 'L architecture claire et intemporelle associe des materiaux de qualite tels que le bois et le beton a de larges surfaces vitrees, creant un cadre de vie lumineux et elegant. Chaque unite est pensee pour offrir une grande liberte d amenagement et une sensation d espace remarquable.',
      p3: 'L appartement en attique se deploie sur deux niveaux et procure une veritable sensation de penthouse, tandis que l appartement avec jardin et sous-sol offre de nombreuses possibilites d amenagement.',
      p4: 'Une offre rare pour les proprietaires exigeants et les investisseurs qui recherchent qualite, tranquillite et valeur durable.',
      cta: 'Plans et prix'
    },
    situation: {
      title: 'SITUATION',
      heading: 'Situation',
      p1: 'Situee a Gals, au coeur de la region du Seeland, la residence du Kreuzweg 2 beneficie d un cadre de vie particulierement recherche, alliant nature, tranquillite et excellente accessibilite.',
      p2: 'A seulement quelques minutes de Neuchatel, Bienne et Morat, elle offre un equilibre ideal entre serenite residentielle et proximite des principaux centres urbains.',
      p3: 'A l ecart des nuisances et du rythme soutenu des villes, Gals seduit par son atmosphere paisible et son environnement naturel preserve.',
      p4: 'Village a caractere agricole, Gals est entoure de vastes etendues de champs et de paysages ouverts, offrant une qualite de vie rare et authentique.',
      p5: 'Appreciee pour son cadre naturel et sa douceur de vivre, la commune propose un environnement equilibre, ou confort, espace et tranquillite se conjuguent pour creer un lieu de vie privilegie.',
      mapCta: 'Voir sur Google Maps'
    },
    apartments: {
      title: 'APPARTEMENTS',
      heading: 'Les appartements',
      p1: 'Les appartements se distinguent par des volumes genereux et une conception fonctionnelle, pensee pour un confort de vie optimal. Les espaces de vie, spacieux et lumineux, integrent une cuisine ouverte et s ouvrent sur de larges baies vitrees, offrant un acces direct aux espaces exterieurs et une belle continuite entre interieur et exterieur. Chaque logement beneficie d un amenagement harmonieux, favorisant la lumiere naturelle et une circulation fluide des espaces. Les zones de jour sont concues pour creer une atmosphere conviviale, tandis que les espaces de nuit garantissent calme et intimite. Les appartements disposent de plusieurs chambres, dont une chambre parentale, ainsi que de salles de bain modernes et fonctionnelles, adaptees aux exigences actuelles en matiere de confort.',
      brochure: 'Telecharger la brochure',
      energyIntro: 'Afin de repondre aux standards actuels en matiere d efficacite energetique et de durabilite, le batiment est equipe d un systeme de chauffage centralise assurant la production de chaleur et d eau chaude sanitaire de maniere optimale.',
      energyDetails: 'Les finitions interieures sont laissees au choix de l acquereur, permettant une personnalisation complete du logement selon les preferences et les besoins de chacun.',
      ctaText: 'Pour vous accompagner dans la realisation de votre nouveau projet de vie, nous vous conseillons volontiers et vous fournissons toutes les informations complementaires.',
      ctaButton: 'Nous contacter',
      exteriorTitle: 'EXTERIEURS',
      exteriorText: 'La Residence Kreuzweg s integre harmonieusement dans son environnement naturel, offrant des espaces exterieurs soignes et agreables a vivre. Les amenagements exterieurs privilegient la tranquillite, la qualite de vie et une integration respectueuse du paysage environnant.',
      exteriorText2: 'Les espaces verts apportent une veritable sensation d ouverture et de serenite, creant un cadre propice a la detente et au bien-etre au quotidien.',
      exteriorText3: 'La Residence Kreuzweg se distingue par une atmosphere residentielle calme et equilibree, ideale pour celles et ceux recherchant un cadre de vie harmonieux, entre nature et confort moderne.'
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
      title: 'Telechargements',
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
