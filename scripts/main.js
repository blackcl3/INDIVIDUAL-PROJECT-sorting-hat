import { sortingHataData } from "../data/sortingHatData.js"; 
import cardRender from "../components/cardRender.js";
import buttonRow from "../components/buttonRender.js";
import formRender from "../components/formRender.js";
import eventListeners from "./eventListeners.js";

const startApp = () => {
  formRender()
  buttonRow()
  formRender()
  cardRender(sortingHataData)
  eventListeners()
}

window.onload = function() {
  startApp()
}
