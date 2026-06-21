/* 
  DIWAKAR TAMIRI - Civil Engineering Portfolio
  Custom Premium Script
  Theme: Industrial / Luxury / Corporate / Modern
*/

// Image Database Mapping (Predefined Image Paths and Professional Project Captions)
const galleryImages = [
  // KRR Construction Projects
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.00 PM (1).jpeg',
    caption: 'WTP MGD (38,000 m³/day) Clarifier Basin and Launders'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.00 PM (2).jpeg',
    caption: 'Cooling Tower Foundation Reinforcement & Cast'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.00 PM.jpeg',
    caption: '5000 KLD Reverse Osmosis & Zero Liquid Discharge Facility'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.01 PM (1).jpeg',
    caption: 'Utkal Alumina Refinery Belt Conveyor Base (2KM Corridor)'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.01 PM (2).jpeg',
    caption: 'HDPE Tank Lining and Containment Wall Construction'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.01 PM.jpeg',
    caption: 'Electrical Transformer Substation Foundation Grid (33kv)'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.02 PM (1).jpeg',
    caption: 'Deep Pile Foundations and Concrete Pile Cap Casting'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.02 PM (2).jpeg',
    caption: 'Chemical Storage Building Frame & Pressure Grouting'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.02 PM.jpeg',
    caption: 'Industrial Site Roadwork (CC/BT) and Drainage Culverts'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.03 PM (1).jpeg',
    caption: 'Equalization and Salt Saturation Tanks Erection'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.03 PM (2).jpeg',
    caption: 'Heavy Structural Weighbridge Casting and Base Plate Erection'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.24.03 PM.jpeg',
    caption: 'FRP (Fiberglass) Chemical-Resistant Protective Wall Lining'
  },
  {
    type: 'KRR',
    src: 'images/KRR/WhatsApp Image 2026-06-20 at 9.35.02 PM.jpeg',
    caption: 'Industrial Plant Structural Column Framing and Pedestal Casting'
  },
  
  // MDR Class-1 Projects
  {
    type: 'MDR',
    src: 'images/MDR/WhatsApp Image 2026-06-20 at 9.26.17 PM.jpeg',
    caption: 'Government Highway Widening (Bituminous Asphalt Layering)'
  },
  {
    type: 'MDR',
    src: 'images/MDR/WhatsApp Image 2026-06-20 at 9.26.18 PM.jpeg',
    caption: 'Reinforced Concrete Box Culvert under Public Highway'
  },
  {
    type: 'MDR',
    src: 'images/MDR/WhatsApp Image 2026-06-20 at 9.26.19 PM (1).jpeg',
    caption: 'Excavation and Grading of Stormwater Drainage Channels'
  },
  {
    type: 'MDR',
    src: 'images/MDR/WhatsApp Image 2026-06-20 at 9.26.19 PM (2).jpeg',
    caption: 'Underground Electrical Cable Trench Construction'
  },
  {
    type: 'MDR',
    src: 'images/MDR/WhatsApp Image 2026-06-20 at 9.26.19 PM.jpeg',
    caption: 'Roadside Retaining Wall and Safety Crash Barrier Casting'
  },
  
  // KOUSALYA NIKETHAN Projects
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.50.59 AM.jpeg',
    caption: 'Site Alignment and Leveling Survey Using a Total Station at the Apartment Foundation Site'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.00 AM (1).jpeg',
    caption: 'Foundation Footings and Column Reinforcement Layout for Multi-Story Building Project'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.00 AM (2).jpeg',
    caption: 'Diwakar Tamiri Inspecting Foundation Grid Beam Reinforcement and Formwork'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.00 AM.jpeg',
    caption: 'Sieve Analysis and Quality Testing of 20mm Coarse Aggregates at the Construction Site'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.01 AM (1).jpeg',
    caption: 'Casting and Curing of Parallel Column Foundations and Excavated Grid Layout'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.01 AM (2).jpeg',
    caption: 'Concrete Slump Test Measurement to Verify Workability of Fresh Mix'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.01 AM.jpeg',
    caption: 'Quality Audit and Unit Weight Verification of Steel Reinforcing Bars'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.02 AM (1).jpeg',
    caption: 'Heavy Earthworks and Bulk Excavation for Building Site Foundation and Trenching'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.02 AM (2).jpeg',
    caption: 'Marked Out Foundation Trench Layout Ready for Soil Compaction and PCC Casting'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.02 AM (3).jpeg',
    caption: 'Casting Concrete Cube Specimens for Compressive Strength Laboratory Testing'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.02 AM.jpeg',
    caption: 'High-Angle View of Building Foundation Reinforcement Grid and Site Progress'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.03 AM (1).jpeg',
    caption: 'Diwakar Tamiri Conducting Weight Verification and Logging for Rebar Reinforcement'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.03 AM (2).jpeg',
    caption: 'Cured M25 Concrete Cube Samples (Dated 15.06.25) for Compressive Strength Testing'
  },
  {
    type: 'KOUSALYA',
    src: 'images/KOUSALYA/WhatsApp Image 2026-06-21 at 7.51.03 AM.jpeg',
    caption: 'Completed Concrete Pedestal Footings with Exposed Column Rebars in Foundation Trench'
  }
];

// Document Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // 1. Hide Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.visibility = 'hidden';
      }, 500);
    });
  }

  // 2. Update Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Scroll Progress Indicator & Sticky Navbar & Back-to-Top Button
  const mainNav = document.getElementById('main-nav');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const scrollProgress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    
    // Update scroll bar width
    if (scrollProgress) {
      scrollProgress.style.width = scrolled + '%';
    }

    // Toggle Sticky navbar color fill
    if (mainNav) {
      if (windowScroll > 50) {
        mainNav.classList.add('navbar-scrolled');
      } else {
        mainNav.classList.remove('navbar-scrolled');
      }
    }

    // Toggle Back-To-Top button appearance
    if (backToTopBtn) {
      if (windowScroll > 400) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  });

  // Smooth Back-to-Top Scroll
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Typing Text Effect in Hero
  const strings = [
    "Founder, Viswkarma Constructions",
    "Senior Civil Engineer",
    "Site In-Charge",
    "Industrial Construction Specialist",
    "Infrastructure Project Manager"
  ];
  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typed-element');

  function typeEffect() {
    if (!typedEl) return;
    const currentString = strings[stringIndex];
    
    if (isDeleting) {
      typedEl.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentString.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      typeSpeed = 400; // Pause before starting new word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  setTimeout(typeEffect, 1000);

  // 5. Intersection Observer Animations (Reveal on Scroll)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 6. Skills Progress Bar Animation
  const skillsContainer = document.getElementById('skills-container');
  const progressBars = document.querySelectorAll('.progress-bar-custom');
  
  if (skillsContainer) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-percent');
            bar.style.width = targetWidth + '%';
          });
          skillsObserver.unobserve(skillsContainer);
        }
      });
    }, {
      threshold: 0.2
    });
    skillsObserver.observe(skillsContainer);
  }

  // 7. Achievement Counter Numbers Animation
  const achievementsSection = document.getElementById('achievements');
  const countElements = document.querySelectorAll('.stat-number');
  
  if (achievementsSection) {
    const countersObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countElements.forEach(el => {
            const target = parseInt(el.getAttribute('data-count'), 10);
            let count = 0;
            const duration = 2000; // 2 seconds animation
            const stepTime = Math.max(Math.floor(duration / target), 15);
            
            const timer = setInterval(() => {
              count += Math.ceil(target / (duration / stepTime));
              if (count >= target) {
                el.textContent = target + (target === 14 || target === 100 || target === 500 ? '+' : '');
                clearInterval(timer);
              } else {
                el.textContent = count;
              }
            }, stepTime);
          });
          countersObserver.unobserve(achievementsSection);
        }
      });
    }, {
      threshold: 0.2
    });
    countersObserver.observe(achievementsSection);
  }

  // 8. Photo Gallery Setup, Filtering, and Lightbox Integration
  renderGallery('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add to clicked
      e.target.classList.add('active');
      const filterValue = e.target.getAttribute('data-filter');
      
      // Animate gallery grid reload
      const galleryGrid = document.getElementById('gallery-masonry-grid');
      galleryGrid.style.opacity = '0';
      galleryGrid.style.transform = 'scale(0.97)';
      
      setTimeout(() => {
        renderGallery(filterValue);
        galleryGrid.style.opacity = '1';
        galleryGrid.style.transform = 'scale(1)';
      }, 350);
    });
  });

  // Lightbox Implementation
  const lightbox = document.getElementById('siteLightbox');
  const lightboxImg = document.getElementById('lightbox-img-el');
  const lightboxCaption = document.getElementById('lightbox-caption-el');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxPrev = document.getElementById('lightbox-prev-btn');
  const lightboxNext = document.getElementById('lightbox-next-btn');
  const lightboxZoom = document.getElementById('lightbox-zoom-btn');

  let activeGalleryArr = [];
  let activeGalleryIndex = 0;

  function renderGallery(filter = 'all') {
    const container = document.getElementById('gallery-masonry-grid');
    if (!container) return;
    container.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.type === filter);
      
    filtered.forEach((img, idx) => {
      const item = document.createElement('div');
      item.className = 'gallery-item reveal reveal-zoom';
      item.setAttribute('data-category', img.type);
      item.innerHTML = `
        <img src="${encodeURI(img.src)}" alt="${img.caption}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-overlay-icon">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
          </div>
        </div>
      `;
      item.addEventListener('click', () => {
        activeGalleryArr = filtered;
        activeGalleryIndex = idx;
        openLightbox();
      });
      container.appendChild(item);
      if (typeof revealObserver !== 'undefined') {
        revealObserver.observe(item);
      }
    });
  }

  function openLightbox() {
    if (activeGalleryArr.length === 0 || !lightbox || !lightboxImg || !lightboxCaption) return;
    
    const targetImg = activeGalleryArr[activeGalleryIndex];
    lightboxImg.src = encodeURI(targetImg.src);
    lightboxCaption.textContent = targetImg.caption;
    
    // Reset Zoom
    lightboxImg.classList.remove('zoomed');
    if (lightboxZoom) {
      lightboxZoom.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Restore page scrolling
    }
  }

  function navigateLightbox(direction) {
    activeGalleryIndex += direction;
    if (activeGalleryIndex < 0) {
      activeGalleryIndex = activeGalleryArr.length - 1;
    } else if (activeGalleryIndex >= activeGalleryArr.length) {
      activeGalleryIndex = 0;
    }
    openLightbox();
  }

  function toggleZoom() {
    if (!lightboxImg) return;
    lightboxImg.classList.toggle('zoomed');
    if (lightboxImg.classList.contains('zoomed')) {
      lightboxZoom.innerHTML = '<i class="fa-solid fa-magnifying-glass-minus"></i>';
    } else {
      lightboxZoom.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
    }
  }

  // Lightbox Control Listeners
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));
  if (lightboxZoom) lightboxZoom.addEventListener('click', toggleZoom);
  
  // Close Lightbox clicking outside content
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });

  // 9. Bootstrap Modal Image Slideshow Syncing for Major Projects
  let modalImagesList = [];
  let modalActiveIndex = 0;

  const modalMainImg = document.getElementById('modal-slider-img');
  const modalCaption = document.getElementById('modal-slider-caption');
  const modalThumbsRow = document.getElementById('modal-slider-thumbs');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  // Find all cards modal trigger buttons
  const modalTriggerBtns = document.querySelectorAll('.btn-project-modal');
  modalTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectType = e.target.getAttribute('data-project-type');
      setupProjectModal(projectType);
      
      // Open Bootstrap Modal programmatically
      const projectModalEl = document.getElementById('projectModal');
      const bsModal = new bootstrap.Modal(projectModalEl);
      bsModal.show();
    });
  });

  function setupProjectModal(projectType) {
    modalImagesList = galleryImages.filter(img => img.type === projectType);
    modalActiveIndex = 0;

    // Update Modal Information Title & Description Block in HTML
    const modalTitle = document.getElementById('projectModalLabel');
    const modalScope = document.getElementById('modal-project-scope');
    
    if (projectType === 'KRR') {
      modalTitle.textContent = 'K.R.R Construction Pvt Ltd - Industrial Site Portfolio';
      modalScope.innerHTML = `
        <strong>Site Locations:</strong> Utkal Alumina International Limited (Rayagada, Odisha) & Hindalco Industries (Renukoot, UP)<br>
        <strong>Role:</strong> Site In-Charge<br>
        <strong>Supervised works:</strong> Heavy industrial foundation casts (2KM Belt Conveyor bases, 33kv transformer bases, deep pile caps), Water Treatment Plants (MGD scale WTP & 5000 KLD RO ZLD plants), cooling towers, structural weighbridges, specialized FRP/HDPE protective lining, and client billing/estimations.
      `;
    } else if (projectType === 'MDR') {
      modalTitle.textContent = 'MDR Class-1 Constructions - Government Roadway Portfolio';
      modalScope.innerHTML = `
        <strong>Site Locations:</strong> Regional & Government Highways (Vizianagaram, AP)<br>
        <strong>Role:</strong> Site Engineer<br>
        <strong>Supervised works:</strong> Asphalt BT and CC concrete roadway laying, excavation and reinforcement of structural box culverts, state-regulated stormwater drainage pipes, and underground high-voltage utility electrical cable trenches.
      `;
    } else if (projectType === 'KOUSALYA') {
      modalTitle.textContent = 'Kousalya Nikethan Pvt Ltd - Residential Real Estate Portfolio';
      modalScope.innerHTML = `
        <strong>Site Locations:</strong> Singapore City Residential Apartments (Vizianagaram, AP)<br>
        <strong>Role:</strong> Junior Site Engineer<br>
        <strong>Supervised works:</strong> Sub-surface heavy sewage tanks casting, apartments framing validation, slab reinforcement inspections, bar bending scheduling (BBS), and slump/strength tests for load-bearing concrete elements.
      `;
    }

    updateModalSliderState();
    buildModalThumbnails();
  }

  function updateModalSliderState() {
    if (modalImagesList.length === 0 || !modalMainImg || !modalCaption) return;
    const activeImg = modalImagesList[modalActiveIndex];
    modalMainImg.src = encodeURI(activeImg.src);
    modalCaption.textContent = activeImg.caption;
  }

  function buildModalThumbnails() {
    if (!modalThumbsRow) return;
    modalThumbsRow.innerHTML = '';
    
    modalImagesList.forEach((img, idx) => {
      const imgThumb = document.createElement('img');
      imgThumb.src = encodeURI(img.src);
      imgThumb.alt = img.caption;
      imgThumb.className = `modal-slider-thumb ${idx === modalActiveIndex ? 'active' : ''}`;
      imgThumb.addEventListener('click', () => {
        modalActiveIndex = idx;
        updateModalSliderState();
        updateActiveModalThumbnail();
      });
      modalThumbsRow.appendChild(imgThumb);
    });
  }

  function updateActiveModalThumbnail() {
    const thumbs = document.querySelectorAll('.modal-slider-thumb');
    thumbs.forEach((thumb, idx) => {
      if (idx === modalActiveIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  function navigateModalSlide(direction) {
    modalActiveIndex += direction;
    if (modalActiveIndex < 0) {
      modalActiveIndex = modalImagesList.length - 1;
    } else if (modalActiveIndex >= modalImagesList.length) {
      modalActiveIndex = 0;
    }
    updateModalSliderState();
    updateActiveModalThumbnail();
  }

  if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModalSlide(-1));
  if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModalSlide(1));

  // Keyboard navigation support inside Bootstrap modal slider
  document.addEventListener('keydown', (e) => {
    const modalEl = document.getElementById('projectModal');
    if (modalEl && modalEl.classList.contains('show')) {
      if (e.key === 'ArrowLeft') {
        navigateModalSlide(-1);
      } else if (e.key === 'ArrowRight') {
        navigateModalSlide(1);
      }
    }
  });

  // 10. Open Viswkarma Constructions visiting card in premium lightbox
  const btnZoomCard = document.getElementById('btn-zoom-card');
  const btnZoomCardBack = document.getElementById('btn-zoom-card-back');
  const visitingCardImg = document.getElementById('viswkarma-card-preview');
  if (btnZoomCard || visitingCardImg) {
    const handleCardClick = (e) => {
      e.preventDefault();
      activeGalleryArr = [{
        src: 'images/visiting_card.jpeg',
        caption: 'Viswkarma Constructions - Business Card (Front Side)'
      }];
      activeGalleryIndex = 0;
      openLightbox();
    };
    if (btnZoomCard) btnZoomCard.addEventListener('click', handleCardClick);
    if (visitingCardImg) visitingCardImg.addEventListener('click', handleCardClick);
  }
  if (btnZoomCardBack) {
    btnZoomCardBack.addEventListener('click', (e) => {
      e.preventDefault();
      activeGalleryArr = [{
        src: 'images/backside.jpeg',
        caption: 'Viswkarma Constructions - Business Card (Back Side)'
      }];
      activeGalleryIndex = 0;
      openLightbox();
    });
  }
});
