/**
 * BODA DESIGN - PORTFOLIO INTERACTIVITY & I18N ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLang = localStorage.getItem('boda_portfolio_lang') || 'en';
  let currentFilter = 'all';
  let activeModalProject = null;

  // DOM Elements
  const htmlRoot = document.documentElement;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langTextSpan = document.getElementById('langTextSpan');
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const siteHeader = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');
  
  // Modal Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxTags = document.getElementById('lightboxTags');
  const lightboxWhatsappBtn = document.getElementById('lightboxWhatsappBtn');

  // Contact Form Elements
  const contactForm = document.getElementById('inquiryForm');

  /* ==========================================================================
     LANGUAGE ENGINE (i18n)
     ========================================================================== */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('boda_portfolio_lang', lang);
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update toggle button text
    if (langTextSpan) {
      langTextSpan.textContent = translations[lang].switchLang;
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', translations[lang][key]);
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Re-render portfolio projects with active language
    renderPortfolio(currentFilter);
  }

  // Toggle Language Handler
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  }

  /* ==========================================================================
     PORTFOLIO RENDERING & FILTERING
     ========================================================================== */
  function renderPortfolio(filterCategory = 'all') {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const isAr = currentLang === 'ar';
    const filtered = filterCategory === 'all'
      ? portfolioProjects
      : portfolioProjects.filter(item => item.category === filterCategory);

    filtered.forEach(project => {
      const title = isAr ? project.titleAr : project.titleEn;
      const categoryLabel = isAr ? project.categoryLabelAr : project.categoryLabelEn;
      const desc = isAr ? project.descAr : project.descEn;
      const viewText = isAr ? 'معاينة كاملة' : 'Full Preview';

      const card = document.createElement('div');
      card.className = 'portfolio-card';
      card.setAttribute('data-category', project.category);
      card.setAttribute('data-id', project.id);

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${project.image}" alt="${title}" class="card-preview-img" loading="lazy">
          <div class="card-overlay">
            <span class="overlay-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              ${viewText}
            </span>
          </div>
        </div>
        <div class="card-body">
          <span class="card-category-tag">${categoryLabel}</span>
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${desc}</p>
          <div class="card-tags">
            ${project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(project));
      portfolioGrid.appendChild(card);
    });
  }

  // Filter Buttons Handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderPortfolio(currentFilter);
    });
  });

  /* ==========================================================================
     LIGHTBOX / FULL-SCREEN MODAL
     ========================================================================== */
  function openModal(project) {
    activeModalProject = project;
    const isAr = currentLang === 'ar';

    lightboxImg.src = project.image;
    lightboxImg.alt = isAr ? project.titleAr : project.titleEn;
    lightboxCategory.textContent = isAr ? project.categoryLabelAr : project.categoryLabelEn;
    lightboxTitle.textContent = isAr ? project.titleAr : project.titleEn;
    lightboxDesc.textContent = isAr ? project.descAr : project.descEn;

    // Render tags
    lightboxTags.innerHTML = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

    // Pre-fill WhatsApp inquiry button for this specific project
    const inquiryText = isAr
      ? `مرحباً بودا ديزاين، أود الاستفسار عن مشروع مماثل لـ: "${project.titleAr}"`
      : `Hello Boda Design, I'm interested in a design similar to: "${project.titleEn}"`;
    
    lightboxWhatsappBtn.href = `https://wa.me/201154591411?text=${encodeURIComponent(inquiryText)}`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeModal);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeModal();
    }
  });

  /* ==========================================================================
     STICKY HEADER & ACTIVE SCROLL SPY
     ========================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Scroll Spy for Nav links
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     INTERACTIVE WHATSAPP INQUIRY BUILDER
     ========================================================================== */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isAr = currentLang === 'ar';
      const name = document.getElementById('clientName').value.trim() || (isAr ? 'عميل' : 'Client');
      const projectType = document.getElementById('projectType').value;
      const message = document.getElementById('clientMessage').value.trim();

      let formattedMessage = '';
      if (isAr) {
        formattedMessage = `مرحباً بودا ديزاين 👋\nأنا: ${name}\nأود طلب خدمة تصميم: ${projectType}\nتفاصيل الفكرة:\n${message || 'أود مناقشة تفاصيل المشروع معكم'}`;
      } else {
        formattedMessage = `Hello Boda Design 👋\nName: ${name}\nProject Type: ${projectType}\nProject Details:\n${message || 'I would like to discuss my design project with you.'}`;
      }

      const whatsappUrl = `https://wa.me/201154591411?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  /* ==========================================================================
     BACK TO TOP BUTTON
     ========================================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize Language & Portfolio
  applyLanguage(currentLang);
});
