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

  const podcastSeasons = seasons.find(s => s.id === podcastId);
  if (!podcastSeasons) return;

 // Populate the container with formatted season details

  const seasonContainer = document.createElement("div");
  seasonContainer.className = "seasonContainer";

  seasonContainer.innerHTML = podcastSeasons.seasonDetails
    .map(season => `${season.title} (${season.episodes} episodes)`)
    .join("<br>");

 
  season$.appendChild(seasonContainer);

}
