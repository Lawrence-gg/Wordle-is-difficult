export const ADD_FULL_WORDLIST = 'ADD_FULL_WORDLIST'
export const RETURN_REMAINING_WORDS = 'RETURN_REAMINING_WORDS'

export const FULL_WORDLIST = (wordList) => {
  return {
    type: ADD_FULL_WORDLIST,
    wordList,
  }
}

export const REMAINING_WORDLIST = (wordList) => {
  return {
    type: RETURN_REMAINING_WORDS,
    wordList,
  }
}
