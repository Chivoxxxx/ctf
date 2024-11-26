function signIn() {
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    //window.location.href = "./HTML/Home.html"; // Redirect to home page   
}

function checkLogin() {
    // Retrieve saved credentials (for demonstration purposes)
    var savedUsername1 = "Ammar";
    var savedPassword1 = "123456";
    var savedUsername2 = "Ahmed";
    var savedPassword2 = "123456";
    var savedUsername3 = "Waqas";
    var savedPassword3 = "123456";
    var savedUsername4 = "Mohammed";
    var savedPassword4 = "123456";

    // Get input values
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    if ((usernameInput === savedUsername1 && passwordInput === savedPassword1) ||
        (usernameInput === savedUsername2 && passwordInput === savedPassword2) ||
        (usernameInput === savedUsername3 && passwordInput === savedPassword3)
        (usernameInput === savedUsername3 && passwordInput === savedPassword4)) {
        
        window.location.href = "./HTML/terminal.html";
    } else {
        alert("Invalid username or password. Please try again.");
        window.location.href = "index.html";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return false;
    }
   
}