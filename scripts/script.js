import { openModal } from "./components/createmodal.js";
import { ExportToMain } from "./components/createpodcast.js";


function initialize() {

  ExportToMain("podcastContainer");
  openModal("modal")
 
}

document.addEventListener("DOMContentLoaded", initialize);