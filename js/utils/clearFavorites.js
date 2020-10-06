import { favoriteHtml } from "../favorites.js";

export function clearFavorites() {
  const removeButton = document.querySelector(".remove-button");

  removeButton.addEventListener("click", clearStorage);

  function clearStorage() {
    localStorage.clear();

    favoriteHtml();
  }
}
