document.addEventListener("DOMContentLoaded", function() {
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");

  let currentQuestion = 0;
  let score = 0;

  const questions = [
    {
      question: "Quem e o deus do trovao na mitologia nordica?",
      options: ["Odin", "Zeus", "Thor", "Hades"],
      answer: "Thor"
    },
    {
      question: "Qual é o nome da espada lendaria do Rei Arthur?",
      options: ["Excalibur", "Mjolnir", "Caliburn", "Narsil"],
      answer: "Excalibur"
    },
    {
      question: "Qual criatura mitologica possui o corpo de um leao, cabeça de cabra e cauda de serpente?",
      options: ["Quimera", "Minotauro", "Medusa", "Hidra"],
      answer: "Quimera"
    }
  ];

  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = "";

      for (const option of question.options) {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", checkAnswer);
        optionsElement.appendChild(li);
      }
    } else {
      showResult();
    }
  }

  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    currentQuestion++;
    loadQuestion();
  }

  function showResult() {
    questionContainer.style.display = "none";
    resultElement.textContent = `Pontuação: ${score} de ${questions.length}`;
  }

  loadQuestion();
});
