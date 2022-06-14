const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const back = document.getElementById("back");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "rikesh" && password === "1234") {
        window.location.href="after.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
back.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href="index.html";
})
