import { RETURN_REMAINING_WORDS, ADD_FULL_WORDLIST } from '../actions'

const initailWordList = []

function wordReducer(currentState = initailWordList, action) {
  switch (action.type) {
    case ADD_FULL_WORDLIST:
      return [...initailWordList, action.wordList]
    case RETURN_REMAINING_WORDLIST:
      return [action.wordList]
  }
}

export default wordReducer
