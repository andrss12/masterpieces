// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Anima cada botón de redes sociales con un efecto fade in y desplazamiento vertical
    gsap.to(".social-btn", {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power2.out",
      stagger: 0.2
    });
  });

  /*Efecto de cuadro de meses*/
  document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".month-box", {
      duration: 1.5,
      opacity: 0,
      ease: "power1.out"
    });
  });