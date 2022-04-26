import React from 'react'
import { Container, TextField } from '@material-ui/core'
import GuessFormRow from './GuessFormRow'
import { useState } from 'react'
const GuessForm = () => {
  const [guess, setGuess] = useState([])

  const handleChange = (e) => {
    console.log(guess.length);
    const guessLetter = {
      letter: e.target.value.charAt(e.target.value.length -1),
      id: guess.length,
      isGray: true,
      isYellow: false,
      isGreen: false,
    }
    setGuess([...guess,guessLetter]);
    console.log(guess);

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
        <GuessFormRow guess={guess}/>
      </Container>
        {/* <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
      </Container> */}
    </div>
  )
}

export default GuessForm
