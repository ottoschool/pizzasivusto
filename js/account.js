document.addEventListener("DOMContentLoaded", disableErrorMsg);

function disableErrorMsg() {
    try{
        document.getElementById("register_error_message").style.display = "none"
    }catch{
        
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function loginDropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
  }

function register() {
    username = document.getElementById("register_username").value;
    password = document.getElementById("register_password").value;
    if (username&&password){
        localStorage.setItem("Käyttäjänimi", username);
        localStorage.setItem("Salasana", password);
        localStorage.setItem("kirjautunut", "sisään");

        document.getElementById("register_form").style.display = "none"
        document.getElementById("register_status").textContent = `Tervetuloa ${username}!`
    }else {
        document.getElementById("register_error_message").style.display = ""
        document.getElementById("register_error_message").textContent = "Rekisteröinnissä tapahtui virhe! Käyttäjänimi tai salasana puuttuu."
    }
}

