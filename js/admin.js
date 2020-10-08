import { baseUrl } from "./common/baseUrl.js";
import { message } from "./common/handleMessages.js";
import { getToken } from "./common/userStorage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const pageId = params.get("id");

const booksUrl = baseUrl + "books/" + pageId;

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const ranking = document.querySelector("#ranking");
const bookId = document.querySelector("#id");

(async function () {
  try {
    const response = await fetch(booksUrl);
    const book = await response.json();

    console.log(book);

    title.value = book.title;
    author.value = book.author;
    ranking.value = book.ranking;
    bookId.value = book.id;
  } catch (error) {
    console.log(error);
  }
})();

const updateButton = document.querySelector("#update");
updateButton.addEventListener("click", update);

function update() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const rankingValue = parseFloat(ranking.value);
  const idValue = parseFloat(id.value);

  if (
    titleValue.length === 0 ||
    authorValue.length === 0 ||
    rankingValue.length === 0 ||
    isNaN(rankingValue)
  ) {
    return message(
      "error",
      "All fields must have a value. Ranking must be a number",
      ".message-container"
    );
  } else {
    updateBooks(titleValue, authorValue, rankingValue, idValue);
  }
}
//update book
async function updateBooks(title, author, ranking, id) {
  const updatedUrl = baseUrl + "books/" + id;
  const newArray = JSON.stringify({
    title: title,
    author: author,
    ranking: ranking,
  });
  const token = getToken();

  const changedData = {
    method: "Put",
    body: newArray,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  try {
    const response = await fetch(updatedUrl, changedData);
    const json = await response.json();
    console.log(json)


  if (json.updated_at) {
       message("success", "your book had been updated", ".message-container");
     }
  } catch (error) {
    console.log("error", error);
  }
}



const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", removeBook);

//remove book
async function removeBook() {

  const id = document.querySelector("#id");
  const idValue = id.value;

  const remove = confirm("ready to delete?");

  if(remove) {
   
    const updatedUrl = baseUrl + "books/" + idValue;

    const token = getToken();

    const removeData = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },

    };

    try {
      const response = await fetch(updatedUrl, removeData);
      const json = await response.json();
  
      location.href = "/index.html"
  
    } catch (error) {
      console.log("error");
    }
  }
}
