import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { Box, Tab } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'
import { recieveHistory, requestHistory, fetchHistory } from '../actions'

const History = () => {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.guessReducer)

  const handleClick = () => {
    console.log('clicked')
    dispatch(fetchHistory())
    console.log(history)
  }
  {
    /*  */
  }
  {
    /*  */
  }

  return (
    <div>
      <h1>History</h1>
      <button onClick={handleClick}>Click me</button>
      <TableContainer>
        <Box sx={{ width: '60%', margin: '0 auto' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Guesses</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.guess_word}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </div>
  )
}

export default History
