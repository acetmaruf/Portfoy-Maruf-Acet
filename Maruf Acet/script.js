// Menü ikonu (mobil için)
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Scroll Reveal + Aktif Menü
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        // Active Menü
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('.navbar a[href*=' + id + ']')
                .classList.add("active");
            });
        }

        // Scroll animasyon
        if(top >= offset){
            sec.classList.add("show");
        }
    });

    // Menü scroll olunca kapanır
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};
