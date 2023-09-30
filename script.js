// Konstanter för korrekt användarnamn och lösenord.
const correctUsername = "Bella";
const correctPassword = "qwe123";

// användarens input och element från html
const usernameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

// Kolla om användaren är inloggad annars körs inloggningen.
const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
    showLoggedInMessage();
} else {
    showLoginForm();
}

//Funktion för att titta om användarens input stämmer med det korrekta användarnamnet och lösenordet.
//Om det skulle vara fel så visas ett felmeddelande istället och en Återställ knapp dyker upp.
loginBtn.addEventListener("click", function() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        localStorage.setItem("loggedInUser", enteredUsername);
        showLoggedInMessage();
    } else {
        showMessage("Något gick fel, testa ett annat lösenord eller användarnamn.");
        resetBtn.style.display = "Block";
    }
});

//Funktion för att ta bort inloggad info och därmed logga ut användaren.
logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    showLoginForm();
});
//Funktion för att resetta sidan med en knapp.
resetBtn.addEventListener("click", function() {
    location.reload();
});
//Funktion för att nollställa inloggningsformuläret och alla element som ändrats.
function showLoginForm() {
    usernameInput.value = "";
    passwordInput.value = "";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    message.innerText = "";
    message.style.color = "";
    message.style.backgroundColor = "";
}

//Funktion för att visa inloggad meddelandet och byta ut knappen(samt färger).
function showLoggedInMessage() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    message.innerText = `Välkommen,Du är nu inloggad.`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    message.style.color = "var(--white)";
    message.style.backgroundColor = "var(--dark-blue)";
}

//Funktion för att visa upp meddelanden
function showMessage(msg) {
    message.innerText = msg;   
}