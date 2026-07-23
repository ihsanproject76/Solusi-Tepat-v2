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

    const icon = menuToggle.querySelector("i");

    if(navLinks.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

// =========================
// TUTUP MENU SETELAH KLIK
// =========================

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function(item){

    item.addEventListener("click", function(){

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});
// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(function(item){

        item.classList.remove("active");

        if(item.dataset.section === currentSection){

            item.classList.add("active");

        }

    });

});
// =========================
// PRELOADER
// =========================

window.addEventListener("load", function () {

    console.log("Website selesai dimuat");

    const preloader = document.getElementById("preloader");

    console.log(preloader);

    setTimeout(function () {

        console.log("Preloader disembunyikan");

        preloader.classList.add("hide");

    }, 2000);

});

window.addEventListener("scroll", showFadeElements);

window.addEventListener("load", showFadeElements);

// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    console.log("Dark Mode diklik");

    document.body.classList.toggle("dark-mode");

});