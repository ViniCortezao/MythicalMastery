document.addEventListener("DOMContentLoaded", function() {
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");

  let currentQuestion = 0;
  let score = 0;

 let questions = JSON.parse(sessionStorage.getItem('questoes'));

  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      questionElement.innerHTML = question.question;
      optionsElement.innerHTML = "";

      for (const option of question.options) {
        const li = document.createElement("li");
        li.innerHTML = option;
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
    resultElement.textContent = `Pontuacao: ${score} de ${questions.length}`;
	resultElement.innerHTML += `<br><br><button onclick=" window.location.href = 'quizzes.html' " >Voltar ao Menu</button>`;
  }

  loadQuestion();
});
