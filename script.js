const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    toggleNavbar();
});

function toggleNavbar() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
}

document.querySelectorAll('.navbar a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        // Prüfe, ob das Navbar-Menü geöffnet ist und ob wir uns auf einem kleineren Bildschirm befinden
        if (navbar.classList.contains('active') && window.innerWidth <= 768) {
            toggleNavbar(); // Verwende die bestehende Funktion, um das Menü zu schließen
        }
    });
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
