 import { podcasts,genres, seasons } from "../data.js"
import { openModal } from "./createmodal.js";
import { DateUtility } from "../utilities/dateutils.js";
import { exportGenre } from "../utilities/genreservice.js";

export function ExportToMain(podcastContainer) {
  const container$ = document.getElementById(podcastContainer);

  container$.innerHTML = "";

podcasts.forEach(card => {
    
const cardContainer = document.createElement("div")
cardContainer.className =("cardContainer");
    
cardContainer.innerHTML = `

<div class="podcastCard" data-podcast-id="${card.id}">
<div class ="imageContainer">
    <img class="podcastImage" src="${card.image}" alt="podcast image">
    </div>
    <div class="podcastInfo">
    <h3 class="podcastTitle">${card.title}</h3>
    <p class="podcastSeason">${cardSeasons}</p>
    <div id="cardGenre-${card.id}"></div>
    <div id="cardDate-${card.id}"></div>
    <div id="cardSeasons-${card.id}"></div>
    
    
    
   

    </div>


</div>

  `;

  
  cardContainer.addEventListener("click", () => 
    openModal(card.id))
  

  container$.appendChild(cardContainer);
  DateUtility(card.updated, `cardDate-${card.id}`);
  exportGenre(card.id, `cardGenre-${card.id}`);
  exportGenre(card.id, `cardSeasons-${card.id}`);
});
}