import cardRender from "../components/cardRender.js";
import formRender from "../components/formRender.js";
import { deathEaterData, sortingHataData } from "../data/reference.js"
import randomFunction from "./randomFunction.js";
import { visibilityFunction } from "./visibilityFunction.js";

const eventListeners = () => {
  const addName = document.querySelector("#nameInputForm");
  console.log(addName)
  addName.addEventListener("submit", (e) => {
    if(e) {
      e.preventDefault()
      const value = e.target[0].value; 
      console.log(e)
      console.log(value)
      const newStudent = {
        id: sortingHataData[sortingHataData.length-1].id+1, 
        name: value, 
        house: randomFunction(), 
        isExpelled: false, 
        imageURL: ""
      }
      sortingHataData.push(newStudent)
      cardRender(sortingHataData, "#card-container")
      visibilityFunction("#card-container")
      visibilityFunction("filter-btn-container")
      addName.reset()
    }
  })
  const buttonEventListener = document.querySelector("#filter-btn-container"); 
  buttonEventListener.addEventListener("click", (e) => { 
    if(e.target.id === "gryffindor--btn") { 
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "gryffindor")
      cardRender(newArr, "#card-container")
    } else if (e.target.id === "slytherin--btn"){
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "slytherin")
      cardRender(newArr, "#card-container")
    } else if (e.target.id === "ravenclaw--btn") {
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "ravenclaw")
      cardRender(newArr, "#card-container")
    } else if (e.target.id === "hufflepuff--btn") {
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "hufflepuff")
      cardRender(newArr, "#card-container")
    } else if (e.target.id === "death-eaters--btn") {
      const newArr = []
      cardRender(newArr, "#card-container")
      cardRender(deathEaterData, "#death-eaters-card-container")
    } else if (e.target.id === "clear--btn") {
      cardRender(sortingHataData, "#card-container")
      cardRender(deathEaterData, "#death-eaters-card-container")
    }
  })
  const cardExpelListener = document.querySelector("#card-container"); 
  cardExpelListener.addEventListener("click", (e) => {
    if(e.target.id.includes("delete")) {
      const [method, id] = e.target.id.split("--"); 
      const index = sortingHataData.findIndex((obj) => obj.id === Number(id))
      const expelledStudent = sortingHataData.splice(index, 1)
      console.log(expelledStudent)
      cardRender(sortingHataData, "#card-container")
      deathEaterData.push(...expelledStudent)
      cardRender(deathEaterData, "#death-eaters-card-container")
    }
  })

}



export default eventListeners; 
