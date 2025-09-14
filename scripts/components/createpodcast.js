import { podcasts} from "../data.js"
import { openModal } from "./createmodal.js";
import { DateUtility } from "../utilities/dateutils.js";
import { exportGenre } from "../utilities/genreservice.js";
import { exportSeasons } from "../utilities/seasons.js";

export function ExportToMain(podcastContainer) {
  const container$ = document.getElementById(podcastContainer);

  container$.innerHTML = "";

podcasts.forEach(card => {


const cardContainer = document.createElement("div")
cardContainer.className =("cardContainer"); 


cardContainer.innerHTML = `

<div class="podcastCard" data-podcast-id="${card.id}">
<div class ="imageContainer">
    <img class="podcastImage" src="${card.image || 'placeholder.jpg'}" alt="podcast image">
    </div>
    <div class="podcastInfo">
    <h3 class="podcastTitle">${card.title}</h3>
    <div id="cardGenre-${card.id}"></div>
    <div id="cardDate-${card.id}" class="cardDate"> </div>
   
    
    </div>


</div>


  `;


  
  cardContainer.addEventListener("click", () => 
    openModal(card))
  

  container$.appendChild(cardContainer);
  DateUtility(card.updated, `cardDate-${card.id}`);
  exportGenre(card.id, `cardGenre-${card.id}`);
  exportSeasons(card.id, `cardSeasons-${card.id}`);
  
});
}