// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar ul');
    const contactForm = document.getElementById('contactForm');

    // Toggle menu on mobile
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí normalmente enviarías los datos del formulario a un servidor
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:');
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }

        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        contactForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

    //Desaparecer Logo
    let lastScrollTop = 0;
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Desplazándose hacia abajo
        logo.style.opacity = '0';
    } else {
        // Desplazándose hacia arriba
        logo.style.opacity = '1';
    }
    lastScrollTop = scrollTop;
});

//Boton ScrolltoTOP
const scrollToTopButton = document.getElementById('scrollToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'flex'; // Show the button
    } else {
        scrollToTopButton.style.display = 'none'; // Hide the button
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});