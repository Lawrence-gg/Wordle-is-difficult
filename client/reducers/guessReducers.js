import { GET_FULL_HISTORY } from '../actions'

const initialGuesses = []

function guessReducer(currentState = initialGuesses, action) {
  switch (action.type) {
    case GET_FULL_HISTORY:
      return [...currentState, action.guesses]

    default:
      return [...currentState]
  }
}

export default guessReducer
