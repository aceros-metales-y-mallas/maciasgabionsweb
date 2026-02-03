// ========================================
// MACIAS GABIONS - MAIN JAVASCRIPT
// ========================================

// Translation Object
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_industries: "Industries",
    nav_products: "Products",
    nav_news: "News",
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Engineering Solutions for Erosion Control",
    hero_subtitle: "38 Years of Excellence in Gabions & Wire Mesh",
    hero_description: "Leading manufacturer of erosion control and fencing solutions for Central America, Mexico, and the Caribbean. Trusted by engineers worldwide.",
    hero_btn_quote: "Get a Quote",
    hero_btn_products: "Our Products",
    
    // About Section
    about_subtitle: "Who We Are",
    about_title: "International Leaders in Erosion Control",
    about_intro: "Macias Gabions is the international arm of AMYM (Aceros Metales y Mallas), bringing 38 years of manufacturing expertise to global markets. We specialize in high-quality gabions, wire mesh, and erosion control systems.",
    about_mission: "Our mission is to provide innovative, reliable, and cost-effective solutions for civil engineering projects, combining technical excellence with personalized service for each client's unique needs.",
    about_feature1_title: "ISO 9001 Certified",
    about_feature1_desc: "Quality standards compliance",
    about_feature2_title: "38+ Years",
    about_feature2_desc: "Industry experience",
    about_feature3_title: "Technical Support",
    about_feature3_desc: "Expert engineering advice",
    about_feature4_title: "International Reach",
    about_feature4_desc: "Serving multiple countries",
    
    // Stats Section
    stat1_number: "38+",
    stat1_label: "Years of Experience",
    stat2_number: "500+",
    stat2_label: "Projects Completed",
    stat3_number: "15+",
    stat3_label: "Countries Served",
    stat4_number: "100%",
    stat4_label: "Quality Guaranteed",
    
    // Products Section
    products_subtitle: "Our Solutions",
    products_title: "Erosion Control & Fencing Products",
    products_description: "Manufactured to the highest international standards (INVIAS, NTC, ASTM)",
    
    product1_name: "Triple Twist Gabions",
    product1_desc: "Heavy-duty containment structures for retaining walls and erosion control. Our gabions offer permanent solutions with 100+ year lifespan.",
    product1_feat1: "PVC coated wire",
    product1_feat2: "Customizable sizes",
    product1_feat3: "Easy installation",
    
    product2_name: "Slope Protection Mesh",
    product2_desc: "High-resistance mesh systems designed to stabilize rocky slopes and prevent rockfall on roads and infrastructure.",
    product2_feat1: "High tensile strength",
    product2_feat2: "Corrosion resistant",
    product2_feat3: "Quick deployment",
    
    product3_name: "Reno Mattresses",
    product3_desc: "Low-profile wire mesh containers providing flexible erosion protection for channels, slopes, and embankments.",
    product3_feat1: "Flexible structure",
    product3_feat2: "Natural integration",
    product3_feat3: "Cost-effective",
    
    product4_name: "Triple Twist Wire Mesh",
    product4_desc: "PVC-coated triple twist mesh with exceptional durability - lifespan exceeding 120 years in erosion control applications.",
    product4_feat1: "120+ year lifespan",
    product4_feat2: "PVC protection",
    product4_feat3: "Multiple applications",
    
    product5_name: "Revegetation Geomats",
    product5_desc: "Bio-engineering solutions promoting vegetation growth while preventing fine particle erosion. Available in temporary (48 months) and permanent (100+ years) options.",
    product5_feat1: "Promotes vegetation",
    product5_feat2: "Erosion prevention",
    product5_feat3: "Eco-friendly",
    
    product6_name: "PVC Coated Steel Cable",
    product6_desc: "High-strength steel cables with PVC coating for extended corrosion protection, perfect for anchoring and tensioning applications.",
    product6_feat1: "100+ year protection",
    product6_feat2: "High strength",
    product6_feat3: "Weather resistant",
    
    product7_name: "Chain Link Fence",
    product7_desc: "Durable fencing solution combining easy installation, excellent resistance, and long-lasting performance for perimeter security.",
    product7_feat1: "Easy installation",
    product7_feat2: "High durability",
    product7_feat3: "Low maintenance",
    
    product8_name: "Barbed Wire",
    product8_desc: "Cost-effective perimeter delimitation solution offering simple installation and reliable security for property boundaries.",
    product8_feat1: "Economic solution",
    product8_feat2: "Quick installation",
    product8_feat3: "Effective deterrent",
    
    // Industries Section
    industries_subtitle: "Sectors We Serve",
    industries_title: "Specialized Solutions by Industry",
    industries_description: "Engineering excellence across multiple sectors",
    
    industry1_name: "Infrastructure & Roads",
    industry1_desc: "Highway erosion control, slope stabilization, and retaining walls for transportation projects.",
    
    industry2_name: "Mining & Quarries",
    industry2_desc: "Heavy-duty slope protection and containment solutions for mining operations and material extraction sites.",
    
    industry3_name: "Hydroelectric & Dams",
    industry3_desc: "River bank protection, channel lining, and dam reinforcement for water management projects.",
    
    industry4_name: "Coastal Protection",
    industry4_desc: "Marine-grade erosion control systems for coastal areas, ports, and waterfront developments.",
    
    industry5_name: "Urban Development",
    industry5_desc: "Landscaping, retaining walls, and architectural features for residential and commercial projects.",
    
    industry6_name: "Agriculture & Livestock",
    industry6_desc: "Fencing solutions, land terracing, and water management systems for agricultural operations.",
    
    // Contact Section
    contact_subtitle: "Get In Touch",
    contact_title: "Request a Quote or Technical Consultation",
    contact_description: "Our team of experts is ready to help you find the perfect solution for your project",
    
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_location_title: "Headquarters",
    contact_location_text: "Bogotá, Colombia",
    
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_country: "Country",
    form_company: "Company",
    form_industry: "Industry",
    form_message: "Project Details / Message",
    form_submit: "Send Message",
    form_success: "Thank you! Your message has been sent successfully. We'll contact you soon.",
    form_error: "There was an error sending your message. Please try again or contact us directly.",
    
    // Footer
    footer_about_title: "About Macias Gabions",
    footer_about_text: "International division of AMYM, specializing in erosion control and fencing solutions for Central America, Mexico, and the Caribbean.",
    footer_products_title: "Products",
    footer_industries_title: "Industries",
    footer_contact_title: "Contact Us",
    footer_rights: "All rights reserved. Macias Gabions S.A.S.",
    
    // News
    news_subtitle: "Latest Updates",
    news_title: "News & Projects",
    news_description: "Stay informed about our latest projects and industry insights",
    news_read_more: "Read More",
    
    // Misc
    badge_featured: "Featured",
    badge_new: "New",
    learn_more: "Learn More →",
  },
  
  es: {
    // Navegación
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_industries: "Industrias",
    nav_products: "Productos",
    nav_news: "Noticias",
    nav_contact: "Contacto",
    
    // Sección Hero
    hero_title: "Soluciones de Ingeniería para Control de Erosión",
    hero_subtitle: "38 Años de Excelencia en Gaviones y Mallas Metálicas",
    hero_description: "Fabricante líder de soluciones de control de erosión y cerramientos para Centroamérica, México y el Caribe. Confianza de ingenieros en todo el mundo.",
    hero_btn_quote: "Solicitar Cotización",
    hero_btn_products: "Nuestros Productos",
    
    // Sección Nosotros
    about_subtitle: "Quiénes Somos",
    about_title: "Líderes Internacionales en Control de Erosión",
    about_intro: "Macias Gabions es la división internacional de AMYM (Aceros Metales y Mallas), aportando 38 años de experiencia en manufactura a mercados globales. Nos especializamos en gaviones de alta calidad, mallas metálicas y sistemas de control de erosión.",
    about_mission: "Nuestra misión es proporcionar soluciones innovadoras, confiables y económicamente viables para proyectos de ingeniería civil, combinando excelencia técnica con servicio personalizado para las necesidades únicas de cada cliente.",
    about_feature1_title: "Certificación ISO 9001",
    about_feature1_desc: "Cumplimiento de estándares de calidad",
    about_feature2_title: "38+ Años",
    about_feature2_desc: "Experiencia en la industria",
    about_feature3_title: "Soporte Técnico",
    about_feature3_desc: "Asesoría experta en ingeniería",
    about_feature4_title: "Alcance Internacional",
    about_feature4_desc: "Atendiendo múltiples países",
    
    // Sección Estadísticas
    stat1_number: "38+",
    stat1_label: "Años de Experiencia",
    stat2_number: "500+",
    stat2_label: "Proyectos Completados",
    stat3_number: "15+",
    stat3_label: "Países Atendidos",
    stat4_number: "100%",
    stat4_label: "Calidad Garantizada",
    
    // Sección Productos
    products_subtitle: "Nuestras Soluciones",
    products_title: "Productos de Control de Erosión y Cerramientos",
    products_description: "Fabricados bajo los más altos estándares internacionales (INVIAS, NTC, ASTM)",
    
    product1_name: "Gaviones Triple Torsión",
    product1_desc: "Estructuras de contención resistentes para muros de contención y control de erosión. Nuestros gaviones ofrecen soluciones permanentes con vida útil de más de 100 años.",
    product1_feat1: "Alambre recubierto en PVC",
    product1_feat2: "Tamaños personalizables",
    product1_feat3: "Instalación sencilla",
    
    product2_name: "Malla para Talud",
    product2_desc: "Sistemas de malla de alta resistencia diseñados para estabilizar taludes rocosos y prevenir caídas de rocas en carreteras e infraestructura.",
    product2_feat1: "Alta resistencia a tracción",
    product2_feat2: "Resistente a la corrosión",
    product2_feat3: "Despliegue rápido",
    
    product3_name: "Colchogaviones",
    product3_desc: "Contenedores de malla metálica de bajo perfil que proporcionan protección flexible contra la erosión para canales, taludes y terraplenes.",
    product3_feat1: "Estructura flexible",
    product3_feat2: "Integración natural",
    product3_feat3: "Económicamente viable",
    
    product4_name: "Malla Triple Torsión",
    product4_desc: "Malla triple torsión recubierta en PVC con durabilidad excepcional - vida útil superior a 120 años en aplicaciones de control de erosión.",
    product4_feat1: "Vida útil 120+ años",
    product4_feat2: "Protección PVC",
    product4_feat3: "Múltiples aplicaciones",
    
    product5_name: "Geomantos de Revegetación",
    product5_desc: "Soluciones de bioingeniería que promueven el crecimiento de vegetación mientras previenen la erosión de partículas finas. Disponibles en opciones temporales (48 meses) y permanentes (100+ años).",
    product5_feat1: "Promueve vegetación",
    product5_feat2: "Prevención de erosión",
    product5_feat3: "Ecológico",
    
    product6_name: "Cable de Acero Recubierto PVC",
    product6_desc: "Cables de acero de alta resistencia con recubrimiento PVC para protección extendida contra corrosión, perfectos para aplicaciones de anclaje y tensionamiento.",
    product6_feat1: "Protección 100+ años",
    product6_feat2: "Alta resistencia",
    product6_feat3: "Resistente a la intemperie",
    
    product7_name: "Malla Eslabonada",
    product7_desc: "Solución de cerramiento duradera que combina instalación sencilla, excelente resistencia y rendimiento duradero para seguridad perimetral.",
    product7_feat1: "Fácil instalación",
    product7_feat2: "Alta durabilidad",
    product7_feat3: "Bajo mantenimiento",
    
    product8_name: "Alambre de Púas",
    product8_desc: "Solución económica para delimitación perimetral que ofrece instalación simple y seguridad confiable para límites de propiedades.",
    product8_feat1: "Solución económica",
    product8_feat2: "Instalación rápida",
    product8_feat3: "Disuasión efectiva",
    
    // Sección Industrias
    industries_subtitle: "Sectores que Atendemos",
    industries_title: "Soluciones Especializadas por Industria",
    industries_description: "Excelencia en ingeniería en múltiples sectores",
    
    industry1_name: "Infraestructura y Vías",
    industry1_desc: "Control de erosión en carreteras, estabilización de taludes y muros de contención para proyectos de transporte.",
    
    industry2_name: "Minería y Canteras",
    industry2_desc: "Soluciones de protección de taludes de servicio pesado y contención para operaciones mineras y sitios de extracción de materiales.",
    
    industry3_name: "Hidroeléctricas y Represas",
    industry3_desc: "Protección de riberas, revestimiento de canales y refuerzo de presas para proyectos de gestión de agua.",
    
    industry4_name: "Protección Costera",
    industry4_desc: "Sistemas de control de erosión de grado marino para áreas costeras, puertos y desarrollos frente al mar.",
    
    industry5_name: "Desarrollo Urbano",
    industry5_desc: "Paisajismo, muros de contención y elementos arquitectónicos para proyectos residenciales y comerciales.",
    
    industry6_name: "Agricultura y Ganadería",
    industry6_desc: "Soluciones de cercado, terrazas de tierra y sistemas de gestión de agua para operaciones agrícolas.",
    
    // Sección Contacto
    contact_subtitle: "Contáctenos",
    contact_title: "Solicite una Cotización o Consulta Técnica",
    contact_description: "Nuestro equipo de expertos está listo para ayudarle a encontrar la solución perfecta para su proyecto",
    
    contact_phone_title: "Teléfono",
    contact_email_title: "Correo Electrónico",
    contact_location_title: "Sede Principal",
    contact_location_text: "Bogotá, Colombia",
    
    form_name: "Nombre Completo",
    form_email: "Correo Electrónico",
    form_phone: "Número Telefónico",
    form_country: "País",
    form_company: "Empresa",
    form_industry: "Industria",
    form_message: "Detalles del Proyecto / Mensaje",
    form_submit: "Enviar Mensaje",
    form_success: "¡Gracias! Su mensaje ha sido enviado exitosamente. Nos contactaremos pronto.",
    form_error: "Hubo un error al enviar su mensaje. Por favor intente nuevamente o contáctenos directamente.",
    
    // Footer
    footer_about_title: "Sobre Macias Gabions",
    footer_about_text: "División internacional de AMYM, especializados en soluciones de control de erosión y cerramientos para Centroamérica, México y el Caribe.",
    footer_products_title: "Productos",
    footer_industries_title: "Industrias",
    footer_contact_title: "Contáctenos",
    footer_rights: "Todos los derechos reservados. Macias Gabions S.A.S.",
    
    // Noticias
    news_subtitle: "Últimas Actualizaciones",
    news_title: "Noticias y Proyectos",
    news_description: "Manténgase informado sobre nuestros últimos proyectos y perspectivas de la industria",
    news_read_more: "Leer Más",
    
    // Varios
    badge_featured: "Destacado",
    badge_new: "Nuevo",
    learn_more: "Conocer Más →",
  }
};

// ========================================
// GLOBAL VARIABLES
// ========================================
let currentLang = 'en';
let isScrolling = false;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initLanguage();
  initMobileMenu();
  initScrollEffects();
  initAnimations();
  initParallax();
  initContactForm();
  initCounters();
  
  // Remove loading screen
  setTimeout(() => {
    const loading = document.querySelector('.loading');
    if (loading) {
      loading.classList.add('fade-out');
      setTimeout(() => loading.remove(), 500);
    }
  }, 1000);
});

// ========================================
// LANGUAGE SWITCHING
// ========================================
function initLanguage() {
  // Get language from localStorage or default to English
  currentLang = localStorage.getItem('language') || 'en';
  translatePage(currentLang);
  
  // Set active language button
  updateLanguageButtons();
  
  // Language button listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      if (lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        translatePage(lang);
        updateLanguageButtons();
      }
    });
  });
}

function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

function updateLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    }
  });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

// ========================================
// SCROLL EFFECTS
// ========================================
function initScrollEffects() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    // Header scroll effect
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Active navigation link
    updateActiveNavLink();
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// PARALLAX EFFECT
// ========================================
function initParallax() {
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground) {
    window.addEventListener('scroll', function() {
      if (!isScrolling) {
        window.requestAnimationFrame(function() {
          const scrolled = window.scrollY;
          const parallaxSpeed = 0.5;
          heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  }
  
  // Parallax for other sections
  const parallaxSections = document.querySelectorAll('.parallax-section');
  parallaxSections.forEach(section => {
    window.addEventListener('scroll', function() {
      const rect = section.getBoundingClientRect();
      const scrolled = window.scrollY - section.offsetTop;
      const layers = section.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2;
        layer.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  });
}

// ========================================
// ANIMATED COUNTERS
// ========================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = element.getAttribute('data-target');
  const text = element.textContent;
  const hasPlus = text.includes('+');
  const hasPercent = text.includes('%');
  const numericValue = parseInt(target);
  
  let current = 0;
  const increment = numericValue / 50;
  const duration = 2000;
  const stepTime = duration / 50;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= numericValue) {
      current = numericValue;
      clearInterval(timer);
    }
    
    let displayValue = Math.floor(current);
    if (hasPlus) displayValue += '+';
    if (hasPercent) displayValue += '%';
    
    element.textContent = displayValue;
  }, stepTime);
}

// ========================================
// CONTACT FORM HANDLING
// ========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitBtn = form.querySelector('.form-submit');
      const messageDiv = document.querySelector('.form-message');
      
      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';
      
      try {
        // Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Success
          messageDiv.className = 'form-message success';
          messageDiv.style.display = 'block';
          messageDiv.textContent = translations[currentLang].form_success;
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Error
        messageDiv.className = 'form-message error';
        messageDiv.style.display = 'block';
        messageDiv.textContent = translations[currentLang].form_error;
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang].form_submit;
        
        // Hide message after 5 seconds
        setTimeout(() => {
          messageDiv.style.display = 'none';
        }, 5000);
      }
    });
  }
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ========================================
// WHATSAPP BUTTON
// ========================================
function openWhatsApp() {
  const phoneNumber = '573103449000';
  const message = currentLang === 'en' 
    ? 'Hello! I would like to request information about your products and services.'
    : '¡Hola! Me gustaría solicitar información sobre sus productos y servicios.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Add debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScroll = debounce(function() {
  updateActiveNavLink();
}, 100);

window.addEventListener('scroll', optimizedScroll);
