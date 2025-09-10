import { podcasts } from "./data.js";                 // same folder
import { ExportToMain } from "./components/createpodcast.js";


function initialize() {

  ExportToMain("podcastContainer");
   

}

document.addEventListener("DOMContentLoaded", initialize);

console.log(podcasts);