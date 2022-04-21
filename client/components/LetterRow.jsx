import React from 'react'
import LetterBox from './LetterBox'
import { Container, Grid, Card, TextField } from '@material-ui/core'
const LetterRow = () => {
  return (
    <div>
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
    </div>
  )
}

export default LetterRow
