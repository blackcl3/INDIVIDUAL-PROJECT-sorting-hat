import { renderToDom } from "../utils/renderToDom.js";

const cardRender = (arr, divId) => {
  let domString = "";
  for (const item of arr) {
    domString += `
    <div class="card card--${item.house.toLowerCase()}">
      <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.house}</p>
        ${item.isExpelled ? '<p class="card-text"><em>Expelled!</em></p>' : '<p>Enrolled</p>'}
        <button class="btn btn-danger" id="delete--${item.id}">Expelliarmus</button>
      </div>
    </div>
  `  
  }
  renderToDom(divId, domString)
}; 

export default cardRender; 
