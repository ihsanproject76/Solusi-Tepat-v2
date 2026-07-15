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