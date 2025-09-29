// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.getElementById('typing-text');
const contactForm = document.getElementById('contact-form');
const logoContainer = document.getElementById('logo-container');

// Logo elements
const logoPrimary = document.getElementById('logo-primary');
const logoLuxury = document.getElementById('logo-luxury');
const logoProfessional = document.getElementById('logo-professional');

// Ensure DOM elements exist before proceeding
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize typing animation - FIXED: Enhanced typing animation
    if (typingText) {
        setTimeout(initializeTypingAnimation, 1000);
    }
    
    // Initialize navigation
    setupNavigation();
    
    // Initialize logo functionality
    setupLogoSwitching();
    
    // Initialize animations
    setupAnimations();
    
    // Initialize form handling
    setupContactForm();
    
    // Initialize other features
    setupEnhancedEffects();
    
    // Initialize branding section animations
    setupBrandingAnimations();
    
    // Initialize icon animations
    setupIconAnimations();
    
    // Initialize profile picture animations
    setupProfilePictureAnimations();
}

// FIXED: Enhanced Typing Animation
const texts = [
    "Software Engineer with 2 years of experience in developing enterprise solutions using Python, Java, and modern frontend frameworks.",
    "Hands-on expertise in Generative AI, NLP, semantic search, and system design.",
    "Proficient in building scalable APIs, full-stack architectures, and deploying solutions on AWS & Azure.",
    "Strong collaborator with a proven track record of delivering impactful AI-powered business applications."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;
let isInitialized = false;

function initializeTypingAnimation() {
    if (!typingText || isInitialized) return;
    
    isInitialized = true;
    
    // Ensure the typing text container is properly styled and visible
    typingText.style.color = 'var(--color-cream-100)';
    typingText.style.fontWeight = '400';
    typingText.style.lineHeight = '1.6';
    typingText.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
    typingText.style.display = 'inline-block';
    typingText.style.minHeight = '1.5em';
    typingText.style.width = 'auto';
    typingText.style.maxWidth = '100%';
    typingText.style.whiteSpace = 'pre-wrap';
    typingText.style.wordBreak = 'break-word';
    
    // Start the typing animation
    typeWriter();
}

function typeWriter() {
    if (!typingText || !isInitialized) return;
    
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        // Typing forward
        const displayText = currentText.substring(0, charIndex + 1);
        typingText.textContent = displayText;
        charIndex++;
        
        if (charIndex === currentText.length) {
            // Finished typing current text
            isDeleting = true;
            typeSpeed = 40; // Faster deletion
            setTimeout(typeWriter, 2500); // Pause at end before deleting
            return;
        }
        
        typeSpeed = Math.random() * 100 + 50; // Variable typing speed for realism
    } else {
        // Deleting backward
        const displayText = currentText.substring(0, charIndex - 1);
        typingText.textContent = displayText;
        charIndex--;
        
        if (charIndex === 0) {
            // Finished deleting, move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 80;
            setTimeout(typeWriter, 800); // Pause before new text
            return;
        }
        
        typeSpeed = 30; // Consistent deletion speed
    }
    
    // Continue typing/deleting
    setTimeout(typeWriter, typeSpeed);
}

// Profile Picture Animation Setup
function setupProfilePictureAnimations() {
    const profileContainers = document.querySelectorAll('.profile-picture-container');
    
    profileContainers.forEach((container, index) => {
        const placeholder = container.querySelector('.profile-picture-placeholder');
        const initials = container.querySelector('.profile-initials');
        const glow = container.querySelector('.profile-glow');
        
        // Initial loading animation
        setTimeout(() => {
            container.style.opacity = '0';
            container.style.transform = 'scale(0.8) rotate(-10deg)';
            container.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }, index * 500);
        
        // Enhanced hover effects
        container.addEventListener('mouseenter', () => {
            // Add floating animation
            container.style.animation = 'profileFloat 2s ease-in-out infinite';
            
            // Enhance glow effect
            if (glow) {
                glow.style.opacity = '1';
                glow.style.transform = 'scale(1.2)';
            }
            
            // Add subtle rotation to initials
            if (initials) {
                initials.style.transform = 'scale(1.1) rotate(5deg)';
                initials.style.textShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
            }
            
            // Add border glow
            if (placeholder) {
                placeholder.style.boxShadow = '0 15px 60px rgba(50, 184, 198, 0.4), 0 0 0 8px rgba(50, 184, 198, 0.1)';
            }
        });
        
        container.addEventListener('mouseleave', () => {
            // Reset animations
            container.style.animation = '';
            
            if (glow) {
                glow.style.opacity = '0';
                glow.style.transform = 'scale(1)';
            }
            
            if (initials) {
                initials.style.transform = 'scale(1) rotate(0deg)';
                initials.style.textShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
            }
            
            if (placeholder) {
                placeholder.style.boxShadow = '0 8px 32px rgba(50, 184, 198, 0.2)';
            }
        });
        
        // Click effect for profile pictures
        container.addEventListener('click', () => {
            createProfileClickEffect(container);
        });
    });
}

function createProfileClickEffect(container) {
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(50, 184, 198, 0.4) 0%, transparent 70%);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(0);
        pointer-events: none;
        animation: profileRipple 0.8s ease-out;
        z-index: 10;
    `;
    
    container.style.position = 'relative';
    container.appendChild(ripple);
    
    // Add bounce effect
    container.style.transform = 'scale(0.95)';
    setTimeout(() => {
        container.style.transform = 'scale(1.05)';
        setTimeout(() => {
            container.style.transform = 'scale(1)';
        }, 200);
    }, 100);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 800);
}

// Professional Icon Animations
function setupIconAnimations() {
    // Hero social icons enhanced animations
    const heroSocialLinks = document.querySelectorAll('.hero-social .social-link');
    heroSocialLinks.forEach((link, index) => {
        // Staggered entrance animation
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px) scale(0.8)';
        link.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1)';
        }, 2000 + index * 200);
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', () => {
            // Icon-specific animations
            const icon = link.querySelector('.icon');
            if (icon && icon.classList.contains('icon-linkedin')) {
                const square = icon.querySelector('.linkedin-square');
                if (square) {
                    square.style.animation = 'pulse 0.6s ease-in-out';
                }
            } else if (icon && icon.classList.contains('icon-github')) {
                const cat = icon.querySelector('.github-cat');
                if (cat) {
                    cat.style.animation = 'logoFloat 1s ease-in-out';
                }
            } else if (icon && icon.classList.contains('icon-leetcode')) {
                const brackets = icon.querySelectorAll('.leetcode-bracket');
                brackets.forEach((bracket, i) => {
                    bracket.style.animationDelay = `${i * 0.1}s`;
                    bracket.style.animation = 'pulse 0.8s ease-in-out';
                });
            }
        });
        
        link.addEventListener('mouseleave', () => {
            // Reset animations
            const icon = link.querySelector('.icon');
            if (icon) {
                const elements = icon.querySelectorAll('*');
                elements.forEach(el => {
                    el.style.animation = '';
                });
            }
        });
        
        // Click feedback
        link.addEventListener('click', (e) => {
            createIconClickEffect(e.currentTarget);
        });
    });
    
    // Contact icons animations
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        const icon = item.querySelector('.contact-icon');
        
        // Entrance animation
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + index * 200);
        
        // Icon-specific hover animations
        item.addEventListener('mouseenter', () => {
            if (icon && icon.classList.contains('icon-email')) {
                animateEmailIcon(icon);
            } else if (icon && icon.classList.contains('icon-phone')) {
                animatePhoneIcon(icon);
            } else if (icon && icon.classList.contains('icon-location')) {
                animateLocationIcon(icon);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (icon) {
                resetIconAnimation(icon);
            }
        });
    });
    
    // Social buttons animations
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach((btn, index) => {
        btn.addEventListener('mouseenter', () => {
            const icon = btn.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                
                // Icon-specific effects
                if (icon.classList.contains('icon-linkedin-sm')) {
                    const square = icon.querySelector('.linkedin-square');
                    if (square) {
                        square.style.boxShadow = '0 0 15px rgba(0, 119, 181, 0.6)';
                    }
                } else if (icon.classList.contains('icon-github-sm')) {
                    const cat = icon.querySelector('.github-cat');
                    if (cat) {
                        cat.style.filter = 'drop-shadow(0 0 8px var(--color-teal-300))';
                    }
                } else if (icon.classList.contains('icon-leetcode-sm')) {
                    const brackets = icon.querySelectorAll('.leetcode-bracket');
                    brackets.forEach(bracket => {
                        bracket.style.textShadow = '0 0 10px #FFD700';
                    });
                }
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            const icon = btn.querySelector('.icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.filter = '';
                
                // Reset icon-specific effects
                const elements = icon.querySelectorAll('*');
                elements.forEach(el => {
                    el.style.boxShadow = '';
                    el.style.textShadow = '';
                    el.style.filter = '';
                });
            }
        });
        
        // Click effect
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            createIconClickEffect(e.currentTarget);
            setTimeout(() => {
                window.open(btn.href, '_blank');
            }, 300);
        });
    });
}

// Icon-specific animations
function animateEmailIcon(icon) {
    const envelope = icon.querySelector('.envelope');
    if (!envelope) return;
    
    const top = envelope.querySelector('.envelope-top');
    const bottom = envelope.querySelector('.envelope-bottom');
    
    if (top && bottom) {
        // Simulate opening envelope
        top.style.transform = 'rotateX(-20deg)';
        bottom.style.transform = 'translateY(2px)';
        
        // Add sparkle effect
        createSparkleEffect(icon);
    }
}

function animatePhoneIcon(icon) {
    const phone = icon.querySelector('.phone');
    const screen = icon.querySelector('.phone-screen');
    
    if (phone) {
        // Vibration effect
        phone.style.animation = 'shake 0.5s ease-in-out infinite';
        
        if (screen) {
            screen.style.background = 'linear-gradient(135deg, #32C88A, #32A085)';
        }
        
        // Add pulse effect
        setTimeout(() => {
            phone.style.animation = '';
        }, 1000);
    }
}

function animateLocationIcon(icon) {
    const pin = icon.querySelector('.location-pin');
    const circle = icon.querySelector('.pin-circle');
    
    if (pin) {
        // Bounce effect
        pin.style.animation = 'locationBounce 0.8s ease-out';
    }
    
    if (circle) {
        // Ripple effect
        createRippleEffect(circle);
    }
}

function resetIconAnimation(icon) {
    const elements = icon.querySelectorAll('*');
    elements.forEach(el => {
        el.style.animation = '';
        el.style.transform = '';
        el.style.background = '';
    });
}

// Effect creators
function createIconClickEffect(element) {
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(50, 184, 198, 0.3);
        width: ${size}px;
        height: ${size}px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

function createSparkleEffect(element) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--color-teal-300);
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle 1s ease-out forwards;
        `;
        
        const angle = (i * 60) * Math.PI / 180;
        const distance = 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.transform = `translate(-50%, -50%)`;
        sparkle.style.setProperty('--end-x', `${x}px`);
        sparkle.style.setProperty('--end-y', `${y}px`);
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border: 2px solid var(--color-teal-300);
        border-radius: 50%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(1);
        opacity: 0.8;
        pointer-events: none;
        animation: rippleExpand 1s ease-out;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 1000);
}

// Logo Switching Functionality
function setupLogoSwitching() {
    if (!logoContainer) return;
    
    const logos = [logoPrimary, logoLuxury, logoProfessional];
    let currentLogoIndex = 0;
    
    // Auto-rotate logos every 4 seconds
    setInterval(() => {
        switchToNextLogo();
    }, 4000);
    
    // Click to manually switch logos
    logoContainer.addEventListener('click', switchToNextLogo);
    
    function switchToNextLogo() {
        if (logos[currentLogoIndex]) {
            // Hide current logo
            logos[currentLogoIndex].classList.remove('active');
        }
        
        // Move to next logo
        currentLogoIndex = (currentLogoIndex + 1) % logos.length;
        
        // Show next logo with delay for smooth transition
        setTimeout(() => {
            if (logos[currentLogoIndex]) {
                logos[currentLogoIndex].classList.add('active');
            }
        }, 300);
    }
    
    // Logo hover effects
    logoContainer.addEventListener('mouseenter', () => {
        logoContainer.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    logoContainer.addEventListener('mouseleave', () => {
        logoContainer.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Scroll-based logo switching
    let lastScrollY = window.scrollY;
    const logoSwitchThreshold = 500;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);
        
        if (scrollDifference > logoSwitchThreshold) {
            switchToNextLogo();
            lastScrollY = currentScrollY;
        }
    }, 1000));
}

// Branding Section Animations
function setupBrandingAnimations() {
    // Logo showcase hover effects
    const logoVariants = document.querySelectorAll('.logo-variant');
    
    logoVariants.forEach((variant, index) => {
        const showcaseLogo = variant.querySelector('.showcase-logo');
        const usageTags = variant.querySelectorAll('.usage-tag');
        
        variant.addEventListener('mouseenter', () => {
            // Animate showcase logo
            if (showcaseLogo) {
                showcaseLogo.style.transform = 'scale(1.15) rotate(3deg)';
                showcaseLogo.style.filter = 'drop-shadow(0 15px 45px rgba(50, 184, 198, 0.5)) brightness(1.1)';
            }
            
            // Animate usage tags
            usageTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-3px) scale(1.05)';
                    tag.style.backgroundColor = 'rgba(50, 184, 198, 0.25)';
                    tag.style.borderColor = 'rgba(50, 184, 198, 0.4)';
                }, tagIndex * 100);
            });
            
            // Add glow effect to variant
            variant.style.boxShadow = '0 25px 50px rgba(50, 184, 198, 0.2), inset 0 1px 0 rgba(50, 184, 198, 0.1)';
        });
        
        variant.addEventListener('mouseleave', () => {
            // Reset showcase logo
            if (showcaseLogo) {
                showcaseLogo.style.transform = 'scale(1) rotate(0deg)';
                showcaseLogo.style.filter = 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3))';
            }
            
            // Reset usage tags
            usageTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.backgroundColor = '';
                tag.style.borderColor = '';
            });
            
            // Reset glow effect
            variant.style.boxShadow = '';
        });
        
        // Click to zoom logo
        if (showcaseLogo) {
            showcaseLogo.addEventListener('click', () => {
                const logoName = variant.querySelector('.logo-name');
                createLogoModal(showcaseLogo.src, logoName ? logoName.textContent : 'Logo');
            });
        }
    });
    
    // Application items animation
    const applicationItems = document.querySelectorAll('.application-item');
    applicationItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.app-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.filter = 'drop-shadow(0 5px 15px rgba(50, 184, 198, 0.4))';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.app-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = '';
            }
        });
    });
    
    // Scroll-triggered branding animations
    const brandingSection = document.getElementById('branding');
    if (brandingSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateBrandingElements();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(brandingSection);
    }
}

function animateBrandingElements() {
    const logoVariants = document.querySelectorAll('.logo-variant');
    const applicationItems = document.querySelectorAll('.application-item');
    
    // Animate logo variants with stagger
    logoVariants.forEach((variant, index) => {
        variant.style.opacity = '0';
        variant.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            variant.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
            variant.style.opacity = '1';
            variant.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animate application items
    applicationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + index * 150);
    });
}

function createLogoModal(imageSrc, logoName) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'logo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        max-width: 80%;
        max-height: 80%;
        text-align: center;
        transform: scale(0.8);
        transition: all 0.3s ease;
    `;
    
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalImage.alt = logoName;
    modalImage.style.cssText = `
        max-width: 100%;
        max-height: 70vh;
        object-fit: contain;
        filter: drop-shadow(0 20px 60px rgba(50, 184, 198, 0.3));
        margin-bottom: 2rem;
    `;
    
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = logoName;
    modalTitle.style.cssText = `
        color: var(--color-teal-300);
        font-size: 2rem;
        margin: 0;
        font-weight: 600;
    `;
    
    const closeText = document.createElement('p');
    closeText.textContent = 'Click anywhere to close';
    closeText.style.cssText = `
        color: var(--color-text-secondary);
        margin-top: 1rem;
        font-size: 0.9rem;
    `;
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(closeText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal on click
    modal.addEventListener('click', () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }, 300);
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.click();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Navigation Setup
function setupNavigation() {
    // Navbar scroll effect
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
        hamburger.addEventListener('keydown', handleHamburgerKeydown);
    }
    
    // Navigation links
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && hamburger && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target) && 
            navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    if (!hamburger || !navMenu) return;
    
    const isActive = hamburger.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    if (!hamburger || !navMenu) return;
    
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (bars.length >= 3) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    }
    
    // Animate menu items
    const menuItems = navMenu.querySelectorAll('.nav-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + index * 50);
    });
}

function closeMobileMenu() {
    if (!hamburger || !navMenu) return;
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Reset hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (bars.length >= 3) {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

function handleHamburgerKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMobileMenu();
    }
}

function handleNavLinkClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenu();
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    }
}

// Navbar Scroll Effect and Active Link Update
function updateNavbarAndActiveLink() {
    // Update navbar background
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Update active navigation link
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);
        
        if (scrollPos >= top && scrollPos <= bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// Contact Form Setup
function setupContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleContactFormSubmit);
    
    // Setup form input animations
    const formControls = contactForm.querySelectorAll('.form-control');
    formControls.forEach(setupFormControlAnimations);
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    if (!contactForm) return;
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const subject = formData.get('subject')?.trim();
    const message = formData.get('message')?.trim();
    
    // Validate form
    const validation = validateForm(name, email, subject, message);
    if (!validation.isValid) {
        showNotification(validation.message, 'error');
        return;
    }
    
    // Submit form
    submitContactForm(name, email, subject, message);
}

function validateForm(name, email, subject, message) {
    if (!name || !email || !subject || !message) {
        return {
            isValid: false,
            message: 'Please fill in all fields'
        };
    }
    
    if (!isValidEmail(email)) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    if (name.length < 2) {
        return {
            isValid: false,
            message: 'Name must be at least 2 characters long'
        };
    }
    
    if (subject.length < 3) {
        return {
            isValid: false,
            message: 'Subject must be at least 3 characters long'
        };
    }
    
    if (message.length < 10) {
        return {
            isValid: false,
            message: 'Message must be at least 10 characters long'
        };
    }
    
    return { isValid: true };
}

function submitContactForm(name, email, subject, message) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.textContent;
    
    // Update button state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    submitBtn.style.cursor = 'not-allowed';
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
        
        // Reset form field styles
        const formControls = contactForm.querySelectorAll('.form-control');
        formControls.forEach(input => {
            input.style.borderColor = '';
        });
    }, 2000);
}

function setupFormControlAnimations(input) {
    // Focus animations
    input.addEventListener('focus', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 5px 15px rgba(50, 184, 198, 0.2)';
        this.style.borderColor = 'var(--color-teal-300)';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
        if (!this.value.trim()) {
            this.style.borderColor = '';
        }
    });
    
    // Input validation styling
    input.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            this.style.borderColor = 'var(--color-teal-300)';
            this.classList.remove('error');
        } else {
            this.style.borderColor = '';
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    // Create notification content
    const content = document.createElement('div');
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    closeBtn.addEventListener('click', () => hideNotification(notification));
    
    content.appendChild(messageSpan);
    content.appendChild(closeBtn);
    notification.appendChild(content);
    
    // Style the notification
    const colors = {
        success: '#32A085',
        error: '#C0152F',
        warning: '#A84B2F',
        info: '#626C71'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-base);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        font-weight: 500;
        line-height: 1.4;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 300);
}

// Animation Setup
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe elements for animation
    observeElements(observer);
    
    // Initialize entrance animations
    setupEntranceAnimations();
    
    // Setup parallax effects
    setupParallaxEffect();
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add specific animations based on element type
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.classList.add('animate');
            }
            
            if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate');
            }
            
            if (entry.target.classList.contains('skill-category')) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                entry.target.classList.add('fade-in');
            }
            
            // Animate skill items with stagger effect
            if (entry.target.classList.contains('skills-section')) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                });
            }
        }
    });
}

function observeElements(observer) {
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
    
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'all 0.6s ease';
        observer.observe(category);
    });
    
    // Skills section
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillItems = skillsSection.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px) scale(0.9)';
            item.style.transition = 'all 0.3s ease';
        });
        observer.observe(skillsSection);
    }
}

function setupEntranceAnimations() {
    // Animate hero buttons
    setTimeout(() => {
        const heroButtons = document.querySelectorAll('.hero-btn');
        heroButtons.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            btn.style.transition = 'all 0.6s ease';
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 1500 + index * 200);
        });
        
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateY(20px)';
            scrollIndicator.style.transition = 'all 0.6s ease';
            setTimeout(() => {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.transform = 'translateY(0)';
            }, 3000);
        }
    }, 100);
}

function setupParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroBg = document.querySelector('.hero-bg');
        const heroLogoAccent = document.querySelector('.hero-logo-accent');
        
        if (heroContent && heroBg) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (heroLogoAccent) {
            heroLogoAccent.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.1}deg)`;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Enhanced Effects Setup
function setupEnhancedEffects() {
    setupButtonHoverEffects();
    setupProjectCardEffects();
    setupSkillItemEffects();
    setupTimelineExpandFeature();
    setupFooterLogoAnimation();
}

function setupFooterLogoAnimation() {
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.addEventListener('mouseenter', () => {
            footerLogo.style.transform = 'scale(1.2) rotate(10deg)';
            footerLogo.style.filter = 'drop-shadow(0 4px 12px rgba(50, 184, 198, 0.5))';
        });
        
        footerLogo.addEventListener('mouseleave', () => {
            footerLogo.style.transform = 'scale(1) rotate(0deg)';
            footerLogo.style.filter = 'drop-shadow(0 2px 8px rgba(50, 184, 198, 0.3))';
        });
    }
}

function setupButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

function setupProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 25px 50px rgba(50, 184, 198, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)';
            
            // Animate stats
            const stats = this.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                stat.style.transform = 'scale(1.1)';
                stat.style.transition = 'transform 0.3s ease';
            });
            
            // Animate tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px) scale(1.05)';
                    tag.style.backgroundColor = 'rgba(50, 184, 198, 0.25)';
                    tag.style.transition = 'all 0.3s ease';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            
            const stats = this.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                stat.style.transform = 'scale(1)';
            });
            
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.backgroundColor = '';
            });
        });
    });
}

function setupSkillItemEffects() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(50, 184, 198, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

function setupTimelineExpandFeature() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const achievements = item.querySelector('.project-achievements');
        if (achievements && achievements.children.length > 3) {
            // Hide extra achievements initially
            const extraItems = Array.from(achievements.children).slice(3);
            extraItems.forEach(extraItem => {
                extraItem.style.display = 'none';
            });
            
            // Create expand button
            const expandBtn = createExpandButton();
            
            let isExpanded = false;
            expandBtn.addEventListener('click', () => {
                if (isExpanded) {
                    collapseAchievements(extraItems, expandBtn);
                    isExpanded = false;
                } else {
                    expandAchievements(extraItems, expandBtn);
                    isExpanded = true;
                }
            });
            
            achievements.appendChild(expandBtn);
        }
    });
}

function createExpandButton() {
    const expandBtn = document.createElement('button');
    expandBtn.textContent = 'Show More';
    expandBtn.className = 'expand-btn';
    expandBtn.style.cssText = `
        background: var(--color-teal-500);
        color: var(--color-slate-900);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        cursor: pointer;
        margin-top: 1rem;
        transition: all 0.3s ease;
        font-family: inherit;
    `;
    
    expandBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--color-teal-300)';
        this.style.transform = 'translateY(-2px)';
    });
    
    expandBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--color-teal-500)';
        this.style.transform = 'translateY(0)';
    });
    
    return expandBtn;
}

function expandAchievements(extraItems, expandBtn) {
    extraItems.forEach((extraItem, index) => {
        setTimeout(() => {
            extraItem.style.display = 'list-item';
            extraItem.style.opacity = '0';
            extraItem.style.transform = 'translateY(10px)';
            extraItem.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                extraItem.style.opacity = '1';
                extraItem.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
    expandBtn.textContent = 'Show Less';
}

function collapseAchievements(extraItems, expandBtn) {
    extraItems.forEach(extraItem => {
        extraItem.style.display = 'none';
    });
    expandBtn.textContent = 'Show More';
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    updateNavbarAndActiveLink();
}, 16); // ~60fps

// Add CSS animations for the new effects
const additionalCSS = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
}

@keyframes locationBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

@keyframes rippleEffect {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.8;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
    }
}

@keyframes sparkle {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) translate(var(--end-x), var(--end-y)) scale(1);
        opacity: 0;
    }
}

@keyframes rippleExpand {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

@keyframes profileFloat {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    25% {
        transform: translateY(-5px) rotate(1deg);
    }
    50% {
        transform: translateY(-8px) rotate(0deg);
    }
    75% {
        transform: translateY(-3px) rotate(-1deg);
    }
}

@keyframes profileRipple {
    0% {
        transform: scale(0);
        opacity: 0.6;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);