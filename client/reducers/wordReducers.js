import { RETURN_REMAINING_WORDS, ADD_FULL_WORDLIST } from '../actions'

const initailWordList = []

function wordReducer(currentState = initailWordList, action) {
  switch (action.type) {
    case ADD_FULL_WORDLIST:
      return [...currentState, 1 + 1]

    default:
      return [...currentState]
  }
}

export default wordReducer
