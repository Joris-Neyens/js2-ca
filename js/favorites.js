import { getFavoritesArray } from "./utils/localStorage.js";
import { removeFavorite } from "./utils/removeFavorites.js";

const favoriteContainer = document.querySelector(".favorites-container");

//cheate html
export function favoriteHtml() {
  const storedBooks = getFavoritesArray();

  let newHtml = "";

  if (storedBooks.length === 0) {
    newHtml += `<p id="no-favorites">You have no selected favorites</p>`;
  }

  storedBooks.forEach(function (book) {
    newHtml += `<div class="book col-11 col-md-5 col-lg-3 shadow-sm">
                <h5>${book.title}</h5>
                <p>by: ${book.author}</p>
                <p>ranking: ${book.ranking}</p>
                <i class="far fa-trash-alt" data-id="${book.id}"></i>
            </div>`;
  });

  favoriteContainer.innerHTML = newHtml;

  const trash = document.querySelectorAll(".book i");

  trash.forEach(function (can) {
    can.addEventListener("click", removeFavorite);
  });
  
}

favoriteHtml();

const removeButton = document.querySelector(".remove-button");

removeButton.addEventListener("click", clearStorage) 

function clearStorage() {

  localStorage.clear();

  favoriteHtml()

}

