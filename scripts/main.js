import { sortingHataData, deathEaterData } from "../data/reference.js"; 
import cardRender from "../components/cardRender.js";
import buttonRow from "../components/buttonRender.js";
import formRender from "../components/formRender.js";
import eventListeners from "./eventListeners.js";
import { visibilityFunction } from "./visibilityFunction.js";

const openPage = () => {
  formRender()
}

const startApp = () => {
  formRender()
  // buttonRow()
  // cardRender(sortingHataData, "#card-container")
  // visibilityFunction("#card-container")
  // visibilityFunction("#filter-btn-container")
  eventListeners()
}


startApp()
