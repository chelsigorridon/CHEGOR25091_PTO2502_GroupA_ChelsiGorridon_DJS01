 import { genres} from "../data.js"

export function exportGenre(podcastId) {
  const genre$ = document.getElementById("`cardGenre-${podcastId}`");
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