import { podcasts,genres, seasons} from "./data.js";          
import { ExportToMain } from "./components/createpodcast.js";
import { openModal } from "./components/createmodal.js";



function initialize() {

  ExportToMain("podcastContainer");
  openModal("modal");
  
   

}

document.addEventListener("DOMContentLoaded", initialize);

console.log(podcasts,genres,seasons);