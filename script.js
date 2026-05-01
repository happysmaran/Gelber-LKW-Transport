let currentLang = localStorage.getItem('preferredLanguage') || 'de';
let trackingMap = null;
let currentMarker = null;

const translations = {
    de: {
        // Navigation & General
        "nav.home": "Home",
        "nav.services": "Dienstleistungen",
        "nav.fleet": "Flotte",
        "nav.about": "Über uns",
        "nav.careers": "Karriere",
        "nav.contact": "Kontakt",
        "nav.track": "Sendung verfolgen",
        "footer.allrights": "Alle Rechte vorbehalten",
        
        // Home Page
        "hero.badge": "LUXEMBURG • EU • SEIT 2010",
        "hero.title": "Ihr zuverlässiger Partner für <span class='highlight'>professionelle Logistik</span>",
        "hero.subtitle": "Gelber LKW Transport - Schnell. Sicher. Nachhaltig.<br>Von Luxemburg in die ganze Welt.",
        "hero.cta1": "Dienstleistungen entdecken",
        "hero.cta2": "Sendung verfolgen",
        "hero.stat1": "Fahrzeuge",
        "hero.stat2": "Support",
        "hero.stat3": "Länder",
        "services.title": "Unsere Dienstleistungen",
        "services.subtitle": "Maßgeschneiderte Logistiklösungen für jeden Bedarf",
        "services.road": "Straßentransport",
        "services.road_desc": "Nationaler und internationaler Transport mit unserer modernen LKW-Flotte.",
        "services.sea": "Seefracht & Multimodal",
        "services.sea_desc": "Kombinierte Transportlösungen über Straße, Schiene und Meer mit DHL.",
        "services.warehouse": "Lagerung & Fulfillment",
        "services.warehouse_desc": "Moderne Lagerflächen in Luxemburg mit Temperaturkontrolle.",
        "services.global": "Internationale Logistik",
        "services.global_desc": "Von Luxemburg nach Europa und weltweit - mit Zollabwicklung.",
        "about.title": "Über Gelber LKW Transport",
        "about.p1": "Als luxemburgisches Familienunternehmen mit über 15 Jahren Erfahrung in der Logistikbranche stehen wir für Zuverlässigkeit, Präzision und Nachhaltigkeit.",
        "about.value1": "Nachhaltigkeit",
        "about.value2": "Sicherheit",
        "about.value3": "Pünktlichkeit",

        // Fleet Page
        "fleet.title": "Unsere <span class='highlight'>Flotte</span>",
        "fleet.subtitle": "Moderne, umweltfreundliche Fahrzeuge für höchste Zuverlässigkeit",
        "fleet.stat_vehicles": "Fahrzeuge",
        "fleet.stat_standard": "Emissionsstandard",
        "fleet.stat_power": "Max. Motorleistung",
        "fleet.stat_length": "Max. Zuglänge",
        "fleet.stat_year": "Baujahr",
        "fleet.scania_sub": "Fernverkehr • Klasse CE",
        "fleet.scania_desc": "Unser Arbeitstier für den internationalen Fernverkehr. Die Scania S-Serie vereint maximale Fahrerzufriedenheit mit höchster Effizienz. Ausgestattet mit dem neuesten Sicherheitspaket und Telematik.",
        "fleet.spec_engine": "Motor",
        "fleet.spec_emission": "Norm",
        "fleet.spec_payload": "Zuladung",
        "fleet.spec_cabin": "Kabine",
        "fleet.badge_longhaul": "Langstrecke",
        "fleet.longhaul_title": "Langstrecken-Kombinationen",
        "fleet.longhaul_sub": "Hochvolumen • Übermaß",
        "fleet.longhaul_desc": "Für Ladungen, die mehr Platz brauchen. Unsere Langstrecken-Kombinationen sind auf maximale Ladekapazität ausgelegt — ideal für Übermaßtransporte, Coils und schwere Güter.",
        "fleet.spec_length": "Länge",
        "fleet.spec_volume": "Volumen",
        "fleet.badge_regional": "Regional",
        "fleet.regional_title": "Regional & Express",
        "fleet.regional_sub": "Benelux • Deutschland • Frankreich",
        "fleet.regional_desc": "Flexibel, wendig und immer pünktlich. Unsere Regionalflotte ist speziell für den schnellen Einsatz im Benelux-Raum und Deutschland konzipiert — mit täglichen Touren ab Windhof.",
        "fleet.spec_radius": "Aktionsradius",
        "fleet.spec_turnaround": "Umlaufzeit",
        "fleet.standards_title": "Unsere Flottenstandards",
        "fleet.standards_sub": "Jedes Fahrzeug in unserer Flotte erfüllt die höchsten Sicherheits- und Umweltstandards",
        "fleet.std1_title": "Sicherheitssysteme",
        "fleet.std1_desc": "Alle Fahrzeuge mit ABS, ESP, Spurhalteassistent, Notbremsassistent und Abstandsregeltempomat.",
        "fleet.std2_title": "GPS-Telematik",
        "fleet.std2_desc": "Echtzeit-Tracking aller Fahrzeuge. Digitaler Tachograph und Fernwartung per Satellit.",
        "fleet.std3_title": "Euro 6 Norm",
        "fleet.std3_desc": "Gesamte Flotte erfüllt Euro 6 Standard — deutlich unter den Grenzwerten für NOx und PM.",
        "fleet.std4_title": "Regelmäßige Wartung",
        "fleet.std4_desc": "Jedes Fahrzeug durchläuft alle 30.000 km eine vollständige Inspektion in unserem Werkstatt in Windhof.",

        // Careers Page
        "careers.title": "Karriere bei <span class='highlight'>Gelber LKW</span>",
        "careers.subtitle": "Werden Sie Teil unseres wachsenden Teams",
        "careers.why_title": "Warum Gelber LKW?",
        "careers.why_sub": "Was wir unseren Mitarbeitenden bieten",
        "careers.ben1_title": "Attraktive Vergütung",
        "careers.ben1_desc": "Überdurchschnittliche Gehälter, Prämien und Spesenpauschalen.",
        "careers.ben2_title": "Weiterbildung",
        "careers.ben2_desc": "Regelmäßige Schulungen, CPC-Fortbildungen und Karrierepfade.",
        "careers.ben3_title": "Moderne Fahrzeuge",
        "careers.ben3_desc": "Sie fahren stets aktuelle Scania-Fahrzeuge mit Top-Ausstattung.",
        "careers.ben4_title": "Heimnähe",
        "careers.ben4_desc": "Regional- und Fernverkehrsstellen mit geplanten Heimkehrterminen.",
        "careers.ben5_title": "Betriebliche Gesundheit",
        "careers.ben5_desc": "Krankenversicherung, betriebliche Altersvorsorge und Sportangebote.",
        "careers.ben6_title": "Teamkultur",
        "careers.ben6_desc": "Flache Hierarchien, offene Kommunikation und jährliche Teamevents.",
        "careers.jobs_title": "Offene Stellen",
        "careers.job1_title": "Fernfahrer (m/w/d) CE",
        "careers.job1_desc": "Einsatz im internationalen Fernverkehr mit modernen Scania-Fahrzeugen. Sie fahren europäische Relationen ab dem Standort Windhof und kehren regelmäßig heim.",
        "careers.job2_title": "Disponent (m/w/d)",
        "careers.job2_desc": "Planung und Steuerung unserer Flotte am Standort Windhof. Sie koordinieren die Touren, sind Ansprechpartner für Fahrer und Kunden.",
        "careers.job3_title": "Lagerlogistiker (m/w/d)",
        "careers.job3_desc": "Wareneingang, -ausgang, Kommissionierung und Inventur in unserem modernen Lagerzentrum.",
        "careers.job4_title": "Sachbearbeiter Zoll (m/w/d)",
        "careers.job4_desc": "Abwicklung von Import- und Exportzollformalitäten, Erstellung von Frachtdokumenten und Beratung.",
        "careers.j1_r1": "Führerschein Klasse CE",
        "careers.j1_r2": "Fahrerkarte & gültige CPC",
        "careers.j1_r3": "Berufserfahrung im Fernverkehr",
        "careers.j1_r4": "Zuverlässigkeit und Teamgeist",
        "careers.j2_r1": "Erfahrung in Transportdisposition",
        "careers.j2_r2": "Kenntnisse in TMS-Systemen von Vorteil",
        "careers.j2_r3": "Deutsch & Englisch fließend",
        "careers.j2_r4": "Belastbarkeit und Organisationstalent",
        "careers.j3_r1": "Erfahrung in Lagerhaltung",
        "careers.j3_r2": "Staplerschein von Vorteil",
        "careers.j3_r3": "Kenntnisse in Warenwirtschaftssystemen",
        "careers.j3_r4": "Teamfähigkeit und Sorgfalt",
        "careers.j4_r1": "Ausbildung im Speditionswesen",
        "careers.j4_r2": "Kenntnisse EU-Zollrecht",
        "careers.j4_r3": "ATLAS-Kenntnisse von Vorteil",
        "careers.j4_r4": "Englisch und Deutsch fließend",
        "careers.apply": "Jetzt bewerben",
        "careers.form_title": "Bewerbung einreichen",
        "careers.form_sub": "Füllen Sie das Formular aus und wir melden uns innerhalb von 3 Werktagen bei Ihnen.",
        "careers.f_firstname": "Vorname",
        "careers.f_lastname": "Nachname",
        "careers.f_email": "E-Mail",
        "careers.f_phone": "Telefon",
        "careers.f_position": "Stelle",
        "careers.f_message": "Motivationsschreiben / Nachricht",

        // Contact Page
        "contact.title": "Kontaktieren Sie <span class='highlight'>uns</span>",
        "contact.hero_sub": "Wir sind für Sie da — persönlich, schnell und kompetent.",
        "contact.urgent_title": "Dringende Anfrage?",
        "contact.urgent_sub": "Für sofortige Hilfe rufen Sie uns direkt an oder schreiben Sie uns eine E-Mail.",
        "contact.info_title": "Kontaktinformationen",
        "contact.info_sub": "Unser Team steht Ihnen werktags und rund um die Uhr per Notfallnummer zur Verfügung.",
        "contact.address": "Hauptsitz",
        "contact.phone": "Telefon",
        "contact.emergency": "Notfall 24/7",
        "contact.email": "E-Mail",
        "contact.quotes": "Angebote",
        "contact.hours_title": "ÖFFNUNGSZEITEN",
        "contact.mon_fri": "Montag - Freitag",
        "contact.saturday": "Samstag",
        "contact.sunday": "Sonntag",
        "contact.closed": "Geschlossen",
        "contact.emergency_label": "Notfall",
        "contact.form_title": "Schreiben Sie uns",
        "contact.form_sub": "Füllen Sie das Formular aus. Wir antworten innerhalb eines Werktages.",
        "contact.subject": "Betreff",
        "contact.subj1": "Allgemeine Anfrage",
        "contact.subj2": "Angebot anfordern",
        "contact.subj3": "Sendungsverfolgung",
        "contact.subj4": "Reklamation",
        "contact.subj5": "Karriere / Bewerbung",
        "contact.subj6": "Partnerschaft",
        "contact.message": "Nachricht",
        "contact.submit": "Senden",
        "contact.name": "Name",
        "contact.email_ph": "E-Mail Adresse",

        // Tracking & Modals
        "tracking.modal_title": "Sendung verfolgen",
        "tracking.btn": "Verfolgen",
        "tracking.status": "Status: Auf dem Weg (Nähe {loc})"
    },
    en: {
        // Navigation & General
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.fleet": "Fleet",
        "nav.about": "About Us",
        "nav.careers": "Careers",
        "nav.contact": "Contact",
        "nav.track": "Track Shipment",
        "footer.allrights": "All rights reserved",
        
        // Home Page
        "hero.badge": "LUXEMBOURG • EU • SINCE 2010",
        "hero.title": "Your Reliable Partner for <span class='highlight'>Professional Logistics</span>",
        "hero.subtitle": "Gelber LKW Transport - Fast. Secure. Sustainable.<br>From Luxembourg to the world.",
        "hero.cta1": "Explore Services",
        "hero.cta2": "Track Shipment",
        "hero.stat1": "Vehicles",
        "hero.stat2": "Support",
        "hero.stat3": "Countries",
        "services.title": "Our Services",
        "services.subtitle": "Tailored logistics solutions for every need",
        "services.road": "Road Freight",
        "services.road_desc": "National and international transport with our modern truck fleet.",
        "services.sea": "Sea Freight & Multimodal",
        "services.sea_desc": "Combined transport solutions via road, rail, and sea with DHL.",
        "services.warehouse": "Warehousing & Fulfillment",
        "services.warehouse_desc": "Modern storage spaces in Luxembourg with temperature control.",
        "services.global": "Global Logistics",
        "services.global_desc": "From Luxembourg to Europe and worldwide - including customs clearance.",
        "about.title": "About Gelber LKW Transport",
        "about.p1": "As a Luxembourg-based family business with over 15 years of experience in the logistics industry, we stand for reliability, precision, and sustainability.",
        "about.value1": "Sustainability",
        "about.value2": "Safety",
        "about.value3": "Punctuality",

        // Fleet Page
        "fleet.title": "Our <span class='highlight'>Fleet</span>",
        "fleet.subtitle": "Modern, eco-friendly vehicles for maximum reliability",
        "fleet.stat_vehicles": "Vehicles",
        "fleet.stat_standard": "Emission Standard",
        "fleet.stat_power": "Max. Engine Power",
        "fleet.stat_length": "Max. Length",
        "fleet.stat_year": "Build Year",
        "fleet.scania_sub": "Long Haul • Class CE",
        "fleet.scania_desc": "Our workhorse for international long-haul. The Scania S-Series combines maximum driver satisfaction with highest efficiency. Equipped with the latest safety packages.",
        "fleet.spec_engine": "Engine",
        "fleet.spec_emission": "Standard",
        "fleet.spec_payload": "Payload",
        "fleet.spec_cabin": "Cabin",
        "fleet.badge_longhaul": "Long Haul",
        "fleet.longhaul_title": "Long-Haul Combinations",
        "fleet.longhaul_sub": "High Volume • Oversized",
        "fleet.longhaul_desc": "For loads that require more space. Our long-haul combinations are designed for maximum cargo capacity — ideal for oversized transport, coils, and heavy goods.",
        "fleet.spec_length": "Length",
        "fleet.spec_volume": "Volume",
        "fleet.badge_regional": "Regional",
        "fleet.regional_title": "Regional & Express",
        "fleet.regional_sub": "Benelux • Germany • France",
        "fleet.regional_desc": "Flexible, agile, and always on time. Our regional fleet is specially designed for quick deployments across Benelux and Germany.",
        "fleet.spec_radius": "Action Radius",
        "fleet.spec_turnaround": "Turnaround Time",
        "fleet.standards_title": "Our Fleet Standards",
        "fleet.standards_sub": "Every vehicle in our fleet meets the highest safety and environmental standards",
        "fleet.std1_title": "Safety Systems",
        "fleet.std1_desc": "All vehicles feature ABS, ESP, lane assist, emergency braking, and adaptive cruise control.",
        "fleet.std2_title": "GPS Telematics",
        "fleet.std2_desc": "Real-time tracking of all vehicles. Digital tachograph and satellite remote maintenance.",
        "fleet.std3_title": "Euro 6 Standard",
        "fleet.std3_desc": "Entire fleet meets Euro 6 standard — significantly below NOx and PM limits.",
        "fleet.std4_title": "Regular Maintenance",
        "fleet.std4_desc": "Every vehicle undergoes a full inspection every 30,000 km in our Windhof workshop.",

        // Careers Page
        "careers.title": "Careers at <span class='highlight'>Gelber LKW</span>",
        "careers.subtitle": "Join our growing international team",
        "careers.why_title": "Why Gelber LKW?",
        "careers.why_sub": "What we offer our employees",
        "careers.ben1_title": "Attractive Compensation",
        "careers.ben1_desc": "Above-average salaries, bonuses, and expense allowances.",
        "careers.ben2_title": "Further Education",
        "careers.ben2_desc": "Regular training, CPC advanced training, and career paths.",
        "careers.ben3_title": "Modern Vehicles",
        "careers.ben3_desc": "You will always drive modern Scania vehicles with top equipment.",
        "careers.ben4_title": "Close to Home",
        "careers.ben4_desc": "Regional and long-distance roles with scheduled return dates.",
        "careers.ben5_title": "Corporate Health",
        "careers.ben5_desc": "Health insurance, company pension schemes, and sports offers.",
        "careers.ben6_title": "Team Culture",
        "careers.ben6_desc": "Flat hierarchies, open communication, and annual team events.",
        "careers.jobs_title": "Open Positions",
        "careers.job1_title": "Truck Driver CE",
        "careers.job1_desc": "Deployment in international long-distance transport with modern Scania vehicles. You drive European routes from Windhof and return home regularly.",
        "careers.job2_title": "Dispatcher",
        "careers.job2_desc": "Planning and management of our fleet at the Windhof location. You coordinate tours and act as a contact for drivers and clients.",
        "careers.job3_title": "Warehouse Logistician",
        "careers.job3_desc": "Goods receipt, dispatch, picking, and inventory in our modern warehouse center.",
        "careers.job4_title": "Customs Clerk",
        "careers.job4_desc": "Processing of import and export customs formalities, freight document creation.",
        "careers.j1_r1": "Driver's License Class CE",
        "careers.j1_r2": "Driver card & valid CPC",
        "careers.j1_r3": "Experience in long-haul transport",
        "careers.j1_r4": "Reliability and team spirit",
        "careers.j2_r1": "Experience in transport dispatch",
        "careers.j2_r2": "TMS system knowledge is an advantage",
        "careers.j2_r3": "Fluent in German & English",
        "careers.j2_r4": "Resilience and organizational skills",
        "careers.j3_r1": "Experience in warehousing",
        "careers.j3_r2": "Forklift license is an advantage",
        "careers.j3_r3": "Knowledge of inventory systems",
        "careers.j3_r4": "Teamwork and diligence",
        "careers.j4_r1": "Training in forwarding logistics",
        "careers.j4_r2": "Knowledge of EU customs law",
        "careers.j4_r3": "ATLAS knowledge is an advantage",
        "careers.j4_r4": "Fluent in English and German",
        "careers.apply": "Apply Now",
        "careers.form_title": "Submit Application",
        "careers.form_sub": "Fill out the form and we will contact you within 3 business days.",
        "careers.f_firstname": "First Name",
        "careers.f_lastname": "Last Name",
        "careers.f_email": "Email",
        "careers.f_phone": "Phone",
        "careers.f_position": "Position",
        "careers.f_message": "Cover Letter / Message",

        // Contact Page
        "contact.title": "Contact <span class='highlight'>Us</span>",
        "contact.hero_sub": "We are here for you — personally, quickly, and competently.",
        "contact.urgent_title": "Urgent Request?",
        "contact.urgent_sub": "For immediate assistance, call us directly or send an email.",
        "contact.info_title": "Contact Information",
        "contact.info_sub": "Our team is available on weekdays and 24/7 via our emergency number.",
        "contact.address": "Headquarters",
        "contact.phone": "Phone",
        "contact.emergency": "Emergency 24/7",
        "contact.email": "Email",
        "contact.quotes": "Quotes",
        "contact.hours_title": "OPENING HOURS",
        "contact.mon_fri": "Monday - Friday",
        "contact.saturday": "Saturday",
        "contact.sunday": "Sunday",
        "contact.closed": "Closed",
        "contact.emergency_label": "Emergency",
        "contact.form_title": "Write to Us",
        "contact.form_sub": "Fill out the form. We will reply within one business day.",
        "contact.subject": "Subject",
        "contact.subj1": "General Inquiry",
        "contact.subj2": "Request a Quote",
        "contact.subj3": "Shipment Tracking",
        "contact.subj4": "Complaint",
        "contact.subj5": "Careers / Application",
        "contact.subj6": "Partnership",
        "contact.message": "Message",
        "contact.submit": "Send",
        "contact.name": "Name",
        "contact.email_ph": "Email Address",

        // Tracking & Modals
        "tracking.modal_title": "Track Shipment",
        "tracking.btn": "Track",
        "tracking.status": "Status: In Transit (Near {loc})"
    },
    fr: {
        // Navigation & General
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.fleet": "Flotte",
        "nav.about": "À Propos",
        "nav.careers": "Carrières",
        "nav.contact": "Contact",
        "nav.track": "Suivre l'envoi",
        "footer.allrights": "Tous droits réservés",
        
        // Home Page
        "hero.badge": "LUXEMBOURG • UE • DEPUIS 2010",
        "hero.title": "Votre partenaire fiable pour une <span class='highlight'>logistique professionnelle</span>",
        "hero.subtitle": "Gelber LKW Transport - Rapide. Sûr. Durable.<br>Du Luxembourg vers le monde entier.",
        "hero.cta1": "Découvrir les services",
        "hero.cta2": "Suivre l'envoi",
        "hero.stat1": "Véhicules",
        "hero.stat2": "Assistance",
        "hero.stat3": "Pays",
        "services.title": "Nos Services",
        "services.subtitle": "Des solutions logistiques sur mesure pour chaque besoin",
        "services.road": "Fret Routier",
        "services.road_desc": "Transport national et international avec notre flotte moderne.",
        "services.sea": "Fret Maritime & Multimodal",
        "services.sea_desc": "Solutions de transport combinées par route, rail et mer avec DHL.",
        "services.warehouse": "Entreposage & Logistique",
        "services.warehouse_desc": "Espaces de stockage modernes au Luxembourg sous température dirigée.",
        "services.global": "Logistique Internationale",
        "services.global_desc": "Du Luxembourg vers l'Europe et le monde entier - douane incluse.",
        "about.title": "À Propos de Gelber LKW Transport",
        "about.p1": "En tant qu'entreprise familiale luxembourgeoise avec plus de 15 ans d'expérience dans le secteur logistique, nous sommes synonymes de fiabilité, de précision et de durabilité.",
        "about.value1": "Durabilité",
        "about.value2": "Sécurité",
        "about.value3": "Ponctualité",

        // Fleet Page
        "fleet.title": "Notre <span class='highlight'>Flotte</span>",
        "fleet.subtitle": "Véhicules modernes et écologiques pour une fiabilité maximale",
        "fleet.stat_vehicles": "Véhicules",
        "fleet.stat_standard": "Norme d'émission",
        "fleet.stat_power": "Puissance max.",
        "fleet.stat_length": "Longueur max.",
        "fleet.stat_year": "Année de construction",
        "fleet.scania_sub": "Longue distance • Classe CE",
        "fleet.scania_desc": "Notre bête de somme pour les transports internationaux. La série S de Scania allie satisfaction du conducteur et efficacité. Équipée des derniers dispositifs de sécurité.",
        "fleet.spec_engine": "Moteur",
        "fleet.spec_emission": "Norme",
        "fleet.spec_payload": "Charge Utile",
        "fleet.spec_cabin": "Cabine",
        "fleet.badge_longhaul": "Longue Distance",
        "fleet.longhaul_title": "Combinaisons Longue Distance",
        "fleet.longhaul_sub": "Haut volume • Hors normes",
        "fleet.longhaul_desc": "Pour les charges nécessitant plus d'espace. Nos combinaisons sont conçues pour une capacité maximale — idéales pour le transport exceptionnel, les bobines et les marchandises lourdes.",
        "fleet.spec_length": "Longueur",
        "fleet.spec_volume": "Volume",
        "fleet.badge_regional": "Régional",
        "fleet.regional_title": "Régional & Express",
        "fleet.regional_sub": "Benelux • Allemagne • France",
        "fleet.regional_desc": "Flexible, agile et toujours à l'heure. Notre flotte régionale est spécialement conçue pour des interventions rapides.",
        "fleet.spec_radius": "Rayon d'action",
        "fleet.spec_turnaround": "Temps de rotation",
        "fleet.standards_title": "Nos Standards",
        "fleet.standards_sub": "Chaque véhicule de notre flotte répond aux normes de sécurité et environnementales les plus strictes",
        "fleet.std1_title": "Systèmes de Sécurité",
        "fleet.std1_desc": "Tous les véhicules disposent de l'ABS, ESP, de l'assistance au maintien de voie et du freinage d'urgence.",
        "fleet.std2_title": "Télématique GPS",
        "fleet.std2_desc": "Suivi en temps réel de tous les véhicules. Tachygraphe numérique et maintenance à distance par satellite.",
        "fleet.std3_title": "Norme Euro 6",
        "fleet.std3_desc": "L'ensemble de la flotte respecte la norme Euro 6, bien en deçà des limites de NOx et de particules.",
        "fleet.std4_title": "Entretien Régulier",
        "fleet.std4_desc": "Chaque véhicule subit une inspection complète tous les 30 000 km dans notre atelier de Windhof.",

        // Careers Page
        "careers.title": "Carrières chez <span class='highlight'>Gelber LKW</span>",
        "careers.subtitle": "Rejoignez notre équipe internationale en pleine croissance",
        "careers.why_title": "Pourquoi Gelber LKW?",
        "careers.why_sub": "Ce que nous offrons à nos employés",
        "careers.ben1_title": "Rémunération Attractive",
        "careers.ben1_desc": "Salaires supérieurs à la moyenne, primes et indemnités.",
        "careers.ben2_title": "Formation Continue",
        "careers.ben2_desc": "Formations régulières, perfectionnement CPC et parcours professionnels.",
        "careers.ben3_title": "Véhicules Modernes",
        "careers.ben3_desc": "Vous conduisez toujours des véhicules Scania modernes tout équipés.",
        "careers.ben4_title": "Proximité",
        "careers.ben4_desc": "Postes régionaux et longues distances avec retours planifiés.",
        "careers.ben5_title": "Santé en Entreprise",
        "careers.ben5_desc": "Assurance maladie, retraite d'entreprise et offres sportives.",
        "careers.ben6_title": "Culture d'Équipe",
        "careers.ben6_desc": "Hiérarchie horizontale, communication ouverte et événements annuels.",
        "careers.jobs_title": "Postes Vacants",
        "careers.job1_title": "Chauffeur Routier (h/f) CE",
        "careers.job1_desc": "Transport international longue distance avec des véhicules Scania modernes. Vous effectuez des liaisons européennes depuis Windhof avec des retours réguliers.",
        "careers.job2_title": "Dispatcheur (h/f)",
        "careers.job2_desc": "Planification et gestion de notre flotte sur le site de Windhof. Vous coordonnez les tournées et gérez les chauffeurs.",
        "careers.job3_title": "Logisticien d'Entrepôt (h/f)",
        "careers.job3_desc": "Réception, expédition, préparation de commandes et inventaire dans notre centre logistique.",
        "careers.job4_title": "Agent en Douane (h/f)",
        "careers.job4_desc": "Traitement des formalités douanières d'importation et d'exportation, création de documents de fret.",
        "careers.j1_r1": "Permis de conduire classe CE",
        "careers.j1_r2": "Carte de conducteur et CPC valide",
        "careers.j1_r3": "Expérience en transport longue distance",
        "careers.j1_r4": "Fiabilité et esprit d'équipe",
        "careers.j2_r1": "Expérience en répartition de transport",
        "careers.j2_r2": "Connaissance d'un système TMS est un atout",
        "careers.j2_r3": "Allemand & Anglais courants",
        "careers.j2_r4": "Résistance au stress et organisation",
        "careers.j3_r1": "Expérience en entreposage",
        "careers.j3_r2": "Permis cariste est un plus",
        "careers.j3_r3": "Connaissance des systèmes de gestion des stocks",
        "careers.j3_r4": "Travail en équipe et rigueur",
        "careers.j4_r1": "Formation en logistique/expédition",
        "careers.j4_r2": "Connaissance du droit douanier de l'UE",
        "careers.j4_r3": "La connaissance d'ATLAS est un plus",
        "careers.j4_r4": "Anglais et Allemand courants",
        "careers.apply": "Postuler",
        "careers.form_title": "Soumettre sa Candidature",
        "careers.form_sub": "Remplissez le formulaire et nous vous contacterons sous 3 jours ouvrables.",
        "careers.f_firstname": "Prénom",
        "careers.f_lastname": "Nom",
        "careers.f_email": "E-Mail",
        "careers.f_phone": "Téléphone",
        "careers.f_position": "Poste",
        "careers.f_message": "Lettre de Motivation / Message",

        // Contact Page
        "contact.title": "Contactez-<span class='highlight'>Nous</span>",
        "contact.hero_sub": "Nous sommes là pour vous — personnellement, rapidement et avec compétence.",
        "contact.urgent_title": "Demande Urgente?",
        "contact.urgent_sub": "Pour une assistance immédiate, appelez-nous directement ou envoyez un e-mail.",
        "contact.info_title": "Coordonnées",
        "contact.info_sub": "Notre équipe est disponible en semaine et 24/7 via notre numéro d'urgence.",
        "contact.address": "Siège Social",
        "contact.phone": "Téléphone",
        "contact.emergency": "Urgence 24/7",
        "contact.email": "E-Mail",
        "contact.quotes": "Devis",
        "contact.hours_title": "HEURES D'OUVERTURE",
        "contact.mon_fri": "Lundi - Vendredi",
        "contact.saturday": "Samedi",
        "contact.sunday": "Dimanche",
        "contact.closed": "Fermé",
        "contact.emergency_label": "Urgence",
        "contact.form_title": "Écrivez-Nous",
        "contact.form_sub": "Remplissez le formulaire. Nous vous répondrons dans un délai d'un jour ouvrable.",
        "contact.subject": "Sujet",
        "contact.subj1": "Demande Générale",
        "contact.subj2": "Demander un Devis",
        "contact.subj3": "Suivi d'Envoi",
        "contact.subj4": "Réclamation",
        "contact.subj5": "Carrières / Candidature",
        "contact.subj6": "Partenariat",
        "contact.message": "Message",
        "contact.submit": "Envoyer",
        "contact.name": "Nom",
        "contact.email_ph": "Adresse e-mail",

        // Tracking & Modals
        "tracking.modal_title": "Suivre l'envoi",
        "tracking.btn": "Suivre",
        "tracking.status": "Statut: En Transit (Près de {loc})"
    }
};

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function initCookieBanner() {
    // Only show if the consent cookie is missing
    if (!getCookie('cookieConsent')) {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div style="position:fixed; bottom:0; left:0; width:100%; background:#222; color:#fff; padding:20px; text-align:center; z-index:9999; display:flex; justify-content:center; align-items:center; gap:15px; flex-wrap:wrap; box-shadow: 0 -4px 10px rgba(0,0,0,0.2);">
                <span style="font-family: 'Inter', sans-serif; font-size: 0.95rem;">
                    Wir verwenden Cookies für Ihre Spracheinstellungen. / We use cookies for your language preferences.
                </span>
                <button id="btn-accept-cookies" style="background:orange; color:black; border:none; padding:10px 20px; cursor:pointer; font-weight:bold; border-radius:4px;">Zustimmen / Confirm</button>
                <button id="btn-deny-cookies" style="background:#555; color:#fff; border:none; padding:10px 20px; cursor:pointer; font-weight:bold; border-radius:4px;">Ablehnen / Deny</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('btn-accept-cookies').addEventListener('click', () => {
            setCookie('cookieConsent', 'accepted', 365);
            // Save the current language choice permanently now that they agreed
            localStorage.setItem('preferredLanguage', currentLang);
            document.getElementById('cookie-banner').remove();
        });

        document.getElementById('btn-deny-cookies').addEventListener('click', () => {
            setCookie('cookieConsent', 'denied', 365);
            document.getElementById('cookie-banner').remove();
        });
    }
}

function switchLanguage(lang) {
    currentLang = lang;
    
    const langSelect = document.getElementById('langSelect');
    if(langSelect) langSelect.value = lang;
    
    localStorage.setItem('preferredLanguage', lang);

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

function initTrackingMap() {
    if (trackingMap) return;
    trackingMap = L.map('trackingMap').setView([49.6116, 6.1319], 5);
    // SWITCHED TO CARTODB (POSITRON) TO FIX ACCESS BLOCKED ERROR
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(trackingMap);
}

function showTrackingModal() {
    document.getElementById('trackingModal').style.display = 'flex';
    setTimeout(() => {
        initTrackingMap();
        trackingMap.invalidateSize();
    }, 100);
}

function hideTrackingModal() {
    document.getElementById('trackingModal').style.display = 'none';
    document.getElementById('modal-tracking-result').classList.add('hidden');
    document.getElementById('modal-tracking-number').value = '';
    if (currentMarker) {
        trackingMap.removeLayer(currentMarker);
        currentMarker = null;
    }
}

function trackShipmentModal() {
    const num = document.getElementById('modal-tracking-number').value.trim();
    const resultArea = document.getElementById('modal-tracking-result');
    const infoText = document.getElementById('tracking-status-info');
    
    if(!num) {
        alert(currentLang === 'en' ? "Please enter a tracking number." : "Bitte Nummer eingeben.");
        return;
    }

    const locations = [
        { name: "Windhof, LU", lat: 49.645, lng: 5.958 },
        { name: "Paris, FR", lat: 48.856, lng: 2.352 },
        { name: "Berlin, DE", lat: 52.520, lng: 13.404 },
        { name: "Brussels, BE", lat: 50.850, lng: 4.351 }
    ];

    const randomLoc = locations[Math.floor(Math.random() * locations.length)];
    
    // FETCH TRANSLATED STATUS STRING
    let statusTemplate = translations[currentLang]["tracking.status"];
    let statusMsg = statusTemplate.replace("{loc}", randomLoc.name);

    infoText.innerHTML = `<p><strong>ID: ${num}</strong><br><span style="color:var(--primary-dark); font-weight: bold;">${statusMsg}</span></p>`;
    
    if (currentMarker) trackingMap.removeLayer(currentMarker);
    currentMarker = L.marker([randomLoc.lat, randomLoc.lng]).addTo(trackingMap);
    trackingMap.flyTo([randomLoc.lat, randomLoc.lng], 8);
    
    resultArea.classList.remove('hidden');
    trackingMap.invalidateSize();
}


window.addEventListener('storage', (event) => {
    if (event.key === 'preferredLanguage') {
        switchLanguage(event.newValue);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initCookieBanner();
    switchLanguage(currentLang);

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Form handling (Safe check if element exists on page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Success!");
            this.reset();
        });
    }

    // Fade-in Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(element => observer.observe(element));
});