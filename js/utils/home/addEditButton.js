import { getUser } from "../../common/userStorage.js";

export function addEditButton() {
  const edit = document.querySelectorAll(".edit");
  const add = document.querySelector("#add");

  const userName = getUser();

  if (userName) {
    edit.forEach(function (editButton) {
      editButton.innerHTML = `<button type="button" class="btn btn-primary">Edit</button>`;

      add.style.display="block";
    });
  }
}
