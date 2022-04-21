import React from 'react'
import { Grid, Paper, Container } from '@material-ui/core'

const WordsList = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item md={1}>
            <Paper>Save</Paper>
          </Grid>
          <Grid item md={1}>
            <Paper>Elate</Paper>
          </Grid>
          <Grid item>
            <Paper>Brave</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default WordsList
