import cardRender from "../components/cardRender.js";
import formRender from "../components/formRender.js";
import { sortingHataData } from "../data/reference.js"

const eventListeners = () => {
  const addName = document.querySelector("#nameInputForm");
  console.log(addName)
  addName.addEventListener("submit", (e) => {
    if(e) {
      e.preventDefault()
      const value = e.target[0].value; 
      console.log(e)
      console.log(value)
      //return value or run function to create new object
      // needs to run randomizer function here
      const newStudent = {
        id: sortingHataData[sortingHataData.length-1].id+1, 
        name: value, 
        house: "Hufflepuff", 
        isExpelled: false, 
        imageURL: ""
      }
      sortingHataData.push(newStudent)
      cardRender(sortingHataData)
      addName.reset()
    }
  })
  const buttonEventListener = document.querySelector("#filter-btn-container"); 
  buttonEventListener.addEventListener("click", (e) => { 
    if(e.target.id === "gryffindor--btn") { 
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "gryffindor")
      cardRender(newArr)
    } else if (e.target.id === "slytherin--btn"){
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "slytherin")
      cardRender(newArr)
    } else if (e.target.id === "ravenclaw--btn") {
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "ravenclaw")
      cardRender(newArr)
    } else if (e.target.id === "hufflepuff--btn") {
      const newArr = sortingHataData.filter(house => house.house.toLowerCase() === "hufflepuff")
      cardRender(newArr)
    } else if (e.target.id === "death-eaters--btn") {
      console.log("clicked death eaters button")
    } else if (e.target.id === "clear--btn") {
      cardRender(sortingHataData)
    }
  })
}
  // const cardExpelListener = document.querySelector()


export default eventListeners; 
