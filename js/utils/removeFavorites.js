import {getFavoritesArray} from "./localStorage.js"
import {setFavorites} from "./localStorage.js";
import {favoriteHtml} from "../favorites.js";


export function removeFavorite() {

    const id = this.dataset.id;

    const favoriteArray = getFavoritesArray()

    const filteredBooks = favoriteArray.filter(filterBooks);

    function filterBooks(book) {
        if(book.id !== id) {
            return true;
        }
    }

    setFavorites(filteredBooks)
    
    favoriteHtml()
}


