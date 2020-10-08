import { formValidation } from "./utils/login/fomValidation.js";
import { baseUrl } from "./common/baseUrl.js";
import { saveToken, saveUser } from "./common/userStorage.js";

//formvalidation
const submit = document.querySelector(".login-button");
submit.addEventListener("click", formValidation);

//login
export async function login(name, password) {
  const loginUrl = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: name, password: password });

  const post = {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const response = await fetch(loginUrl, post);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user.username);
      location.href = "/";
    }
  } catch (error) {
    console.log("error");
  }
}
