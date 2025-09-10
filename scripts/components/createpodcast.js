import { podcasts } from "../scripts/data.js";



const podcastContainer = document.createElement("div")
podcastContainer.className ="podcastContainer"

podcastContainer.innerHTML = `
<div>
<div class ="imageContainer">
    <img class="podcastImage" src="${podcasts.image}" alt="podcast image">
    </div>
    <div class="podcastInfo">
    <h3 class="podcastTitle">${podcasts.title}</h3>
    <p class="podcastSeason">${podcasts.season}</p>"
    <p class="podcastDescription">${podcasts.description}</p>
    </div>
</div>`

podcastContainer.addEventListener("click", () => {
    console.log("Podcast clicked");
})