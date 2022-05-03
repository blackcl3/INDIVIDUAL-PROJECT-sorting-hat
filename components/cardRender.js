import { renderToDom } from "../utils/renderToDom.js";

const cardRender = (arr, divId) => {
  let domString = "";
  for (const item of arr) {
    domString += `
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.house}</p>
        <button class="btn btn-danger" id="delete--${item.id}">Expel</button>
      </div>
    </div>
  `  
  }
  renderToDom(divId, domString)
}; 

export default cardRender; 
