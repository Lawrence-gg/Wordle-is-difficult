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

module.exports = {
  convertToArray,
  convertToString,
  wordifyGuess,
}
