document.getElementById("signupForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        event.preventDefault();
        document.getElementById("errorMsg").innerText = "Password must be at least 6 characters.";
    }
});
