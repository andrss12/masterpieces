document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Ocultar el menú al inicio
    navLinks.style.display = "none";

    // Cuando el usuario haga clic en ☰, mostrar/ocultar el menú
    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            navLinks.style.display = "flex"; // Mostrar el menú
        } else {
            navLinks.style.display = "none"; // Ocultar el menú
        }
    });

    // Cerrar el menú cuando se hace clic en una opción
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.checked = false;
            navLinks.style.display = "none";
        });
    });
});


let mySwiper = new Swiper('.container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    autoplay: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 7
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*Texto centro del carrusel*/
