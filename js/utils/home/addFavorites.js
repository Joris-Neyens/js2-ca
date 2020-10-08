import { getFavoritesArray } from "../favorites/storeFavorites.js";
import { setFavorites } from "../favorites/storeFavorites.js";


export function selectFavorites() {
    this.classList.toggle("far");
    this.classList.toggle("fas");
  
    const id = this.dataset.id;
    const title = this.dataset.title;
    const author = this.dataset.author;
    const ranking = this.dataset.ranking;
  
    const currentFavorites = getFavoritesArray();
  
    const bookExists = currentFavorites.find(function(favorites) {
      return favorites.id === id;
    });
  
    if (!bookExists) {
      const newFavorite = {
        id: id,
        title: title,
        author: author,
        ranking: ranking,
      };
  
      currentFavorites.push(newFavorite);
  
      setFavorites(currentFavorites);
    } else {
      const newFavorites = currentFavorites.filter(
        (favorites) => favorites.id !== id) 
      {
        setFavorites(newFavorites);
      } 
    }
  }