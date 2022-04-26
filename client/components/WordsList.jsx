import React, { useState,useEffect } from 'react'
import { Grid, Paper, Container, MuiThemeProvider } from '@material-ui/core'
import { getTestWords } from '../api/wordApi'

const WordsList = () => {
  const [dictionary, setDictionary] = useState([])

  const handleClick = () => {
    console.log(dictionary)
  }
  
  useEffect(() => {
    getTestWords().then((words) => {
      setDictionary(...dictionary,words)
    })
  },[])

  return (
    <div className="words-list-container">
    <h2>Words:</h2>
      <Container>
      <Grid container>
      {dictionary.map((word, i) => {
        return ( <Grid item md={1} key ={i} sx={{margin: 2}}>
            <Paper className="paper" elevation={6}>{word.word}</Paper>
          </Grid>)
      })}
        </Grid>
      </Container>
    </div>
  )
}

export default WordsList
