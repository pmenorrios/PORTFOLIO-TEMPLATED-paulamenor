/**
 * Main JavaScript for Portfolio Template
 * Handles navigation menu toggle and scroll-based animations
 */

(function() {
    'use strict';

    // Navigation Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria attributes for accessibility
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.setAttribute('aria-hidden', isExpanded);
            
            // Toggle menu visibility
            if (isExpanded) {
                navMenu.classList.remove('nav__menu--open');
            } else {
                navMenu.classList.add('nav__menu--open');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
                navMenu.classList.remove('nav__menu--open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('nav__menu--open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
                navMenu.classList.remove('nav__menu--open');
            }
        });
    }

    // Scroll-based Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // For project cards, add staggered animation
                if (entry.target.classList.contains('project-card')) {
                    const cards = document.querySelectorAll('.project-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(
        '.section__title, .about__content, .project-card, .skills__category, .contact'
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#' || href === '#!') {
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Header stays transparent
    const header = document.getElementById('header');
    if (header) {
        header.style.backgroundColor = 'transparent';
    }

    // Parallax effect for home section image
    const parallaxImage = document.getElementById('parallaxImage');
    if (parallaxImage) {
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const homeSection = document.getElementById('home');
            
            if (homeSection) {
                const homeSectionTop = homeSection.offsetTop;
                const homeSectionHeight = homeSection.offsetHeight;
                const windowHeight = window.innerHeight;
                
                // Only apply parallax when home section is in view
                if (scrolled < homeSectionTop + homeSectionHeight) {
                    // Parallax speed (0.5 means image moves at half the scroll speed)
                    const parallaxSpeed = 0.3;
                    const yPos = -(scrolled * parallaxSpeed);
                    parallaxImage.style.transform = `translateY(${yPos}px)`;
                }
            }
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
        
        // Initial call
        updateParallax();
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close menu on Escape key
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('nav__menu--open')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
            navMenu.classList.remove('nav__menu--open');
            navToggle.focus();
        }
    });

    // Scroll indicator animation
    const scrollText = document.getElementById('scrollText');
    if (scrollText) {
        const targetText = 'SCROLL';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ<>';
        const positions = [0, 1, 2, 3, 4, 5]; // S, C, R, O, L, L
        let completedPositions = [];
        let frameCount = 0;
        
        function animateText() {
            frameCount++;
            let newText = '(';
            
            for (let i = 0; i < targetText.length; i++) {
                if (completedPositions.includes(i)) {
                    // Position already completed, show correct letter
                    newText += targetText[i];
                } else {
                    // Animate this position - increased delay and lower probability for longer animation
                    const startFrame = i * 25; // Increased from 8 to 25 frames per character
                    const minFrames = 15; // Minimum frames before a character can lock
                    
                    if (frameCount > startFrame && frameCount > (startFrame + minFrames) && Math.random() < 0.08) {
                        // Lock in the correct character (lower probability = longer animation)
                        completedPositions.push(i);
                        newText += targetText[i];
                    } else {
                        // Show random character
                        newText += chars[Math.floor(Math.random() * chars.length)];
                    }
                }
            }
            
            newText += ')';
            scrollText.textContent = newText;
            
            // Continue animating until all positions are complete
            if (completedPositions.length < targetText.length) {
                requestAnimationFrame(animateText);
            } else {
                // Animation complete, ensure final text is correct
                scrollText.textContent = '(SCROLL)';
            }
        }
        
        // Start animation after a short delay
        setTimeout(() => {
            animateText();
        }, 1200);
    }

})();
