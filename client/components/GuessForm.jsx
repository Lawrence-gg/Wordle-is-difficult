import React from 'react'
import { Container, Grid, Card, TextField } from '@material-ui/core'
import CardContent from '@mui/material/CardContent'
import LetterBox from './LetterBox'
const GuessForm = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item sm={1} md={1}>
            <LetterBox />
          </Grid>
          <Grid item sm={1} md={1}>
            <LetterBox />
          </Grid>
          <Grid item sm={1} md={1}>
            <LetterBox />
          </Grid>
          <Grid item sm={1} md={1}>
            <LetterBox />
          </Grid>
          <Grid item sm={1} md={1}>
            <LetterBox />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default GuessForm
