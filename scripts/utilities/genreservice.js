import { genres } from "../data.js";

export function exportGenre(podcastId, elementId) {
  const genre$ = document.getElementById(elementId);
  if (!genre$) return;

  const filteredGenres = genres.filter(g => g.shows.includes(podcastId));

  const genreContainer = document.createElement("div");
  genreContainer.className = "genreContainer";

  genreContainer.innerHTML = filteredGenres
    .map(g => `<span class="genre">${g.title}</span>`)
    .join(", ");

  genre$.innerHTML = "";
  genre$.appendChild(genreContainer);
}