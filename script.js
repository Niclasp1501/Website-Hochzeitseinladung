const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
let showFirstLocation = false; // Setze dies auf false, um die Anzeige Standesamt zu unterdrücken 
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



// Funktion zum Überprüfen und Anzeigen des Namens
function checkAndDisplayGuestName(guestName) {
    const allowedNames = ['Alexander', 'Stefan', 'Ernst', 'Andrea']; // Hier die Namen eintragen die zum Standesamt kommen sollen
    let showFirstLocation = allowedNames.includes(guestName);

    var guestNameSpan = document.querySelector('.guest-name');
    if (guestNameSpan) {
        guestNameSpan.textContent = guestName ? ' ' + guestName + ', ' : '';
    }
    
    // Anzeige von Locations basierend auf showFirstLocation bestimmen
    if (!showFirstLocation) {
      document.querySelector('.first-location-group').style.display = 'none';
      document.querySelector('.first-location-heading').style.display = 'none';
      document.querySelector('.first-location-divider').style.display = 'none';
      document.querySelector('.first-schedule-group').style.display = 'none';

    }
}

document.addEventListener('DOMContentLoaded', function() {
    function getQueryParam(param) {
        var search = window.location.search.substring(1);
        var variables = search.split('&');
        for (var i = 0; i < variables.length; i++) {
            var pair = variables[i].split('=');
            if (decodeURIComponent(pair[0]) == param) {
                return decodeURIComponent(pair[1].replace(/\+/g, ' '));
            }
        }
        return null;
    }

    var guestName = getQueryParam('name');
    checkAndDisplayGuestName(guestName);
});




//FAQ 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}