import { sortingHataData } from "../data/sortingHatData.js"; 
import cardRender from "../components/cardRender.js";
import buttonRow from "../components/buttonRender.js";
import formRender from "../components/formRender.js";

const startApp = () => {
  buttonRow()
  formRender()
  cardRender(sortingHataData)
}

startApp()
