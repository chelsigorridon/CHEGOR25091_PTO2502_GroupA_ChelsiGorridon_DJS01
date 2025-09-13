 import { genres} from "../data.js"

export function exportGenre (Genre, elementId) {
  const genre$ = document.getElementById(elementId);
  genre$.innerHTML = "";

  const genreContainer = document.createElement("div");
  genreContainer.className = "genre_Container";