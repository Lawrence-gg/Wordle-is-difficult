import React from 'react'
import WordsList from './WordsList'
import GuessForm from './GuessForm'

const Game = () => {
  return (
  <div className="game">
  <GuessForm />
  <WordsList />
  </div>
  )
}

export default Game
