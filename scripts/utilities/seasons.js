 import { seasons} from "../data.js"

export function exportSeasons (podcastId, elementId) {
  const seasons$ = document.getElementById(elementId);
  seasons$.innerHTML = "";

  const seasonsContainer = document.createElement("div");
  seasonsContainer.className = "seasons_Container";

  const seasonList = seasons
      .filter(s => s.seasonDetails.includes(podcastId)) 
      .map(s => s.title)
      .join(", ");
  
    seasonsContainer.innerHTML = `<p>${seasonList}</p>`;
  
    seasons$.appendChild(seasonsContainer);
  }