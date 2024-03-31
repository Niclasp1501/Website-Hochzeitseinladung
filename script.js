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


// Countdowm Timer

document.addEventListener('DOMContentLoaded', (event) => {
    const countdownDate = new Date("September 14, 2024 16:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Unser großer Tag ist angekommen!";
        }
    }, 1000);
});
