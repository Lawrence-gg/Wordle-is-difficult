import React from 'react'
import { useEffect } from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

const GuessFormRow = ({guess, button}) => {

  useEffect(() => {
  },[guess])

  return (
    <>
      <Grid container spacing={3} justifyContent="center" columns={5}>
      {guess.map((letter, i) => {
       return(
       <Grid item sm={1} md={1} key={i}>
       <Card>
        <CardContent>
          <Typography variant="h4">{letter.letter}</Typography>
        </CardContent>
      </Card>
          <div className="letterBox-div" id="1">
            <button onClick={button}>test</button>
            <button></button>
            <button></button>
          </div>
        </Grid>
       )
      })}
      </Grid>
    </>
  )
}

export default GuessFormRow
