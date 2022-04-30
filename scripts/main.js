import { sortingHataData } from "../data/sortingHatData.js"; 
import cardRender from "../components/cardRender.js";
import buttonRow from "../components/buttonRender.js";

const startApp = () => {
  buttonRow()
  cardRender(sortingHataData)
}

startApp()
