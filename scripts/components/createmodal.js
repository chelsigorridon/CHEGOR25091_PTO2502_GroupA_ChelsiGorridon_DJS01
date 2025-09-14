 import { DateUtility } from "../utilities/dateutils.js";
 import { exportGenre } from "../utilities/genreservice.js";
 import { exportSeasons } from "../utilities/seasons.js";

   /**
 * Reference to the modal container element.
 * @type {HTMLElement}
 */ 

   const modal = document.getElementById("modal");
   const modalContent$ = document.getElementById("modalContent");
   
 /**
 * Reference to the modal content container.
 * @type {HTMLElement}
 */

 /**
 * Opens a modal displaying detailed information about a podcast.
 *
 * @param {Object} podcast - The podcast object containing data to display.
 * @param {string} podcast.id - Unique identifier for the podcast.
 * @param {string} podcast.title - Title of the podcast.
 * @param {string} podcast.image - URL to the podcast image.
 * @param {string} podcast.description - Description of the podcast.
 * @param {string|Date} podcast.updated - Last updated date of the podcast.
 *
 * @function
 * @export
 */

   export function openModal (podcast) {
   modalContent$.innerHTML = "";
 
  const modalInfo = document.createElement("div");
  modalInfo.className = ("modalInfo");

  modalInfo.innerHTML = `
    <span id="close-modal-btn">&times;</span>
    <div class="podcastModal" data-podcast-id="${podcast.id}">
    <h3 class="modalPodcastTitle">${podcast.title}</h3> 
      <div class="modalImageContainer">
        <img class="modalImage" src="${podcast.image || 'placeholder.jpg'}" alt="podcast image">
      </div>
      <div class="modalPodcastInfo"> 
        
        <p class="modalPodcastDescription">${podcast.description}</p> 
        <div id="modalDate-${podcast.id}" class="cardDate"></div>
        <h4>Genres:</h4> 
      <div id="modalGenre-${podcast.id}"></div>
      </div>


      <h4>Seasons:</h4> 
      <div id="modalSeasons-${podcast.id}" class="seasonContainer"></div>
      <div class="seasonCard">
        <h4>${podcast.id}</h4>
        <p>${podcast.id} episodes</p>
      </div>
    </div>
     
    `;

    

     // Append the modal content to the modal container

   modalContent$.appendChild(modalInfo);
   
   modal.style.display = "flex"; 

   // Click Close button 

  const closemodalBtn$ = modalContent$.querySelector("#close-modal-btn");
  closemodalBtn$.addEventListener("click", () => {
    modal.style.display = "none";
  });

// Close modal when clicking outside the content

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
   
   // Populate modal with dynamic podcast info   

  DateUtility(podcast.updated, `modalDate-${podcast.id}`);
  exportGenre(podcast.id, `modalGenre-${podcast.id}`);
  exportSeasons(podcast.id, `seasonCard-${podcast.id}`);
}