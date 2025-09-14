import { podcasts} from "../data.js"
import { openModal } from "./createmodal.js";
import { DateUtility } from "../utilities/dateutils.js";
import { exportGenre } from "../utilities/genreservice.js";
import { exportSeasons } from "../utilities/seasons.js";

/**
 * Dynamically renders podcast cards into a specified container on the main page.
 * Each card displays podcast details and opens a modal with more information on click.
 *
 * @param {string} podcastContainer - The ID of the container element where podcast cards should be rendered.
 *
 * @function
 * @export
 */

export function ExportToMain(podcastContainer) {
  const container$ = document.getElementById(podcastContainer);

  /**
   * Reference to the main container where cards will be inserted.
   * @type {HTMLElement}
   */

   // Clear any existing content in the container

  container$.innerHTML = "";

 // Loop through all podcast entries and render them

podcasts.forEach(card => {

 /**
     * Wrapper element for a single podcast card.
     * @type {HTMLDivElement}
     */

const cardContainer = document.createElement("div")
cardContainer.className =("cardContainer"); 

   // Set the inner HTML for the card
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

    // Attach event listener to open modal on click
  
  cardContainer.addEventListener("click", () => 
    openModal(card))
  
 // Append the card to the main container

  container$.appendChild(cardContainer);
 
     // Populate dynamic content using utility functions
   
  DateUtility(card.updated, `cardDate-${card.id}`);
  exportGenre(card.id, `cardGenre-${card.id}`);
  exportSeasons(card.id, `cardSeasons-${card.id}`);
  
});
}