const eventListeners = () => {
  const addName = document.querySelector("#nameInputForm");
  console.log(addName)
  addName.addEventListener("submit", (e) => {
    if(e) {
      e.preventDefault()
      // const value = textarea.value; 
      console.log(value)
    }
  })
}

export default eventListeners; 
