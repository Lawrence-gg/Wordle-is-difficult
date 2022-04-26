import React from 'react'
import { Container, Grid, Card, TextField } from '@material-ui/core'
import CardContent from '@mui/material/CardContent'
import LetterBox from './LetterBox'

const GuessFormRow = () => {
  const letter="g" //TODO update letter
  return (
    <>
      <Grid container spacing={3} justifyContent="center" columns={12}>
        <Grid item sm={1} md={1}>
          <LetterBox letter={letter}/>
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
    </>
  )
}

export default GuessFormRow
