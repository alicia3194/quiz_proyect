const playQuiz = [
  {
    name: "¿Qué ves en la imagen?",
    imageLink: "../image/img1.png",
    respuestas: ["Unicornio", "El oso y el madreño", "Oso", "Logo WWF"],
  },
  {
    name: "¿Cuál fue la primera película de Walt Disney?",
    imageLink: "../image/img3.jpeg",
    respuestas: [
      "Bambi",
      "Blanca nieves y los siete enanitos",
      "Los aristogatos",
      "Tob y Toby",
    ],
  },
  {
    name: "¿Cuántos círculos ves en la imagen?",
    imageLink: "../image/img2.png",
    respuestas: ["3", "6", "7", "Nigúno"],
  },
  {
    name: "¿De que película es esta banda sonora?",
    content: {
      type: "audio",
      source: "../audio/audio1.mp4",
    },
    respuestas: ["Troya", "Centurión", "Gladiator", "El señor de los Anillos"],
  },
  {
    name: "Memoriza los objetos",
    content: {
      type: "video",
      source: "../video/video2.mov",
    },
    respuestas: ["1, 5 y 8", "1, 3 y 7", "1, 5 y 6", "2, 4 y 7"],
  },
  {
    name: "¿En qué película se dice esta frase?",
    content: {
      type: "video",
      source: "../video/video1.mov",
    },
    respuestas: ["La sirenita", "Cenicienta", "Brave", "Ninguna de ellas"],
  },
  {
    name: "¿Cuál es el alimento más peligroso del mundo?",
    respuestas: [
      "Pizza con piña",
      "Broccoli",
      "Albóndigas de serpiente",
      "galletas sin chocolate",
    ],
  },
  {
    name: "¿Cuál es el alimento más peligroso del mundo?",
    respuestas: [
      "Pizza con piña",
      "Broccoli",
      "Albóndigas de serpiente",
      "galletas sin chocolate",
    ],
  },
  {
    name: "¿De que película es esta banda sonora?",
    content: {
      type: "audio",
      source: "../audio/audio2.mp4",
    },
    respuestas: [
      "Benjamin Button",
      "El niño con el pijama de rayas",
      "La vida es bella",
      "La vida de Brian",
    ],
  },
  {
    name: "¿Cuál es el alimento más peligroso del mundo?",
    respuestas: [
      "Pizza con piña",
      "Broccoli",
      "Albóndigas de serpiente",
      "galletas sin chocolate",
    ],
  },
];

const formulario = document.createElement("form");
formulario.setAttribute("id", "container-form");

playQuiz.map((element, index) => {
  //crear div para cada pregunta
  const questionContainer = document.createElement("div");
  questionContainer.classList.add(`question-container${index + 1}`);
  //empezar con las secciones del form
  const round1 = document.createElement("legend");
  round1.textContent = element.name;
  round1.classList.add("title-answ");
  //div para las cuatr respuestas
  const answersContainer = document.createElement("div");
  answersContainer.classList.add("answers-container");

  //crear div para cada respuesta con su clasemeter imagenes, videos y sonido, usar Condicional

  //crear input y label

  questionContainer.appendChild(round1);
  questionContainer.appendChild(answersContainer);

  formulario.appendChild(questionContainer);
});

document.querySelector("main").appendChild(formulario);
