document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. NAVBAR & MENU TOGGLE (DARI SCRIPT ASLI) ==========
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOverlay = document.querySelector(".menu-overlay");
    const closeBtn = document.querySelector(".close-btn");
    const menuLinks = document.querySelectorAll(".menu-list a");
    const navbar = document.querySelector(".navbar");

    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        if (currentScrollY > 50) {
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.background = "rgba(242, 242, 242, 0.85)";
        } else {
            navbar.style.backdropFilter = "none";
            navbar.style.background = "transparent";
        }
        
        ticking = false;
    }

    function handleNavbarScroll() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();

    function openMenu() {
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        menuOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (menuToggle) menuToggle.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    if (menuOverlay) {
        menuOverlay.addEventListener("click", (e) => {
            if (e.target === menuOverlay) closeMenu();
        });
    }

    menuLinks.forEach(link => {
        const href = link.getAttribute("href");
        
        if (!href || href === "#" || href === "javascript:void(0)") {
            return;
        }
        
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                closeMenu();
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);
            }
        });
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 1024 && menuOverlay.classList.contains("active")) {
                closeMenu();
            }
        }, 250);
    });

    if (menuOverlay) {
        menuOverlay.addEventListener("wheel", (e) => {
            const panel = menuOverlay.querySelector(".menu-panel");
            if (panel && !panel.contains(e.target)) {
                e.preventDefault();
            }
        });
    }

    const text = "Marson D. Juanda Zebua";
    const typingElement = document.getElementById("hero-typing");
    let typingIndex = 0;

    function typeLoop() {
        if (!typingElement) return;
        typingElement.textContent = "";
        typingIndex = 0;

        function type() {
            if (typingIndex < text.length) {
                typingElement.textContent += text.charAt(typingIndex);
                typingIndex++;
                setTimeout(type, 60 + Math.random() * 40);
            } else {
                setTimeout(typeLoop, 3000);
            }
        }
        type();
    }

    typeLoop();

    const icons = document.querySelectorAll('.hero-icon-item');
    let currentIconIndex = 0;

    if (icons.length > 0) {
        function changeIcon() {
            if (icons[currentIconIndex]) {
                icons[currentIconIndex].classList.remove('active');
            }
            
            currentIconIndex = (currentIconIndex + 1) % icons.length;
            
            if (icons[currentIconIndex]) {
                icons[currentIconIndex].classList.add('active');
            }
        }
        
        let iconInterval = setInterval(changeIcon, 2000);
        
        const heroiconContainer = document.getElementById('heroiconContainer');
        if (heroiconContainer) {
            heroiconContainer.addEventListener('mouseenter', function() {
                clearInterval(iconInterval);
            });
            
            heroiconContainer.addEventListener('mouseleave', function() {
                iconInterval = setInterval(changeIcon, 800);
            });
        }
    }

    const revealElements = document.querySelectorAll(".about, .showcase, .projects, .contact, .hero-content, .hero-box");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealThreshold = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealThreshold) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    console.log("Portfolio Website - Fully Loaded");
});
