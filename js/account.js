document.addEventListener("DOMContentLoaded", main);

function main() {
    disableErrorMsg()
    // jos on jo kirjauduttu sisään niin näytetään tervetuloa viesti
    if (isLoggedIn()) {
        try{
            document.getElementById("register_form").style.display = "none"
            document.getElementById("register_status").textContent = `Tervetuloa ${localStorage.getItem("Käyttäjänimi")}!`
        }catch{
            // koska tämä koodi pyöritetään myös pääsivulla niin vältetään virhekoodi
        }
    }
}

function isLoggedIn() { // returnaa true jos on jo kirjauduttu sisään, muuten false
    if (localStorage.getItem("kirjautunut") === "sisään") {  
        let username = localStorage.getItem("Käyttäjänimi")
        let password = localStorage.getItem("Salasana")
        if (username&&password) {
            return true
        }
    }
    return false
}


function disableErrorMsg() { // piilottaa virheviestin ettei sitä näytetä turhaan
    try{
        document.getElementById("register_error_message").style.display = "none"
    }catch{
        // koska tämä koodi pyöritetään myös pääsivulla niin vältetään virhekoodi
    }
}

// togglee kirjautumis valikon pääsivulla
function loginDropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
    if (isLoggedIn) {
        document.getElementById("login_message").textContent = `Tervetuloa ${localStorage.getItem("Käyttäjänimi")}!`
        document.getElementById("logged_in_content").style.display = ""
        document.getElementById("login_form").style.display = "none"
    }else {
        document.getElementById("logged_in_content").style.display = "none"
        document.getElementById("login_form").style.display = "" 
    }
}

function login() { // kirjautuminen
    // otetaan käyttäjänimi ja salasana formista
    const username = document.getElementById("login_username").value;
    const password = document.getElementById("login_password").value;
    
    if (username&&password) {
        if (localStorage.getItem("Käyttäjänimi") === username 
        &&  localStorage.getItem("Salasana") === password) {

            localStorage.setItem("kirjautunut", "sisään");
            document.getElementById("login_form").style.display = "none"
            document.getElementById("Dropdown").style.width = "auto"
            document.getElementById("login_message").textContent += username
            
        }
    }

}

function logOut() {
    localStorage.setItem("kirjautunut", "ulos");
    localStorage.setItem("Käyttäjänimi", "")
    localStorage.setItem("Salasana", "")

    document.getElementById("login_form").style.display = ""
    document.getElementById("Dropdown").style.width = "min-content"
}

function register() { // rekisteröinti
    // otetaan käyttäjänimi ja salasana formista
    const username = document.getElementById("register_username").value;
    const password = document.getElementById("register_password").value;

    // jos molemmat on laitettu formiin niin tallennetaan ne localstorageen ja kirjataan sisään
    if (username&&password){ 
        localStorage.setItem("Käyttäjänimi", username);
        localStorage.setItem("Salasana", password);
        localStorage.setItem("kirjautunut", "sisään");
        
        document.getElementById("register_form").style.display = "none"
        document.getElementById("register_status").textContent = `Tervetuloa ${username}!`
    }else { // jos molempia ei ole syötetty formiin niin kerrotaan siitä käyttäjälle
        document.getElementById("register_error_message").style.display = ""
        document.getElementById("register_error_message").textContent = "Rekisteröinnissä tapahtui virhe! Käyttäjänimi tai salasana puuttuu."
    }
    
}

