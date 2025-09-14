
 import { DateUtility } from "../utilities/dateutils.js";
 import { exportGenre } from "../utilities/genreservice.js";
 import { exportSeasons } from "../utilities/seasons.js";


   const modal = document.getElementById("modal");
   const modalContent$ = document.getElementById("modalContent");
   
   export function openModal (podcast) {
   modalContent$.innerHTML = "";
 
  const modalInfo = document.createElement("div");
  modalInfo.className = ("modalInfo");

  modalInfo.innerHTML = `
    <span id="close-modal-btn">&times;</span>
    <div class="podcastModal" data-podcast-id="${podcast.id}">
      <div class="modalImageContainer">
        <img class="modalImage" src="${podcast.image}" alt="podcast image">
      </div>
      <div class="modalPodcastInfo"> 
        <h3 class="modalPodcastTitle">${podcast.title}</h3> 
        <p class="modalPodcastDescription">${podcast.description}</p> 
        <div id="modalDate-${podcast.id}" class="cardDate"></div>
      </div>

      <h4>Genres:</h4> 
      <div id="modalGenre-${podcast.id}"></div>

      <h4>Seasons:</h4> 
      <p id="modalSeasons-${podcast.id}" class="podcastSeason"></p>
    </div>
     
    `;

   modalContent$.appendChild(modalInfo);
   modal.style.display = "flex";


  
  const closemodalBtn$ = modalContent$.querySelector("#close-modal-btn");
  closemodalBtn$.addEventListener("click", () => {
    modal.style.display = "none";
  });


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

  DateUtility(podcast.updated, `modalDate-${podcast.id}`);
  exportGenre(podcast.id, `modalGenre-${podcast.id}`);
  exportSeasons(podcast.id, `modalSeasons-${podcast.id}`);
}
