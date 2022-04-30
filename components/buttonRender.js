import { renderToDom } from "../utils/renderToDom.js";

const buttonRow = () => {
  let domString = 
  `
  <button type="button" class="btn btn-primary">Gryffindor</button>
  <button type="button" class="btn btn-primary">Slytherin</button>
  <button type="button" class="btn btn-primary">Ravenclaw</button>
  <button type="button" class="btn btn-primary">Hufflepuff</button>
  <button type="button" class="btn btn-primary">Death Eaters</button>
  <button type="button" class="btn btn-primary">Clear</button>
  `
  renderToDom("#filter-btn-container", domString)
}

export default buttonRow; 
