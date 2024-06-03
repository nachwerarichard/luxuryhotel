// scripts.js
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    hamburger.addEventListener('click', function () {
        overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    
    const heroContent = document.querySelector('.hero-content');

    

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    });
});
// scripts.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.carousel-slide');
    let dots = document.querySelectorAll('.dot');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// scripts.js

// Function to handle booking
// scripts.js

// Function to handle booking
function bookRoom(roomId) {
    alert(`Booking for ${roomId} clicked!`);
}

// Function to handle showing details
function showDetails(roomId) {
    alert(`Details for ${roomId} clicked!`);
}

// Function to handle exploring more rooms
function exploreRooms() {
    alert('Explore more rooms clicked!');
}

// Add animations to room cards on scroll
window.addEventListener('scroll', function() {
    let cards = document.querySelectorAll('.room-card');
    let windowHeight = window.innerHeight;
    cards.forEach(card => {
        let cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        } else {
            card.style.transform = 'translateY(50px)';
            card.style.opacity = '0';
        }
    });
});


// scripts.js
// scripts.js

// scripts.js

// scripts.js

let testimonialIndex = 0;
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

function showTestimonials() {
    testimonialIndex++;
    if (testimonialIndex >= testimonialSlides.length) {
        testimonialIndex = 0;
    }
    testimonialContainer.style.transform = `translateX(-${testimonialIndex * 33.333}%)`;
}

setInterval(showTestimonials, 4000); // Change testimonial every 3 seconds


const dotsContainer = document.querySelector('.dots-container');

// Function to show testimonials
function showTestimonials() {
    testimonialIndex++;
    if (testimonialIndex >= testimonialSlides.length) {
        testimonialIndex = 0;
    }
    updateSlide();
}






const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to show next slide
function nextSlide() {
    testimonialIndex++;
    if (testimonialIndex >= testimonialSlides.length) {
        testimonialIndex = 0;
    }
    updateSlide();
}

// Function to show previous slide
function prevSlide() {
    testimonialIndex--;
    if (testimonialIndex < 0) {
        testimonialIndex = testimonialSlides.length - 1;
    }
    updateSlide();
}

// Function to update slide
function updateSlide() {
    testimonialContainer.style.transform = `translateX(-${testimonialIndex * 33.333}%)`;
}

// Event listeners for buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// scripts.js

// Add fluidity effect to About Us section
document.addEventListener('DOMContentLoaded', function() {
    const aboutUsSection = document.querySelector('.about-us');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutUsSection.style.opacity = '1';
                aboutUsSection.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    observer.observe(aboutUsSection);
});


// scripts.js

let slideIndex01 = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) { slideIndex01 = 0 }
    if (n < 0) { slideIndex01 = slides.length - 1 }
    const newTransformValue = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.slides').style.transform = newTransformValue;
}




