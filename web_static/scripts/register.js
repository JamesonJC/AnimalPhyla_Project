document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform registration logic here (you can send data to the server or use client-side storage)

        // AJAX used to send registration data to the Flask server
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'username': username,
                'password': password
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            registerForm.reset();
        })
        .catch(error => console.error('Error:', error));

        //alert(`Registration successful for ${username}!`);
        //registerForm.reset();
    });
});