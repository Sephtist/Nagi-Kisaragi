document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const pin = document.getElementById("pin").value.trim();

        if (pin === "0214") {

            sessionStorage.setItem("nagiAuthenticated", "true");

            window.location.href = "personal-notes.html";

        } else {

            loginMessage.textContent = "ACCESS DENIED — INVALID PIN";

        }

    });

});const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const pin = document.getElementById("pin").value;

    if (pin === "0214") {

        sessionStorage.setItem("nagiAuthenticated", "true");

        window.location.href = "personal-notes.html";

    } else {

        loginMessage.textContent = "ACCESS DENIED — INVALID PIN";

    }
});
