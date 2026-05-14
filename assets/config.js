/* ============================================================
   DISPLAY SPORT — CONFIG CENTRAL
   ------------------------------------------------------------
   Único lugar donde editar los datos de marca, contacto y
   parámetros comerciales. Cualquier otro archivo debe leer
   de aquí (window.DSR_CONFIG), nunca hardcodear.
   ============================================================ */

window.DSR_CONFIG = {
  brand: {
    name: 'Display Sport',
    tagline: 'Accesorios y ropa deportiva',
    foundedIn: 'Armenia, Quindío',
    country: 'Colombia',
    countryCode: 'CO',
    region: 'Quindío',
    city: 'Armenia',
    addressStreet: 'Cra 14 #8-12',
    addressSector: 'Armenia',
    addressFull: 'Cra 14 #8-12, Armenia, Quindío, Colombia',
    geo: { lat: 4.5333, lng: -75.6811 } // Armenia, Quindío aprox.
  },

  contact: {
    // Solo dígitos, sin '+', para construir wa.me URLs
    whatsapp: '573185899233',
    whatsappDisplay: '+57 318 589 9233',
    instagram: 'Display_sportwear',
    instagramUrl: 'https://www.instagram.com/Display_sportwear',
    // Email no provisto aún; dejar vacío hasta tenerlo.
    email: ''
  },

  hero: {
    phrase: 'THE TIME IS NOW',
    description: 'Fabricamos ropa técnica para running, fitness, cycling y CrossFit. Hombre, dama y accesorios — diseñados y producidos en Armenia, Quindío.'
  },

  commerce: {
    freeShippingThreshold: 200000,
    freeShippingLabel: '$200.000',
    shippingTimeFast: '24–48 horas',
    returnDays: 30,
    paymentMethods: [
      'Tarjeta crédito/débito',
      'PSE',
      'Nequi',
      'Daviplata',
      'Bancolombia',
      'Contraentrega'
    ],
    locale: 'es-CO',
    currency: 'COP'
  },

  lines: ['hombre', 'dama', 'accesorios'],
  disciplines: ['running', 'fitness', 'cycling', 'crossfit']
};

/* ============================================================
   HELPERS — utilidades compartidas
   ============================================================ */

window.DSR = {
  /**
   * Construye una URL wa.me con texto opcional pre-poblado.
   * @param {string} [text] mensaje plano (será URL-encoded).
   * @returns {string}
   */
  whatsappUrl(text) {
    const base = `https://wa.me/${window.DSR_CONFIG.contact.whatsapp}`;
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
  },

  /**
   * Wrapper de analytics — ready-to-wire para GA4 / Meta Pixel.
   * Hoy solo loguea en consola. Cuando se conecte GA4, basta
   * con llamar a gtag('event', name, payload) aquí.
   * @param {string} name p.ej. 'add_to_cart', 'click_whatsapp'
   * @param {Object} [payload]
   */
  trackEvent(name, payload = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, payload);
    } else if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', name, payload);
    }
    // Dev: visible en consola para debugging
    if (window.DSR_DEBUG) console.log('[track]', name, payload);
  },

  /**
   * Formatea precio COP. Si el producto está "Por definir",
   * devuelve el label sin formato.
   * @param {number|string} value
   * @returns {string}
   */
  formatPrice(value) {
    if (value == null || value === '' || value === 'TBD') return 'Por definir';
    if (typeof value === 'string') return value; // ya formateado
    return new Intl.NumberFormat('es-CO').format(value);
  }
};
