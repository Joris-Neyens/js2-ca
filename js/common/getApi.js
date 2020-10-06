import { makeHtml } from "../home.js";
import {baseUrl} from "./baseUrl.js"
import {searchTitle} from "../utils/searchTitle.js"

export function getApi() {

    const booksUrl = baseUrl + "books";
  
  (async function () {
    try {
      const response = await fetch(booksUrl);
      const json = await response.json();
  
      makeHtml(json);
      searchTitle(json);

    } catch (error) {
      console.log("error", error);
    }
  })();
  
  }

