document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (email === "" || password === "") {
        error.textContent = "All fields are required!";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Invalid email format!";
        return;
    }

    error.textContent = "Login successful!";
});
