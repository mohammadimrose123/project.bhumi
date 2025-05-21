console.log('Bhumi Advanced Farming Technology Website Loaded');

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});