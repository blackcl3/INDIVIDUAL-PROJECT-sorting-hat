import { renderToDom } from "../utils/renderToDom.js";

const formRender = () => {
  let domString = 
  `<form>
    <div class="form-floating">
      <label for="floatingTextarea">Enter Your Name Here</label>
      <textarea class="form-control" placeholder="Enter Your Name Here" id="floatingTextarea" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
  renderToDom("#name-form-container", domString)
}

export default formRender;
