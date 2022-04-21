import React from 'react'
import { Grid,Paper, Container} from '@material-ui/core'


const Game = () => {
  return (
  <div className="game">
    <Container>
      <Grid container>
        <Grid item md={1}>
          <Paper>Save</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper>Elate</Paper>
        </Grid>
        <Grid item>
          <Paper>C</Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
  )
}

export default Game
