import {baseUrl} from "./baseUrl.js"
import { makeHtml } from "../home.js";
import {searchTitle} from "../utils/home/searchFunction.js"



export function getApi() {

    const booksUrl = baseUrl + "books";
  
  (async function () {
    try {
      const response = await fetch(booksUrl);
      const json = await response.json();
  
      searchTitle(json);

      makeHtml(json);
      

    } catch (error) {
      console.log("error", error);
    }
  })();
  
  }

