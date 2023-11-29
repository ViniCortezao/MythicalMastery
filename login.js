function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");
  
  if (username === storedUsername && password === storedPassword) {
    window.location.href = "quizzes.html";
  } else {
    alert("Nome ou senha invalido!");
  }
}
