import { renderToDom } from "../utils/renderToDom.js";

const cardRender = (arr) => {
  let domString = "";
  for (const item of arr) {
    domString += `
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.house}</p>
        <button class="btn btn-primary">Delete</button>
      </div>
    </div>
  `  
  }
  renderToDom("#card-container", domString)
}; 

export default cardRender; 
