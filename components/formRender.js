import { renderToDom } from "../utils/renderToDom.js";

const formRender = () => {
  let domString = 
  `<form id="nameInputForm" class-="name-form>
        <div class="form-floating">
          <label for="nameInputTextArea" class="form-label">Enter Your Name Here</label>
          <textarea class="form-control" id="nameInputTextArea" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary form-button">Submit</button>
    </form>
  `
  renderToDom("#name-form-container", domString)
}

export default formRender;
