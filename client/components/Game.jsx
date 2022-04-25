import React from 'react'
import WordsList from './WordsList'
import GuessForm from './GuessForm'

import { getTestWords } from '../api/wordApi'
const Game = () => {

  const handleClick = () => {
    getTestWords().then((words => {
      console.log('clicked')
      console.log(words);
    }))
  }
  
  return (
  <div className="game">
  <button onClick={handleClick}>Click me</button>
  <GuessForm />
  <WordsList />
  </div>
  )
}

export default Game
