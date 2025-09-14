import { genres } from "../data.js";

/**
 * Populates a DOM element with the genres associated with a given podcast ID.
 *
 * @param {string} podcastId - The ID of the podcast for which genres should be displayed.
 * @param {string} elementId - The ID of the DOM element where the genres will be inserted.
 *
 * @function
 * @export
 */
  
export function exportGenre(podcastId, elementId) {
  const genre$ = document.getElementById(elementId);
  if (!genre$) return;

  // Filter genres that include the current podcast ID

  const filteredGenres = genres.filter(g => g.shows.includes(podcastId));

  // Create a container for the genre tags
  const genreContainer = document.createElement("div");
  genreContainer.className = "genreContainer";

  // Generate genre tags and insert them into the container

  genreContainer.innerHTML = filteredGenres
    .map(g => `<span class="genre">${g.title}</span>`)
    .join("");

  genre$.innerHTML = "";
  genre$.appendChild(genreContainer);
}
