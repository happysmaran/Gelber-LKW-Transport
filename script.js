let currentLang = 'de';
let trackingMap = null;
let currentMarker = null;

const translations = {
    de: {
        "nav.home": "Home",
        "nav.services": "Dienstleistungen",
        "nav.fleet": "Flotte",
        "nav.about": "Über uns",
        "nav.careers": "Karriere",
        "nav.contact": "Kontakt",
        "nav.track": "Verfolgen",
        "hero.title": "Ihr zuverlässiger Partner für <span class='highlight'>professionelle Logistik</span>",
        "hero.subtitle": "Gelber LKW Transport – Schnell. Sicher. Nachhaltig.<br>Von Luxemburg in die ganze Welt.",
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
        "services.sea_desc": "Kombinierte Transportlösungen über Straße, Schiene und Meer.",
        "services.warehouse": "Lagerung & Fulfillment",
        "services.warehouse_desc": "Moderne Lagerflächen in Luxemburg mit Temperaturkontrolle.",
        "services.global": "Internationale Logistik",
        "services.global_desc": "Von Luxemburg nach Europa und weltweit – mit Zollabwicklung.",
        "fleet.title": "Unsere Flotte",
        "fleet.subtitle": "Moderne, umweltfreundliche Fahrzeuge für höchste Zuverlässigkeit",
        "fleet.scania": "Euro 6 – 650 PS • Mit modernster Sicherheitsausstattung",
        "fleet.longhaul": "Bis 34m Länge • Hohe Ladekapazität",
        "fleet.regional": "Flexible Einsätze in Benelux und Deutschland",
        "careers.title": "Karriere bei uns",
        "careers.subtitle": "Werden Sie Teil unseres wachsenden Teams",
        "careers.job1_title": "Fernfahrer (m/w/d) CE",
        "careers.job1_desc": "Einsatz im internationalen Fernverkehr mit modernen Scania-Fahrzeugen.",
        "careers.job2_title": "Disponent (m/w/d)",
        "careers.job2_desc": "Planung und Steuerung unserer Flotte am Standort Windhof.",
        "careers.apply": "Jetzt bewerben",
        "about.title": "Über Gelber LKW Transport",
        "about.p1": "Als luxemburgisches Familienunternehmen mit über 15 Jahren Erfahrung in der Logistikbranche stehen wir für Zuverlässigkeit, Präzision und Nachhaltigkeit.",
        "about.value1": "Nachhaltigkeit",
        "about.value2": "Sicherheit",
        "about.value3": "Pünktlichkeit",
        "contact.title": "Kontaktieren Sie uns",
        "contact.address": "Hauptsitz",
        "contact.phone": "Telefon",
        "contact.email": "E-Mail",
        "contact.name": "Name",
        "contact.email_ph": "E-Mail",
        "contact.message": "Ihre Nachricht",
        "contact.submit": "Nachricht Senden",
        "tracking.modal_title": "Sendung verfolgen",
        "tracking.btn": "Verfolgen",
        "tracking.status": "Status: Auf dem Weg (Nähe {loc})",
        "footer.allrights": "Alle Rechte vorbehalten"
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.fleet": "Fleet",
        "nav.about": "About",
        "nav.careers": "Careers",
        "nav.contact": "Contact",
        "nav.track": "Track",
        "hero.title": "Your Reliable Partner for <span class='highlight'>Professional Logistics</span>",
        "hero.subtitle": "Gelber LKW Transport – Fast. Secure. Sustainable.<br>From Luxembourg to the world.",
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
        "services.sea_desc": "Combined transport solutions via road, rail, and sea.",
        "services.warehouse": "Warehousing & Fulfillment",
        "services.warehouse_desc": "Modern storage spaces in Luxembourg with temperature control.",
        "services.global": "Global Logistics",
        "services.global_desc": "From Luxembourg to Europe and worldwide – including customs clearance.",
        "fleet.title": "Our Fleet",
        "fleet.subtitle": "Modern, eco-friendly vehicles for maximum reliability",
        "fleet.scania": "Euro 6 – 650 HP • With state-of-the-art safety equipment",
        "fleet.longhaul": "Up to 34m length • High load capacity",
        "fleet.regional": "Flexible operations in Benelux and Germany",
        "careers.title": "Careers",
        "careers.subtitle": "Join our growing international team",
        "careers.job1_title": "Truck Driver (m/f/d) CE",
        "careers.job1_desc": "Deployment in international long-distance transport with modern Scania vehicles.",
        "careers.job2_title": "Dispatcher (m/f/d)",
        "careers.job2_desc": "Planning and management of our fleet at the Windhof location.",
        "careers.apply": "Apply Now",
        "about.title": "About Gelber LKW Transport",
        "about.p1": "As a Luxembourg-based family business with over 15 years of experience in the logistics industry, we stand for reliability, precision, and sustainability.",
        "about.value1": "Sustainability",
        "about.value2": "Safety",
        "about.value3": "Punctuality",
        "contact.title": "Contact Us",
        "contact.address": "Headquarters",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.name": "Name",
        "contact.email_ph": "Email Address",
        "contact.message": "Your Message",
        "contact.submit": "Send Message",
        "tracking.modal_title": "Track Shipment",
        "tracking.btn": "Track",
        "tracking.status": "Status: In Transit (Near {loc})",
        "footer.allrights": "All rights reserved"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.fleet": "Flotte",
        "nav.about": "À Propos",
        "nav.careers": "Carrières",
        "nav.contact": "Contact",
        "nav.track": "Suivre",
        "hero.title": "Votre partenaire fiable pour une <span class='highlight'>logistique professionnelle</span>",
        "hero.subtitle": "Gelber LKW Transport – Rapide. Sûr. Durable.<br>Du Luxembourg vers le monde entier.",
        "hero.cta1": "Découvrir les services",
        "hero.cta2": "Suivre un envoi",
        "hero.stat1": "Véhicules",
        "hero.stat2": "Assistance",
        "hero.stat3": "Pays",
        "services.title": "Nos Services",
        "services.subtitle": "Des solutions logistiques sur mesure pour chaque besoin",
        "services.road": "Fret Routier",
        "services.road_desc": "Transport national et international avec notre flotte moderne.",
        "services.sea": "Fret Maritime & Multimodal",
        "services.sea_desc": "Solutions de transport combinées par route, rail et mer.",
        "services.warehouse": "Entreposage & Logistique",
        "services.warehouse_desc": "Espaces de stockage modernes au Luxembourg sous température dirigée.",
        "services.global": "Logistique Internationale",
        "services.global_desc": "Du Luxembourg vers l'Europe et le monde entier – douane incluse.",
        "fleet.title": "Notre Flotte",
        "fleet.subtitle": "Véhicules modernes et écologiques pour une fiabilité maximale",
        "fleet.scania": "Euro 6 – 650 CH • Équipements de sécurité de pointe",
        "fleet.longhaul": "Jusqu'à 34m de long • Grande capacité de charge",
        "fleet.regional": "Opérations flexibles au Benelux et en Allemagne",
        "careers.title": "Carrières",
        "careers.subtitle": "Rejoignez notre équipe internationale",
        "careers.job1_title": "Chauffeur (h/f/d) CE",
        "careers.job1_desc": "Déploiement dans le transport international longue distance avec des véhicules Scania modernes.",
        "careers.job2_title": "Dispatcheur (h/f/d)",
        "careers.job2_desc": "Planification et gestion de notre flotte sur le site de Windhof.",
        "careers.apply": "Postuler maintenant",
        "about.title": "À Propos de Gelber LKW Transport",
        "about.p1": "En tant qu'entreprise familiale luxembourgeoise avec plus de 15 ans d'expérience, nous sommes synonymes de fiabilité, de précision et de durabilité.",
        "about.value1": "Durabilité",
        "about.value2": "Sécurité",
        "about.value3": "Ponctualité",
        "contact.title": "Contactez-nous",
        "contact.address": "Siège Social",
        "contact.phone": "Téléphone",
        "contact.email": "E-mail",
        "contact.name": "Nom",
        "contact.email_ph": "Adresse e-mail",
        "contact.message": "Votre message",
        "contact.submit": "Envoyer le message",
        "tracking.modal_title": "Suivre un envoi",
        "tracking.btn": "Suivre",
        "tracking.status": "Statut: En transit (Proche de {loc})",
        "footer.allrights": "Tous droits réservés"
    }
};

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `lang-${lang}`);
    });

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

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Success!");
        this.reset();
    });

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

    switchLanguage('de');
});