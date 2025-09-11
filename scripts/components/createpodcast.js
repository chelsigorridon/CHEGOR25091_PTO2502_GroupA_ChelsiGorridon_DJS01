import { podcasts } from "../data.js"

export function ExportToMain(MainLayout) {
  const container$ = document.getElementById(MainLayout);

  container$.innerHTML = "";

podcasts.forEach(card => {
    
const podcastContainer = document.createElement("div")
podcastContainer.className =("podcastContainer");

podcastContainer.innerHTML = `
<div>
<div class ="imageContainer">
    <img class="podcastImage" src="${card.image}" alt="podcast image">
    </div>
    <div class="podcastInfo">
    <h3 class="podcastTitle">${card.title}</h3>
    <p class="podcastSeason">${card.seasons}</p>
    <p class="podcastDescription">${card.description}</p>
    <p class="podcastGenre">${card.genres}</p>
    <p class="podcastDate">${card.updated}</p>

    </div>
</div>

  `;

  podcastContainer.addEventListener("click", () => {
    console.log(`${card.title} clicked`);
  });

  container$.appendChild(podcastContainer);
});
}