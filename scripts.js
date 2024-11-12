// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Sticky Navbar on Scroll
window.onscroll = function () {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.style.background = "#444";
    } else {
        navbar.style.background = "transparent";
    }
};

// Contact Form Submission (Just Placeholder for now)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! We will get back to you shortly.');
});
