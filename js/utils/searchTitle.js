import { makeHtml } from "../home.js";

export function searchTitle(books) {
  const input = document.querySelector("input");

  input.onkeyup = function (event) {
    const searchInput = event.target.value.toLowerCase().trim();

    const filteredTitles = books.filter(function (book) {
      const title = book.title.toLowerCase();

      if (title.includes(searchInput)) {
        return true;
      }
    });
    makeHtml(filteredTitles);
  };
  
}
