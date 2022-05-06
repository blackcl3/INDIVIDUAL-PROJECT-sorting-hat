import { renderToDom } from "../utils/renderToDom.js";

const cardRender = (arr, divId) => {
  let domString = "";
  if (divId === "#card-container") {
    domString += `<h2 class="enrolled-student-heading">Enrolled Students</h2>`
  } else if (divId ==="#death-eaters-card-container") {
    domString += `<h2 class="death-eater-heading">Death Eaters</h2>`
  }
  for (const item of arr) {
    domString += `
    <div class="card card--${item.house.toLowerCase()}">
      <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.house}</p>
        ${item.isExpelled ? '<p class="card-text"><em>Death Eater</em></p>' : '<p>Enrolled</p>'}
        <button class="btn btn-danger" id="delete--${item.id}">Expelliarmus</button>
      </div>
    </div>
  `  
  }
  renderToDom(divId, domString)
}; 

export default cardRender; 
