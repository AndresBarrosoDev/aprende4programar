const promoQuotes = [
  "Aprende a programar y da el salto hacia el futuro de la tecnología con nuestros cursos especializados.",
  "Desarrolla tu carrera en el mundo digital con nuestros cursos de programación personalizados.",
  "Conviértete en un experto en programación con nuestro programa completo de formación.",
  "Abre las puertas a nuevas oportunidades laborales con nuestros cursos de programación certificados.",
  "Haz realidad tus ideas de software y aplicaciones con nuestros cursos de programación.",
  "Aprende a programar desde cero y conviértete en un desarrollador web en solo unas semanas.",
  "Con nuestros cursos de programación, tendrás la habilidad de crear soluciones tecnológicas innovadoras.",
  "Da el primer paso para construir una carrera exitosa en tecnología con nuestros cursos de programación avanzados.",
  "Nuestros cursos de programación te ayudarán a adquirir las habilidades necesarias para convertirte en un programador altamente capacitado.",
  "Aprende a programar y cambia el mundo con tus ideas innovadoras. ¡Inscríbete ahora en nuestros cursos de programación!",
];
let currentQuote = 0;
const promo = document.getElementById("promo");

setInterval(() => {
    promo.classList.remove("show");
    setTimeout(() => {
      promo.textContent = promoQuotes[currentQuote];
      currentQuote = (currentQuote + 1) % promoQuotes.length;
      promo.classList.add("show");
    }, 500);
  }, 4000);