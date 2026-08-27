const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "KISARAGI" && password === "0214") {

        sessionStorage.setItem("nagiAuthenticated", "true");

        window.location.href = "private.html";

    } else {

        loginMessage.textContent = "ACCESS DENIED — INVALID CREDENTIALS";

    }
});
