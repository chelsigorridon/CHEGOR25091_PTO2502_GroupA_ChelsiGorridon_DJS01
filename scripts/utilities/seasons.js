import { seasons } from "../data.js"

/**
 * Displays the season information for a specific podcast in the specified DOM element.
 *
 * @param {string} podcastId - The ID of the podcast for which to display seasons.
 * @param {string} elementId - The ID of the DOM element where the season data will be rendered.
 *
 * @function
 * @export
 */

export function exportSeasons(podcastId, elementId) {           

/**
   * The target DOM element where the seasons will be rendered.
   * @type {HTMLElement|null}
   */

  const season$ = document.getElementById(elementId);
  if (!season$) return;

 // Find the season data for the given podcast ID

   const podcastSeasons = seasons.filter(s => s.podcastId === podcastId);
  if (podcastSeasons.length === 0) return;

  const seasonContainer = document.createElement("div");
  seasonContainer.className = "seasonContainer";

  // Build season cards
  seasonContainer.innerHTML = podcastSeasons
   .flatMap(podcast => podcast.seasonDetails)
    .map(season => `
      <div class="seasonCard">
        <h4>${season.title}</h4>
        <p>${season.episodes} episodes</p>
      </div>
    `)
    .join("");
 
  season$.innerHTML = "";  
  season$.appendChild(seasonContainer);

}
