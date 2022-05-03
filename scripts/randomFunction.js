const randomFunction = () => {
  const randomValue = Math.random()
  console.log(randomValue)
  if(randomValue < 0.25) {
    return "Hufflepuff"
  } else if (randomValue >= 0.25 && randomValue < 0.5) {
    return "Gryffindor"
  } else if (randomValue >= 0.5 && randomValue < 0.75) {
    return "Slytherin"
  } else if (randomValue >= 0.75 && randomValue < 1) {
    return "Ravenclaw"
  }
}

export default randomFunction; 
