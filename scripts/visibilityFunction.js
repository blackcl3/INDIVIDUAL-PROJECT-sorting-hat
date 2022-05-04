export const visibilityFunction = (div) => {
  const divSelector = document.querySelector(div)
  console.log(divSelector.style.display)
    // divSelector.style.visibility === "visible"
  // divSelector.style.visibility = "hidden"; 
  if(divSelector.style.visibility === "hidden" || divSelector.style.visibility === null) {
    divSelector.style.display = "visible"
  } else if (divSelector.style.visibility === "visible") {
    divSelector.style.display = "hidden"
  }
  // } else if (divSelector.style.visibility === "hidden"){
  //   divSelector.style.visibility = "visible"; 

// }
}
