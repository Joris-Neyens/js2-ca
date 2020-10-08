import {getApi} from "./common/getApi.js"
import { selectFavorites } from "./utils/home/addFavorites.js";
import {addEditButton} from "./utils/home/addEditButton.js"


getApi()

//create html
export function makeHtml(array) {

  const booksContainer = document.querySelector(".books-container");

  let newHtml = "";

  array.forEach(function (books) {
    newHtml += `<div class="book col-11 col-md-5 col-lg-3 shadow-sm">
                  <h5>${books.title}</h5>
                  <p>by: ${books.author}</p>
                  <p>ranking: ${books.ranking}</p>
                    <i class="far fa-heart" data-id="${books.id}" data-title="${books.title}" data-author="${books.author}" data-ranking="${books.ranking}"></i>
                    <a class="edit" href="admin.html?id=${books.id}"></a>
                </div>`;

    booksContainer.innerHTML = newHtml;
   

  });

  //add favorites clickevent
  let hearts = document.querySelectorAll(".book i");

  hearts.forEach(function (heart) {
    heart.addEventListener("click", selectFavorites);
  });

  //add button after login
  addEditButton()

}

