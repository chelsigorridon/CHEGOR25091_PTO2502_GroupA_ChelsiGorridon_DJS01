import { ExportToMain } from "./components/createpodcast.js";
import { openModal } from "./components/createmodal.js";
import { DateUtility } from "./utilities/dateutils.js";
import { exportGenre } from "./utilities/genreservice.js";



function initialize() {

  ExportToMain("podcastContainer");
  openModal("modal")
 




}

document.addEventListener("DOMContentLoaded", initialize);