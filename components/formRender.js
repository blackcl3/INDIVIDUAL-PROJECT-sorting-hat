import { renderToDom } from "../utils/renderToDom.js";

const formRender = () => {
  let domString = 
  `<form id="nameInputForm">
        <div class="form-floating">
          <label for="nameInputTextArea">Enter Your Name Here</label>
          <textarea class="form-control" placeholder="Enter Your Name Here" id="nameInputTextArea" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
  renderToDom("#name-form-container", domString)
}

export default formRender;
