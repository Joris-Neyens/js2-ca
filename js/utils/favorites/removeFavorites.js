import { getFavoritesArray } from "./storeFavorites.js";
import { setFavorites } from "./storeFavorites.js";
import { favoriteHtml } from "../../favorites.js";

export function removeFavorite() {
  const id = this.dataset.id;

  const favoriteArray = getFavoritesArray();

  const filteredBooks = favoriteArray.filter(filterBooks);

  function filterBooks(book) {
    if (book.id !== id) {
      return true;
    }
  }

  setFavorites(filteredBooks);

  favoriteHtml();
}

export function clearFavorites() {
    const removeButton = document.querySelector(".remove-button");
  
    removeButton.addEventListener("click", clearStorage);
  
    function clearStorage() {
      localStorage.removeItem("favorites");
  
      favoriteHtml();
    }
  }
  
