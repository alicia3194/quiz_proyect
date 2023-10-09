const playQuiz = [
  {
    name: "¿Cuál es la película de terror que presenta a un tiburón gigante que aterroriza a un pueblo costero??",
    respuestas: ["Los Otros", "Tiburón", "Pesadilla en Elm Street", "Scream"],
    respuestaCorrecta: "Tiburón",
  },
  {
    name: "¿Cuál es la película de terror en la que un grupo de amigos viaja a una cabaña en el bosque y se enfrenta a amenazas sobrenaturales?",
    respuestas: [
      "El Conjuro",
      "El Exorcista",
      "El Silencio de los Corderos",
      "Cabin in the Woods",
    ],
    respuestaCorrecta: "Cabin in the Woods",
  },
  {
    name: "En la película Pesadilla en Elm Street, ¿cuál es el nombre del famoso asesino de sueños que acecha a los jóvenes en sus pesadillas?",
    respuestas: [
      "Jason Voorhees",
      "Freddy Krueger",
      "Michael Myers",
      "Leatherface",
    ],
    respuestaCorrecta: "Freddy Krueger",
  },
  {
    name: "¿Cuál es la película de terror en la que una niña gira la cabeza 360 grados y vomita un líquido verde?",
    respuestas: [
      "El Exorcista",
      "El Conjuro",
      "La Noche de los Muertos Vivientes",
      "Saw",
    ],
    respuestaCorrecta: "El Exorcista",
  },
  {
    name: "¿Cuál es la película de terror en la que una niña poseída es sometida a un exorcismo por dos sacerdotes?",
    respuestas: ["Carrie", "The Ring", "El Exorcista", "Annabelle"],
    respuestaCorrecta: "El Exorcista",
  },
  {
    name: "En la película de terror El Aro, ¿qué sucede cuando alguien ve una misteriosa cinta de video?",
    respuestas: [
      "Reciben una llamada telefónica",
      "Experimentan una muerte violenta en siete días",
      "Se convierten en zombies",
      "Obtienen poderes sobrenaturales",
    ],
    respuestaCorrecta: "Experimentan una muerte violenta en siete días",
  },
  {
    name: "¿Cuál es la película de terror en la que una familia se muda a una casa encantada en Long Island, Nueva York, y es aterrorizada por fenómenos paranormales?",
    respuestas: [
      "Annabelle",
      "La Llorona",
      "Amityville Horror",
      "Actividad Paranormal",
    ],
    respuestaCorrecta: "Amityville Horror",
  },
  {
    name: "En la película de terror Scream, ¿cuál es el icónico disfraz que usa el asesino para aterrorizar a sus víctimas?",
    respuestas: [
      "Máscara de payaso",
      "Máscara de lobo",
      "Máscara de calavera",
      "Máscara de bruja",
    ],
    respuestaCorrecta: "Máscara de calavera",
  },
  {
    name: "¿Cuál es la película de terror en la que un grupo de adolescentes se enfrenta a un asesino enmascarado en un campamento de verano?",
    respuestas: ["Viernes 13", "Halloween", "Carrie", "The Ring"],
    respuestaCorrecta: "Halloween",
  },
  {
    name: "En la película de terror Poltergeist, ¿qué objeto se desliza por el suelo y atrae la atención de la niña Carol Anne?",
    respuestas: [
      "Una muñeca diabólica",
      "Una televisión embrujada",
      "Un árbol aterrador",
      "Un coche en miniatura",
    ],
  },
];

const formulario = document.createElement("form");
formulario.setAttribute("id", "container-form");

playQuiz.forEach((element, index) => {
  // Crear div para cada pregunta
  const questionContainer = document.createElement("div");
  questionContainer.classList.add(`question-container${index + 1}`);
  // Comenzar con las secciones del formulario
  const round1 = document.createElement("legend");
  round1.textContent = element.name;
  round1.classList.add("title-answ");
  // Div para las cuatro respuestas
  const answersContainer = document.createElement("div");
  answersContainer.classList.add("answers-container");

  // Condicional para agregar imagen, audio o video

  element.respuestas.forEach((respuesta, i) => {
    const answerContainer = document.createElement("div");
    answerContainer.classList.add(`answ${i + 1}-container`);

    const answerInput = document.createElement("input");
    answerInput.type = "radio";
    answerInput.name = `question${index + 1}`;
    answerInput.value = `respuesta${i + 1}`;

    const answerLabel = document.createElement("label");
    answerLabel.textContent = respuesta;
    answerLabel.classList.add(`answ${i + 1}`);

    answerContainer.appendChild(answerInput);
    answerContainer.appendChild(answerLabel);

    answersContainer.appendChild(answerContainer);
  });

  // Agregar cada pregunta al formulario
  questionContainer.appendChild(round1);
  questionContainer.appendChild(answersContainer);

  formulario.appendChild(questionContainer);
});

// Crear el div para mostrar las respuestas correctas
const respuestaContainer = document.createElement("div");
respuestaContainer.setAttribute("id", "respuesta-container");

// Crear el botón dentro del div "respuestaContainer"
const resultadoButton = document.createElement("button");
resultadoButton.textContent = "Enviar";
resultadoButton.setAttribute("id", "calculate-button");

// Agregar el botón al div "respuestaContainer"
respuestaContainer.appendChild(resultadoButton);

// Agregar el div "respuestaContainer" al formulario
formulario.appendChild(respuestaContainer);

document.querySelector("main").appendChild(formulario);

// Función para mostrar las respuestas correctas
function showCorrectAnswers() {
  const respuestaContainer = document.getElementById("respuesta-container");
  respuestaContainer.innerHTML = "";

  let correctAnswers = 0;

  playQuiz.forEach((element, index) => {
    const selectedInput = document.querySelector(
      `input[name="question${index + 1}"]:checked`
    );

    if (selectedInput) {
      const selectedValue = selectedInput.value;

      if (
        selectedValue ===
        `respuesta${element.respuestas.indexOf(element.respuestaCorrecta) + 1}`
      ) {
        correctAnswers++;
      }
    }
  });

  respuestaContainer.innerHTML = `
    <h2>Respuestas Correctas</h2>
    <p>Tienes ${correctAnswers} respuestas correctas de ${playQuiz.length} preguntas.</p>
  `;
}

resultadoButton.addEventListener("click", () => {
  showCorrectAnswers();
});
