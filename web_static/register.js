document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform registration logic here (you can send data to the server or use client-side storage)

        alert(`Registration successful for ${username}!`);
        registerForm.reset();
    });
});