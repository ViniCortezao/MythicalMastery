const quizCafe = [
    {
      question: "Quem e o Deus do trovao na mitologia nordica?",
      options: ["Odin", "Zeus", "Thor", "Hades"],
      answer: "Thor"
    },
    {
      question: "Qual e o nome da espada lendaria do Rei Arthur?",
      options: ["Excalibur", "Mjolnir", "Caliburn", "Narsil"],
      answer: "Excalibur"
    },
    {
      question: "Qual criatura mitologica possui o corpo de um leao, cabeça de cabra e cauda de serpente?",
      options: ["Quimera", "Minotauro", "Medusa", "Hidra"],
      answer: "Quimera"
    }
  ];

const quizCortezao = [
	{
      question: "O que e o Ragnarok?",
      options: ["Uma sequencia de eventos catastroficos", "A luta final entre Thor e Loki", "O mito da criacao do universo", "O reino onde moram os deuses nordicos"],
      answer: "Uma sequencia de eventos catastroficos"
    },
    {
      question: "Quem governa o submundo na mitologia grega?",
      options: ["Cerberus", "Hades", "Nemesis", "Haddad"],
      answer: "Hades"
    },
    {
      question: "Qual a classe do primeiro Buda",
      options: ["Deus", "Sobrenatural", "Homem", "Espirito"],
      answer: "Homem"
    }
   ];

let quizJSON = [];

let ulEL = document.querySelector('ul');

let quizUser = sessionStorage.getItem('criado');

if(quizUser != null) {
  quizUser = JSON.parse(quizUser);
  ulEL.innerHTML += `<li id="caixa1" >
  <button onclick="abrirQuiz(quizUser)" >
      <p class="nomes">Quiz do usuário</p>
      <p class="autor">Por: ${localStorage.getItem('username')}</p>
  </button>
</li>`
}
	

function abrirQuiz(quiz) {
	sessionStorage.setItem('questoes', JSON.stringify(quiz));
	window.location.href = "quiz.html";
}

 function ligarajax() {
	$.getJSON({
    url: 'https://api.npoint.io/d30343c40b22796b6650',
    success: function(resposta) {
			for(let i = 0; i < resposta.length; i++) {
				quizJSON = resposta;
				ulEL.innerHTML += `<li id="caixa1">
                <button onclick="abrirQuiz(quizJSON[${i}])" >
                    <p class="nomes">Outro Quiz ${i+1}</p>
                    <p class="autor">Por: Cortezão</p>
                </button>
            </li>`
			}
    }
});
}
