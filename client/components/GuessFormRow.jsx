import React from 'react'
import { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import { display } from '@mui/system'

const GuessFormRow = ({guess, button}) => {

  useEffect(() => {
    setDisplayLetter(guess)
    console.log(displayLetter);
  },[guess])

  const [displayLetter,setDisplayLetter] = useState([])

  return (
    <>
      <Grid container spacing={3} justifyContent="center" columns={5}>
      {displayLetter && displayLetter.map((letter, i) => {
       return(
       <Grid item sm={1} md={1} key={i}>
       <Card>
        <CardContent className={"card"+i}>
          <Typography variant="h4">{letter.letter}</Typography>
        </CardContent>
      </Card>
          <div className="letterBox-div" id={i}>
            <button className="gray" onClick={button}></button>
            <button className="yellow" onClick={button}></button>
            <button className="green" onClick={button}></button>
          </div>
        </Grid>
       )
      })}
      </Grid>
    </>
  )
}

export default GuessFormRow
