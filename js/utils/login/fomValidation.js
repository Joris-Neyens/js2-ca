import { login } from "../../login.js";

export function formValidation() {
  const name = document.querySelector("#name");
  const password = document.querySelector("#password");
  const nameWarning = document.querySelector("#name-warning");
  const passwordWarning = document.querySelector("#password-warning");

  const nameValue = name.value.trim();

  if (validate(nameValue, 1) === true) {
    nameWarning.style.display = "block";
  } else {
    nameWarning.style.display = "none";
  }

  const passwordValue = password.value.trim();

  if (validate(passwordValue, 1) === true) {
    passwordWarning.style.display = "block";
  } else {
    passwordWarning.style.display = "none";
  }

  if (validate(nameValue, 1) !== true && validate(passwordValue, 1) !== true) {

    login(nameValue, passwordValue);
  }
}

function validate(value, number) {
  if (value.length < number) {
    return true;
  }
}
