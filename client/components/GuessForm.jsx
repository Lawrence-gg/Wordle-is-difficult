import React from 'react'
import { Container, TextField } from '@material-ui/core'
import GuessFormRow from './GuessFormRow'
import { useState } from 'react'
const GuessForm = () => {
  const [guess, setGuess] = useState([])

  const handleChange = (e) => {
    const guessLetter = {
      letter: e.target.value.charAt(e.target.value.length -1),
      id: guess.length,
      isGray: true,
      isYellow: false,
      isGreen: false,
    }
    if (e.target.value.length < guess.length) {
      guess.pop()
      console.log(guess)
    }
    else if (guess.length === 5) {
      console.log('too long') //todo add error state
      console.log(guess);
    } 
    else {
    setGuess([...guess,guessLetter]);
    console.log(guess);
    }
  }
  

  const handleButtonClick = (e) => { //
    const parentId = e.target.parentElement.id
    console.log(e.target);

    console.log('clicked')
  }

  return (
    <div>
      <div className="form-wrapper">
        <form >
          <TextField 
          variant="outlined" 
          variantsize="medium" 
          label="word" 
          id="fullWidth"
           onChange={handleChange}/>
        </form>
      </div>
      <Container>
        <GuessFormRow guess={guess} button={handleButtonClick}/>
      </Container>
    </div>
  )
}

export default GuessForm
