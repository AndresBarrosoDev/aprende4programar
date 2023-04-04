// Promotional Quotes

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

// Question and answers

const QA = [
  {
    question: "¿QUE ES PROGRAMAR?",
    answer: [
      "Programar es el proceso de crear instrucciones detalladas que una computadora puede seguir para realizar una tarea específica. Esto se hace mediante la escritura de código en un lenguaje de programación, que luego se compila o interpreta para producir un programa ejecutable.",
      "La programación puede ser utilizada para crear software, aplicaciones móviles, páginas web, juegos y una amplia variedad de otras herramientas y sistemas digitales. Los programadores utilizan una variedad de herramientas y tecnologías para escribir código, probar y depurar programas, y colaborar con otros programadores para crear soluciones complejas.",
      "La programación es una habilidad cada vez más importante en la era digital actual, y es fundamental para la creación y el mantenimiento de muchas tecnologías que utilizamos todos los días.",
    ],
  },
  {
    question: "¿QUE NECESITO PARA APRENDER A PROGRAMAR?",
    answer: [
      "Aprender a programar requiere una mentalidad abierta y estar dispuesto a aprender y practicar constantemente. No se necesita una formación avanzada en matemáticas, pero es importante tener una comprensión básica de conceptos como álgebra, estadística y lógica.",
      "Es fundamental elegir un lenguaje de programación adecuado a tus objetivos y necesidades. Hay numerosos recursos disponibles para aprender a programar, como cursos en línea, tutoriales, libros y comunidades de programadores. Es importante encontrar los recursos que funcionen mejor para ti y utilizarlos para seguir aprendiendo.",
      "La práctica constante es clave para desarrollar habilidades de programación. Es importante establecer objetivos claros y trabajar en proyectos prácticos para desarrollar tus habilidades de programación. La paciencia y perseverancia son esenciales en el proceso, ya que la programación puede ser desafiante y frustrante en ocasiones. Con el tiempo y la experiencia, te sentirás cada vez más cómodo y confiado en tu capacidad para crear soluciones útiles y efectivas.",
    ],
  },
  {
    question: "¿QUE GANO AL APRENDER A PROGRAMAR?",
    answer: [
      "Aprender a programar puede ampliar tus habilidades, desarrollar tu pensamiento crítico y creatividad, y mejorar tu capacidad para resolver problemas. Además, la programación ofrece numerosas oportunidades laborales con salarios competitivos, así como la posibilidad de emprender y trabajar de forma autónoma.",
      "La programación también te da la libertad de crear soluciones personalizadas y automatizar procesos repetitivos. Además, aprender a programar puede ser una forma efectiva de mejorar tu currículum y diferenciarte en un mercado laboral cada vez más competitivo.",
      "En resumen, aprender a programar puede ser una inversión valiosa en tu futuro y ofrecerte múltiples beneficios, incluyendo oportunidades laborales, emprendimiento y mejora de habilidades.",
    ],
  },
];


const buttonPreviousElement = document.getElementById("buttonPrevious");
const buttonNextElement = document.getElementById("buttonNext");
const questionElement = document.getElementById("question");
const answer1Element = document.getElementById("answer1");
const answer2Element = document.getElementById("answer2");
const answer3Element = document.getElementById("answer3");

let index = 0;

function updateQA() {
  const qa = QA[index];
  questionElement.innerHTML = qa.question;
  answer1Element.innerHTML = qa.answer[0]
  answer2Element.innerHTML = qa.answer[1]
  answer3Element.innerHTML = qa.answer[2]
}

function nextQA() {
  questionElement.classList.remove("show");
  answer1Element.classList.remove("show");
  answer2Element.classList.remove("show");
  answer3Element.classList.remove("show");
  index++;
  if (index > 2) {
    index = 0;
  };
  updateQA();
  questionElement.classList.add("show");
  answer1Element.classList.add("show");
  answer2Element.classList.add("show");
  answer3Element.classList.add("show");
}

function previousQA() {
  questionElement.classList.remove("show");
  answer1Element.classList.remove("show");
  answer2Element.classList.remove("show");
  answer3Element.classList.remove("show");
  index--;
  if (index < 0) {
    index = 2;
  }
  updateQA();
  questionElement.classList.add("show");
  answer1Element.classList.add("show");
  answer2Element.classList.add("show");
  answer3Element.classList.add("show");
}

updateQA();


// buttonPreviousElement.onclick = previousQA();
// buttonNextElement.onclick = nextQA();
// buttonPreviousElement.addEventListener("click", previousQA);
// buttonNextElement.addEventListener("click", nextQA);