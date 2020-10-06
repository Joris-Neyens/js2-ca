const name = document.querySelector("#name");
const password = document.querySelector("#password");
const submit = document.querySelector(".login-button");

submit.addEventListener("click", login);

function login() {

    const nameWarning = document.querySelector("#name-warning")
    const passwordWarning = document.querySelector("#password-warning")

    if(validate(name.value.trim(), 1)) {
        nameWarning.style.display = "block"
    } else {
        nameWarning.style.display = "none"
    }
    
    if(validate(password.value.trim(), 1)) {
        passwordWarning.style.display= "block"
    } else {
        passwordWarning.style.display= "none"
    }
}

function validate(value, number) {
    if(value.length < number) {
        return true
    }
}

