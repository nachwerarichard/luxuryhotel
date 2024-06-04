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



// scripts.js

// Function to handle booking
// scripts.js

// Function to handle booking


// Function to handle exploring more rooms


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











// scripts.js


// scripts.js






