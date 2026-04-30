// script.js

let currentLang = 'de';

const translations = {
    de: {
        "nav.home": "Home",
        "nav.services": "Dienstleistungen",
        "nav.fleet": "Flotte",
        "nav.about": "Über uns",
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
        "footer.allrights": "Alle Rechte vorbehalten"
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.fleet": "Fleet",
        "nav.about": "About",
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
        "footer.allrights": "All rights reserved"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.fleet": "Flotte",
        "nav.about": "À Propos",
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

function showTrackingModal() {
    document.getElementById('trackingModal').style.display = 'flex';
}

function hideTrackingModal() {
    document.getElementById('trackingModal').style.display = 'none';
    document.getElementById('modal-tracking-result').classList.add('hidden');
    document.getElementById('modal-tracking-number').value = '';
}

function trackShipmentModal() {
    const num = document.getElementById('modal-tracking-number').value.trim();
    const result = document.getElementById('modal-tracking-result');
    
    // Multi-lang status responses
    const statusMsg = currentLang === 'en' ? "Status: In Transit" : 
                      currentLang === 'fr' ? "Statut: En transit" : 
                      "Status: Auf dem Weg";
    const errorMsg = currentLang === 'en' ? "Please enter a tracking number." : 
                     currentLang === 'fr' ? "Veuillez entrer un numéro de suivi." : 
                     "Bitte Nummer eingeben.";

    if(num) {
        result.innerHTML = `<p><strong>${num}</strong><br><span style="color:var(--secondary); font-weight: bold;">${statusMsg}</span></p>`;
    } else {
        result.innerHTML = `<p style="color:var(--secondary);">${errorMsg}</p>`;
    }
    result.classList.remove('hidden');
}

// Init & Smooth Views Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // Form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const msg = currentLang === 'en' ? "Thank you! Your message has been sent." : 
                    currentLang === 'fr' ? "Merci ! Votre message a été envoyé." : 
                    "Vielen Dank! Ihre Nachricht wurde gesendet.";
        alert(msg);
        this.reset();
    });

    // Close modal on outside click
    window.onclick = function(event) {
        let modal = document.getElementById('trackingModal');
        if (event.target == modal) {
            hideTrackingModal();
        }
    }

    // Intersection Observer for Smooth Fade-in Views
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Set initial language
    switchLanguage('de');
});