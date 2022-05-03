import request from 'superagent'

//Words
export const ADD_FULL_WORDLIST = 'ADD_FULL_WORDLIST'
export const RETURN_REMAINING_WORDS = 'RETURN_REMAINING_WORDS'

//Guesses
export const REQUEST_HISTORY = 'REQUEST_HISTORY'
export const GET_FULL_HISTORY = 'GET_FULL_HISTORY'

export function FULL_WORDLIST(wordList) {
  return {
    type: ADD_FULL_WORDLIST,
    wordList,
  }
}

export function REMAINING_WORDLIST(wordList) {
  return {
    type: RETURN_REMAINING_WORDS,
    wordList,
  }
}

export function recieveHistory(guesses) {
  return {
    type: GET_FULL_HISTORY,
    guesses,
  }
}

export function requestHistory() {
  return {
    type: REQUEST_HISTORY,
  }
}

//thunks
export function fetchHistory() {
  return (dispatch) => {
    dispatch(requestHistory())
    return request
      .get('/api/history')
      .then((res) => {
        dispatch(recieveHistory(res.body))
        return null
      })
      .catch((err) => {
        return res.status(500).err.message
      })
  }
}
