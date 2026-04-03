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
      heading: 'LAGE',
      p1: 'Herzogenbuchsee zaehlt zu den gefragten Wohnlagen im Einzugsgebiet der Achse Bern-Zuerich und vereint Ruhe, Diskretion und hervorragende Erreichbarkeit auf ueberzeugende Weise.',
      p2: 'Die Kombination aus gewachsener Struktur, gepflegtem Umfeld und stabiler Nachfrage macht den Standort besonders attraktiv fuer anspruchsvolle Eigennutzer und Investoren.',
      p3: 'Die ausgezeichnete Verkehrsanbindung ermoeglicht schnelle Verbindungen in die wirtschaftlichen Zentren der Region, waehrend saemtliche Einrichtungen des taeglichen Bedarfs, Schulen und Dienstleistungen komfortabel erreichbar sind.',
      p4: 'Gleichzeitig bietet die Umgebung ein hohes Mass an Lebensqualitaet, gepraegt von offenen Landschaften, Weitblick und einem ruhigen, etablierten Wohnumfeld. Die niedrige Bebauungsdichte und die klare Struktur des Quartiers unterstreichen den exklusiven Charakter des Standorts.',
      p5: 'Herzogenbuchsee steht fuer nachhaltige Wertbestaendigkeit, hohe Wohnqualitaet und eine Lage, die langfristig ueberzeugt - sowohl als privater Lebensmittelpunkt als auch als solide Investition im Schweizer Immobilienmarkt.',
      mapCta: 'Auf Google Maps'
    },
    apartments: {
      title: 'WOHNUNGEN',
      heading: 'Wohnungen',
      p1: 'Die Wohnungen bieten grosszuegige Wohnraeume. Das helle Wohn- und Esszimmer mit Kueche oeffnet sich zu grossen Erkerfenstern mit direktem Zugang zur grosszuegigen Terrasse. Die Terrasse geht in einen privaten Garten ueber und schafft einen geschuetzten Aussenbereich mit hoher Privatsphaere. Im Erdgeschoss befindet sich zudem ein praktisches Gaeste-WC. Im Obergeschoss liegen drei Schlafzimmer, darunter eine Master-Suite mit eigener Dusche, ein grosszuegiger Flur sowie ein weiteres Badezimmer mit Badewanne.',
      brochure: 'Broschuere herunterladen',
      energyIntro: 'Zur Reduktion der CO2-Emissionen und im Sinne einer nachhaltigen Entwicklung kommen fuer den Betrieb der Wohnungen folgende Energiequellen zum Einsatz:',
      energy1: 'Zentrale Pelletheizung fuer Raumwaerme und Warmwasser.',
      energy2: 'Photovoltaikanlage als wichtiger Stromlieferant.',
      budgetsIntro: 'Jede Wohnung verfuegt ueber zwei Parkplaetze in der Tiefgarage mit direktem Zugang sowie ueber zusaetzlichen Stauraum im Untergeschoss.',
      budgetsIntro2: 'Die Innenausstattung kann nach den Wuenschen der Kaeuferschaft gestaltet werden.',
      budgetsTitle: 'Budgets:',
      budgetSanitary: 'Sanitaerbereiche:',
      budgetKitchen: 'Kueche:',
      budgetTiles: 'Plattenbelaege:',
      budgetParquet: 'Parkett:',
      ctaText: 'Damit Sie Ihr neues Wohnprojekt verwirklichen koennen, beraten wir Sie gerne persoenlich und stellen Ihnen alle weiteren Informationen zur Verfuegung.',
      ctaButton: 'Kontakt aufnehmen',
      exteriorTitle: 'AUSSENBEREICH',
      exteriorText: 'Im Zentrum der Anlage befinden sich ein Spielbereich mit Gruenflaeche und eine Fussgaengerzone, die Sicherheit fuer Erwachsene und Kinder bieten. Diese gruene Umgebung wirkt wie eine kleine Oase und ein Ort der Begegnung. Die Residence des Muses bietet ein ruhiges Wohnumfeld mit laendlichem Charakter und schafft ideale Bedingungen fuer Familien.'
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
      heading: 'SITUATION',
      p1: 'Herzogenbuchsee fait partie des adresses residentielles recherchees sur l axe Berne-Zurich et combine calme, discretion et excellente accessibilite.',
      p2: 'La combinaison d un tissu etabli, d un environnement soigne et d une demande stable rend cet emplacement particulierement attractif pour les proprietaires exigeants et les investisseurs.',
      p3: 'Les excellentes liaisons de transport permettent de rejoindre rapidement les centres economiques de la region, tandis que toutes les commodites du quotidien, les ecoles et les services sont facilement accessibles.',
      p4: 'Le secteur offre egalement une grande qualite de vie, avec des paysages ouverts, de belles perspectives et un environnement residentiel paisible. La faible densite de construction renforce le caractere exclusif du site.',
      p5: 'Herzogenbuchsee represente une valeur durable, une qualite de vie elevee et un emplacement convaincant sur le long terme, autant pour y vivre que pour investir sur le marche immobilier suisse.',
      mapCta: 'Voir sur Google Maps'
    },
    apartments: {
      title: 'APPARTEMENTS',
      heading: 'Appartements',
      p1: 'Les appartements offrent des espaces de vie genereux. Le sejour lumineux avec cuisine s ouvre sur de grandes baies et donne acces directement a une vaste terrasse. Celle-ci se prolonge par un jardin prive, creant un espace exterieur intime. Le rez-de-chaussee comprend egalement un WC visiteurs. A l etage, trois chambres sont prevues, dont une suite parentale avec douche privative, ainsi qu une salle de bain supplementaire avec baignoire.',
      brochure: 'Telecharger la brochure',
      energyIntro: 'Afin de reduire les emissions de CO2 et de respecter les principes du developpement durable, les appartements utilisent les sources d energie suivantes :',
      energy1: 'Chauffage central a pellets pour le chauffage et l eau chaude.',
      energy2: 'Panneaux photovoltaiques pour la production d electricite.',
      budgetsIntro: 'Chaque appartement dispose de deux places de parking dans le garage souterrain avec acces direct, ainsi que d espaces de rangement supplementaires au sous-sol.',
      budgetsIntro2: 'Les finitions interieures peuvent etre personnalisees selon les souhaits de l acquereur.',
      budgetsTitle: 'Budgets :',
      budgetSanitary: 'Sanitaires :',
      budgetKitchen: 'Cuisine :',
      budgetTiles: 'Carrelage :',
      budgetParquet: 'Parquet :',
      ctaText: 'Pour vous accompagner dans la realisation de votre nouveau projet de vie, nous vous conseillons volontiers et vous fournissons toutes les informations complementaires.',
      ctaButton: 'Nous contacter',
      exteriorTitle: 'EXTERIEUR',
      exteriorText: 'Au centre de l ensemble, un espace de jeux avec zone verte et une zone pietonne assurent securite et confort pour les adultes et les enfants. Cet environnement vegetal fait office d oasis et de lieu de rencontre. La Residence des Muses offre un cadre de vie paisible a caractere villageois, ideal pour les familles.'
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
