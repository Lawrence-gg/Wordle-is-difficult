import React from 'react'
import { Container, Grid, Card, TextField } from '@material-ui/core'
import CardContent from '@mui/material/CardContent'
import LetterBox from './LetterBox'

const GuessFormRow = ({guess}) => {
  const letter="g" //TODO update letter
  return (
    <>
      <Grid container spacing={3} justifyContent="center" rows={5}>
        <Grid item sm={1} md={1}>
          <LetterBox letter={guess}/>
          <div className="letterBox-div">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </Grid>
        <Grid item sm={1} md={1}>
          <LetterBox />
          <div className="letterBox-div">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </Grid>
        <Grid item sm={1} md={1}>
          <LetterBox />
          <div className="letterBox-div">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </Grid>
        <Grid item sm={1} md={1}>
          <LetterBox />
          <div className="letterBox-div">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </Grid>
        <Grid item sm={1} md={1}>
          <LetterBox />
          <div className="letterBox-div">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default GuessFormRow
