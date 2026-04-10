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
      p1: 'Architektur, Raum und Lebensqualitaet auf hoechstem Niveau.',
      p2: 'Eine exklusive Residenz mit nur zwei grosszuegigen Wohneinheiten, konzipiert fuer hoechste Ansprueche an Privatsphaere, Raum und Lebensqualitaet. Die klare, zeitlose Architektur kombiniert hochwertige Materialien wie Holz und Beton mit grosszuegigen Fensterflaechen und schafft ein lichtdurchflutetes, elegantes Wohnambiente.',
      p3: 'Besonders hervorzuheben ist die nachhaltige Bauweise: Das Gebaeude wurde unter Einsatz der innovativen EmisCo-Technologie realisiert, einem eigenen Baustoffsystem auf Basis von Miscanthus und Bio-Beton. Diese zukunftsorientierte Konstruktion ermoeglicht eine deutliche Reduktion des CO2-Fussabdrucks, verbindet oekologische Verantwortung mit hoher baulicher Qualitaet und sorgt gleichzeitig fuer ein angenehmes, gesundes Raumklima. Jede Einheit wurde so gestaltet, dass sie maximale Freiheit in der Nutzung und ein aussergewoehnliches Raumgefuehl bietet.',
      p4: 'Die Attikawohnung erstreckt sich ueber zwei Ebenen und vermittelt ein exklusives Penthouse-Gefuehl, waehrend die Gartenwohnung mit zusaetzlichem Untergeschoss vielseitige Moeglichkeiten fuer individuelle Wohnkonzepte eroeffnet. Ein seltenes Wohnangebot fuer anspruchsvolle Eigennutzer und Investoren, die Wert auf Qualitaet, Ruhe, Nachhaltigkeit und langfristige Wertbestaendigkeit legen.',
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
      intro1: 'Die Wohnungen ueberzeugen durch grosszuegige Raumverhaeltnisse, klare architektonische Linien und eine Konzeption, die konsequent auf hoechsten Wohnkomfort ausgerichtet ist. Die lichtdurchfluteten Wohn- und Essbereiche mit offener Kueche oeffnen sich ueber grossflaechige Verglasungen direkt zu den Aussenraeumen und schaffen eine fliessende Verbindung zwischen Innen- und Aussenbereich.',
      intro2: 'Die durchdachten Grundrisse ermoeglichen maximale Flexibilitaet in der Nutzung und vermitteln ein aussergewoehnliches Raumgefuehl. Waehrend die Wohnbereiche Offenheit und Weite ausstrahlen, bieten die Schlafbereiche gezielte Rueckzugsorte mit einem hohen Mass an Privatsphaere. Hochwertige Baeder runden das Gesamtbild ab und erfuellen die Ansprueche an modernes, komfortables Wohnen.',
      buildTitle: 'Ein entscheidender Unterschied: die Bauweise',
      buildIntro: 'Im Gegensatz zu konventionellen Neubauten basiert dieses Projekt auf der innovativen EmisCo-Technologie, einem eigenen Baustoffsystem aus Miscanthus und Bio-Beton.',
      buildLead: 'Diese Bauweise definiert den Wohnkomfort neu.',
      buildFeatures: [
        'Natuerliche Regulierung von Luft und Feuchtigkeit',
        'Ganzjaehrig stabiles und angenehmes Raumklima',
        'Effiziente Bindung und Reduktion von CO2',
        'Deutlich verbesserte Luftqualitaet im Innenraum'
      ],
      buildOutro1: 'Im Ergebnis entsteht ein Innenklima, das sich klar von herkoemmlichen Bauweisen abhebt: konstant, ausgeglichen und spuerbar hochwertig.',
      buildOutro2: 'Die physikalischen Eigenschaften der Materialien wirken vergleichbar mit einer hochwertigen Klimaanlage, jedoch vollstaendig natuerlich, energieeffizient und ohne kuenstliche Steuerung.',
      buildOutro3: 'Das Resultat ist ein Wohngefuehl, das man unmittelbar wahrnimmt: frische, reine Luft, aehnlich der Qualitaet eines natuerlichen Umfelds.',
      technologyTitle: 'Technologie trifft Komfort',
      technologyText: 'Ergaenzt wird dieses Konzept durch ein modernes Lueftungssystem von Zehnder, das kontinuierlich Frischluft zufuehrt und den Luftaustausch optimal gewaehrleistet. Die Kombination aus intelligenter Bauweise und moderner Technik schafft ein Wohnklima auf einem Niveau, das in dieser Form im klassischen Wohnbau selten erreicht wird.',
      customizationTitle: 'Individuelle Gestaltung',
      customizationText: 'Die Innenausstattung bleibt bewusst offen und bietet der Kaeuferschaft maximale Freiheit in der Gestaltung. So entsteht ein Zuhause, das nicht nur architektonisch ueberzeugt, sondern auch exakt den persoenlichen Vorstellungen entspricht.'
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
      p2: 'Une residence exclusive composee de seulement deux logements genereux, concue pour repondre aux plus hautes exigences en matiere d intimite, d espace et de qualite de vie. L architecture claire et intemporelle associe des materiaux nobles comme le bois et le beton a de vastes surfaces vitrees afin de creer une atmosphere lumineuse et elegante.',
      p3: 'La construction durable constitue un atout majeur du projet : le batiment a ete realise avec la technologie innovante EmisCo, un systeme constructif proprietaire base sur le miscanthus et le bio-beton. Cette approche tournee vers l avenir permet de reduire sensiblement l empreinte carbone, d allier responsabilite ecologique et haute qualite constructive, tout en garantissant un climat interieur sain et agreable. Chaque unite a ete pensee pour offrir une grande liberte d usage et une sensation d espace exceptionnelle.',
      p4: 'L appartement en attique se deploie sur deux niveaux et procure une veritable sensation de penthouse, tandis que l appartement avec jardin et sous-sol supplementaire ouvre de nombreuses possibilites pour des concepts de vie personnalises. Une offre residentielle rare pour des proprietaires occupants et des investisseurs exigeants, attaches a la qualite, au calme, a la durabilite et a une valorisation patrimoniale sur le long terme.',
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
      intro1: 'Les appartements seduisent par leurs volumes genereux, leurs lignes architecturales epurees et une conception resolument orientee vers un confort d habitation de tres haut niveau. Les espaces de vie et de repas, baignés de lumiere et prolonges par une cuisine ouverte, s ouvrent largement sur les exterieurs grace a de vastes surfaces vitrees et instaurent une transition fluide entre interieur et exterieur.',
      intro2: 'Les plans soigneusement etudies offrent une grande flexibilite d usage et une sensation d espace remarquable. Alors que les espaces de vie expriment ouverture et amplitude, les zones nuit proposent de veritables retraits avec un haut niveau d intimite. Des salles de bain haut de gamme viennent completer l ensemble et repondent pleinement aux attentes d un habitat moderne et confortable.',
      buildTitle: 'Une difference decisive : la construction',
      buildIntro: 'Contrairement aux constructions neuves conventionnelles, ce projet repose sur la technologie innovante EmisCo, un systeme constructif proprietaire compose de miscanthus et de bio-beton.',
      buildLead: 'Cette methode de construction redefinit le confort de vie.',
      buildFeatures: [
        'Regulation naturelle de l air et de l humidite',
        'Climat interieur stable et agreable toute l annee',
        'Fixation et reduction efficaces du CO2',
        'Qualite de l air interieur nettement amelioree'
      ],
      buildOutro1: 'Le resultat est un climat interieur qui se distingue clairement des constructions traditionnelles : constant, equilibre et perceptiblement plus qualitatif.',
      buildOutro2: 'Les proprietes physiques des materiaux agissent de maniere comparable a une climatisation haut de gamme, mais de facon entierement naturelle, energiquement efficace et sans pilotage artificiel.',
      buildOutro3: 'Il en resulte une sensation d habitat que l on percoit immediatement : un air frais et pur, proche de la qualite offerte par un environnement naturel.',
      technologyTitle: 'La technologie au service du confort',
      technologyText: 'Ce concept est complete par un systeme de ventilation moderne signe Zehnder, qui apporte en continu de l air frais et assure un renouvellement optimal de l air. L association d une construction intelligente et d une technique contemporaine cree un climat interieur d un niveau rarement atteint dans l habitat classique.',
      customizationTitle: 'Amenagement sur mesure',
      customizationText: 'Les finitions interieures sont volontairement laissees ouvertes et offrent a l acquereur une liberte maximale dans l amenagement. Il en resulte un lieu de vie convaincant sur le plan architectural et parfaitement adapte aux attentes personnelles.'
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
