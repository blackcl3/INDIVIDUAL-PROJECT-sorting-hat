import { renderToDom } from "../utils/renderToDom.js";

const buttonRow = () => {
  let domString = 
  `
  <button type="button" class="btn btn-primary" id="gryffindor--btn">Gryffindor</button>
  <button type="button" class="btn btn-primary" id="slytherin--btn">Slytherin</button>
  <button type="button" class="btn btn-primary" id="ravenclaw--btn">Ravenclaw</button>
  <button type="button" class="btn btn-primary" id="hufflepuff--btn">Hufflepuff</button>
  <button type="button" class="btn btn-primary" id="death-eaters--btn">Death Eaters</button>
  <button type="button" class="btn btn-primary" id="clear--btn">Clear</button>
  `
  renderToDom("#filter-btn-container", domString)
}

export default buttonRow; 
