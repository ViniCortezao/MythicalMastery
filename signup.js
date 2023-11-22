function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
  }
  