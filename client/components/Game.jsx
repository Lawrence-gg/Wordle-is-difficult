import React, {useState} from 'react'
import WordsList from './WordsList'
import GuessForm from './GuessForm'
import { Typography } from '@material-ui/core'

const Game = () => {

  return (
  <div className="game">
  <GuessForm />
  <WordsList />
  </div>
  )
}

export default Game
