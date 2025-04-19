// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Set initial theme
if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Enhanced Cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.1;

const animateCursor = () => {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
};

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

animateCursor();

// Add cursor effects on hover
const hoverElements = document.querySelectorAll('a, button, .work-item, .skill-tags span, input, textarea');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-grow');
        if (el.classList.contains('btn-primary')) {
            cursor.classList.add('cursor-primary');
        }
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow');
        cursor.classList.remove('cursor-primary');
    });
});

// [Rest of your existing JavaScript with enhancements]
