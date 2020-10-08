export function setFavorites(favorite) {
  localStorage.setItem("favorites", JSON.stringify(favorite));
}

export function getFavoritesArray() {
  const favorites = localStorage.getItem("favorites");

  if (!favorites) {
    return [];
  } else {
    return JSON.parse(favorites);
  }
}
