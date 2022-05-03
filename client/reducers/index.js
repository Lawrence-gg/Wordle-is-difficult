import { combineReducers } from 'redux'
import wordReducer from './wordReducers'
import guessReducer from './guessReducers'

export default combineReducers({
  wordReducer,
  guessReducer,
})
