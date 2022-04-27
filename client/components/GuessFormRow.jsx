import React from 'react'
import { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import { display } from '@mui/system'

const GuessFormRow = ({guess, button}) => {

  
  useEffect(() => {
    setDisplayLetter(guess)
    console.log(displayLetter);
  },[guess,displayLetter])

  const [displayLetter,setDisplayLetter] = useState([])

  const handleButtonClick = (e) => { //
    const parentId = e.target.parentElement.id
    // console.log(parentId)
    // console.log(e.target);
    // console.log('clicked')
    // console.log(displayLetter)
    updateLetterColor(2, 'green')
  }


  const updateLetterColor = (id, color) => {
    console.log('updateletter')
    if (color === 'gray') {
       displayLetter[id].isGray = true
       console.log('updated to gray');

    }
    else if (color === 'yellow') {
      displayLetter[id].isYellow = true
      console.log('updated to yellow');
    }
    else {
      const change = displayLetter[id].isGreen = true;
      console.log(change);
      // setDisplayLetter(displayLetter[id].isGreen = true)
      console.log(displayLetter);
    }
  }
  
  return (
    <>
      <Grid container spacing={3} justifyContent="center" columns={5}>
      {displayLetter && displayLetter.map((letter, i) => {
       return(
       <Grid item sm={1} md={1} key={i}>
       <Card>
        <CardContent>
          <Typography variant="h4">{letter.letter}</Typography>
        </CardContent>
      </Card>
          <div className="letterBox-div" id={i}>
            <button className="gray" onClick={handleButtonClick}></button>
            <button className="yellow" onClick={handleButtonClick}></button>
            <button className="green" onClick={handleButtonClick}></button>
          </div>
        </Grid>
       )
      })}
      </Grid>
    </>
  )
}

export default GuessFormRow
