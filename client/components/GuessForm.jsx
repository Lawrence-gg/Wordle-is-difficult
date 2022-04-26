import React from 'react'
import { Container } from '@material-ui/core'
import GuessFormRow from './GuessFormRow'
const GuessForm = () => {
  return (
    <div>
      <Container>
        <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
        <GuessFormRow />
      </Container>
    </div>
  )
}

export default GuessForm
