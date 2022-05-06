export const changePageCSSFunction = () => {
  const mainTitle = document.querySelector(".main-title")
  const cardContainer = document.querySelector(".card-container-div")
  mainTitle.innerHTML = `
    <h1 class=".main-title-header">Welcome to Hogwarts</h1>
      <img src="assets/Hogwartscrest.webp" alt="Hogwarts logo">
  `
  mainTitle.style.border = "1px solid #373737"; 
  mainTitle.style.background = "#c7dff4";
  mainTitle.style.color = "#ee3042"; 
  cardContainer.style.border = "1px solid #373737"; 
  cardContainer.style.padding = "10px"
}
