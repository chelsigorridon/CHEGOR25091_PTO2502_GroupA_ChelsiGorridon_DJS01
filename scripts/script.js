import { podcasts,genres, seasons} from "./data.js";          
import { ExportToMain } from "./components/createpodcast.js";
import { openModal } from "./components/createmodal.js";
import { DateUtility } from "./utilities/dateutils.js";
import { exportGenre } from "./utilities/genreservice.js";



function initialize() {

  ExportToMain("podcastContainer");
  openModal("modal");
  DateUtility("dateString")
  exportGenre ("podcastId, elementId");
  
  
   

}

document.addEventListener("DOMContentLoaded", initialize);

console.log(podcasts,genres,seasons);