 
 import { podcasts, genres, seasons } from "../data.js"
 
   const modal = document.getElementById("modal");
   const modalContent$ = document.getElementById("modalContent");
   const closemodalBtn$ = document.getElementById("close-modal-btn");


   export function openModal (podcast) {
  
     
  modalContent$.innerHTML = "";
 
  const modalInfo = document.createElement("div");
  modalInfo.className = ("modalInfo");

  modalInfo.innerHTML = `
    <div class="modalImageContainer"> <img class="modalImage" src="${podcast.image}" alt="podcast image"> </div> 
    <div class="modalPodcastInfo"> 
    <h3 class="modalPodcastTitle">${podcast.title}</h3> 
    <p class="modalPodcastDescription">${podcast.description}</p> 
    <p class="modalPodcastGenre">Genre: ${podcast.genres}</p> 
    <p class="modalPodcastDate">Updated: ${podcast.updated}</p>
<h4>Genres:</h4> 
<ul>
  ${genres
    .filter(g => g.podcastId === podcast.id)
    .map(g => `<li>${g.name}</li>`)
    .join("")}
</ul>

<h4>Seasons:</h4> 
<ul>
  ${seasons
    .filter(s => s.podcastId === podcast.id)
    .map(s => `<li>${s.seasonDetails}</li>`)
    .join("")}
</ul>
    
    `;
   
   modal.style.display = "flex";
  modalContent$.appendChild(modalInfo);
 

  };

 closemodalBtn$.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
