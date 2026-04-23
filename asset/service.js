
(function() {
  const servicesData = [
    { 
      title: "Scalable E-Commerce", 
      category: "Systems", 
      info: "High-performance store logic with multi-payment gateway integration.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20E-Commerce"
    },
    { 
      title: "Admin Analytics", 
      category: "Logic", 
      info: "Custom dashboard architecture for real-time data visualization.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20Analytics"
    },
    { 
      title: "Booking Engine", 
      category: "Architecture", 
      info: "Robust reservation systems for travel and hospitality industries.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20Booking"
    },
    { 
      title: "Network Ops", 
      category: "Infrastructure", 
      info: "Enterprise-level server monitoring and automated scaling.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20Network"
    },
    { 
      title: "Secure Database", 
      category: "Backend", 
      info: "Advanced encryption and data structuring for sensitive information.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20Database"
    },
    { 
      title: "SaaS Platform", 
      category: "Development", 
      info: "Cloud-native multi-tenant applications built for growth.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20SaaS"
    },
    { 
      title: "API Gateway", 
      category: "Integration", 
      info: "Secure and optimized communication layers between microservices.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20API"
    },
    { 
      title: "Cloud Migration", 
      category: "Architecture", 
      info: "Seamless transition of legacy systems to modern cloud infrastructures.",
      img: "asset/img/f-7.jpeg",
      link: "https://wa.me/6281234567890?text=Order%20Cloud"
    }
  ];

  const container = document.getElementById('servicesSlider');
  if (!container) return;

  function createCard(item) {
    return `
      <div class="service-card-slim" data-link="${item.link}">
        <div class="service-card-status">
          <div class="status-dot"></div>
          <span class="status-text">Ready</span>
        </div>
        <img src="${item.img}" alt="${item.title}" class="user-select">
        <div class="service-card-slim-overlay">
          <span class="service-card-slim-category">${item.category}</span>
          <h3 class="service-card-slim-title">${item.title}</h3>
          <p class="service-card-slim-info">${item.info}</p>
          <div class="service-card-slim-cta" data-link="${item.link}">
            Explore
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    `;
  }


  const listHTML = servicesData.map(item => createCard(item)).join('');
  container.innerHTML = listHTML + listHTML;

  const slider = document.getElementById('sliderServices');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider) {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Infinite scroll
    slider.addEventListener('scroll', () => {
      const maxScroll = slider.scrollWidth / 2;
      if (slider.scrollLeft >= maxScroll) {
        slider.scrollLeft = 1;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft = maxScroll - 1;
      }
    });
  }


  document.querySelectorAll('.service-card-slim-cta').forEach(cta => {
    cta.addEventListener('click', (e) => {
      e.stopPropagation(); // Mencegah event bubbling
      const link = cta.getAttribute('data-link');
      if (link && link !== '#') {
        window.open(link, '_blank');
      }
    });
  });
  

})();