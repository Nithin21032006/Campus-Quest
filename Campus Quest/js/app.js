// Main Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Update active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Initialize page-specific functionality
    if (currentPage === 'find-colleges.html') {
        initializeFindColleges();
    } else if (currentPage === 'shortlist.html') {
        initializeShortlist();
    } else if (currentPage === 'compare.html') {
        initializeCompare();
    } else if (currentPage === 'chatbot.html') {
        initializeChatbot();
    }
});

// Page Initialization Functions
function initializeFindColleges() {
    // This will be implemented in filters.js
    console.log('Initializing Find Colleges page');
}

function initializeShortlist() {
    // This will be implemented in shortlist.js
    console.log('Initializing Shortlist page');
}

function initializeCompare() {
    // This will be implemented in compare.js
    console.log('Initializing Compare page');
}

function initializeChatbot() {
    // This will be implemented in chatbot.js
    console.log('Initializing Chatbot page');
}