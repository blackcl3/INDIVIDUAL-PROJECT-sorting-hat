export const changePageCSSFunction = () => {
  const mainTitle = document.querySelector(".main-title")
  mainTitle.innerHTML = `
    <h1 class=".main-title-header">Welcome to Hogwarts</h1>
      <img src="assets/Hogwartscrest.webp" alt="Hogwarts logo">
  `
}
