//for the scroll effect
window.addEventListener('scroll', function() {
    const sidebar = document.querySelector('.sidebar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        sidebar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        sidebar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    } else {
        sidebar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        sidebar.style.boxShadow = 'none';
    }
});


//pulse animation

// Function to update the active link based on scroll position
// Function to update the active link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section:not(.ignore-highlight)'); // Skip sections with the class 'ignore-highlight'
    const navLinks = document.querySelectorAll('.sidebar a');
    let currentIndex = -1;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentIndex = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.remove('active');
        if (index === currentIndex) {
            link.classList.add('active');
        }
    });
}

// Debounce function to limit how often the scroll event handler is executed
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Update the active link on scroll with debouncing
document.addEventListener('scroll', debounce(updateActiveLink, 100));

// Update the active link on page load
document.addEventListener('DOMContentLoaded', updateActiveLink);

// Reset active links on page reload
window.addEventListener('load', function() {
    const navLinks = document.querySelectorAll('.sidebar a');
    navLinks.forEach(link => link.classList.remove('active'));
});
