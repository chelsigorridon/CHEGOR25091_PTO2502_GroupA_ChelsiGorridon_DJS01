import { seasons } from "../data.js";

export function exportSeasons(podcastId, elementId) {
  const season$ = document.getElementById(elementId);
  if (!season$) return;

  const podcastSeasons = seasons.find(s => s.id === podcastId);
  if (!podcastSeasons) return;

  const seasonContainer = document.createElement("div");
  seasonContainer.className = "seasonContainer";

  seasonContainer.innerHTML = podcastSeasons.seasonDetails
    .map(season => `${season.title} (${season.episodes} episodes)`)
    .join("<br>");

 
  season$.appendChild(seasonContainer);

}