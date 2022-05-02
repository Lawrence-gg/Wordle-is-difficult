convertToArray = (obj) => {
  const arr = []
  obj.forEach((o) => arr.push(o.letter))
  return arr
}

convertToString = (arr) => {
  return arr.join('')
}

wordifyGuess = (guessObject) => {
  const array = convertToArray(guessObject)
  return convertToString(array)
}

searchifyGuess = (guessObject) => {
  const searchArr = []
  guessObject.forEach((o) => {
    console.log(o)
    const gray = ''
    const yellow = ''
    const green = ''
  })
}

module.exports = {
  convertToArray,
  convertToString,
  wordifyGuess,
  searchifyGuess,
}
