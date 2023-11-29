let perguntas = '';
let q1 = document.querySelector('#q1');
let q2 = document.querySelector('#q2');
let q3 = document.querySelector('#q3');
let q4 = document.querySelector('#q4');

let oa1 = document.querySelector('#oa1');
let oa2 = document.querySelector('#oa2');
let oa3 = document.querySelector('#oa3');
let oa4 = document.querySelector('#oa4');

let ob1 = document.querySelector('#ob1');
let ob2 = document.querySelector('#ob2');
let ob3 = document.querySelector('#ob3');
let ob4 = document.querySelector('#ob4');

let oc1 = document.querySelector('#oc1');
let oc2 = document.querySelector('#oc2');
let oc3 = document.querySelector('#oc3');
let oc4 = document.querySelector('#oc4');

let od1 = document.querySelector('#od1');
let od2 = document.querySelector('#od2');
let od3 = document.querySelector('#od3');
let od4 = document.querySelector('#od4');

let r1 = document.querySelector('#r1');
let r2 = document.querySelector('#r2');
let r3 = document.querySelector('#r3');
let r4 = document.querySelector('#r4');

function save() {
  perguntas = `[
    {
      "question": "${q1.value}",
      "options": ["${oa1.value}", "${ob1.value}", "${oc1.value}", "${od1.value}"],
      "answer": "${r1.value}"
    },
    {
      "question": "${q2.value}",
      "options": ["${oa2.value}", "${ob2.value}", "${oc2.value}", "${od2.value}"],
      "answer": "${r2.value}"
    },
    {
      "question": "${q3.value}",
      "options": ["${oa3.value}", "${ob3.value}", "${oc3.value}", "${od3.value}"],
      "answer": "${r2.value}"
    },
    {
      "question": "${q4.value}",
      "options": ["${oa4.value}", "${ob4.value}", "${oc4.value}", "${od4.value}"],
      "answer": "${r4.value}"
    }
  ]`
  alert("Quiz criado com sucesso!");

  sessionStorage.setItem('criado', perguntas);
  window.location.href = 'quizzes.html'; 
}