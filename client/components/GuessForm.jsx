import React, { useState } from 'react'
import { Container, TextField, Box, Button } from '@material-ui/core'
import GuessFormRow from './GuessFormRow'

import { useSelector, useDispatch } from 'react-redux'

import { convertToArray, convertToString, wordifyGuess } from '../utils/utils'
import { postGuess } from '../api/wordApi'
const GuessForm = () => {
  const dispatch = useDispatch()
  //useSelector goes here
  const [guess, setGuess] = useState([])
  const [testing, setTesting] = useState(false)

  const handleChange = (e) => {
    const guessLetter = {
      letter: e.target.value.charAt(e.target.value.length - 1),
      id: guess.length,
      isGray: true,
      isYellow: false,
      isGreen: false,
    }
    if (e.target.value.length < guess.length) {
      guess.pop()
    } else if (guess.length === 5) {
      console.log('too long') //todo add error state
    } else {
      setGuess([...guess, guessLetter])
    }
  }

  const handleButtonClick = (e) => {
    //
    const parentId = e.target.parentElement.id
    const color = e.target.className
    updateLetterColor(parentId, color)
  }

  const handleSubmit = () => {
    const wordified = wordifyGuess(guess)
    console.log({ word: wordified })
    wordified.length === 5
      ? postGuess({ wordified })
      : alert('Incorrect format. Guesses should be 5 characters long')
    console.log('submit button clicked')
  }

  const updateLetterColor = (id, color) => {
    console.log('updateletter')
    if (color === 'gray') {
      guess[id].isGray = true
      guess[id].isYellow = false
      guess[id].isGreen = false
      document.querySelector(`.card${id}`).classList.add('card-gray')
    } else if (color === 'yellow') {
      guess[id].isGray = false
      guess[id].isYellow = true
      guess[id].isGreen = false
      document.querySelector(`.card${id}`).classList.add('card-yellow')
    } else {
      guess[id].isGray = false
      guess[id].isYellow = false
      guess[id].isGreen = true
      document.querySelector(`.card${id}`).classList.add('card-green')
    }
  }

  const testButtonClick = () => {
    console.log('test clicked')
    searchifyGuess(guess)
  }

  return (
    <div>
      <div className="form-wrapper">
        {testing ? (
          <Button onClick={testButtonClick}>Test Button</Button>
        ) : (
          <></>
        )}
        <form>
          <TextField
            variant="outlined"
            variantsize="medium"
            label="word"
            id="fullWidth"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} variant="outlined">
            Submit
          </Button>
        </form>
      </div>
      <Container>
        <GuessFormRow guess={guess} button={handleButtonClick} />
      </Container>
    </div>
  )
}

export default GuessForm
