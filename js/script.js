// Tombol Back To Top

const backToTop = document.getElementById("backToTop");

// Menampilkan tombol saat halaman di-scroll
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

// Kembali ke atas saat tombol diklik
backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// Fade In Animation
// =========================

const fadeElements = document.querySelectorAll(".fade-in");

function showFadeElements() {

    fadeElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}
// =========================
// HAMBURGER MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

window.addEventListener("scroll", showFadeElements);

window.addEventListener("load", showFadeElements);