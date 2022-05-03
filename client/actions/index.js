export const ADD_FULL_WORDLIST = 'ADD_FULL_WORDLIST'
export const RETURN_REMAINING_WORDS = 'RETURN_REMAINING_WORDS'

export const GET_FULL_HISTORY = 'GET_FULL_HISTORY'

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

export const HISTORY = (guesses) => {
  return {
    type: GET_FULL_HISTORY,
    guesses,
  }
}
