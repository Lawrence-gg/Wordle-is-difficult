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
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('clicked');
    dispatch(fetchHistory());
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
          </Table>
        </Box>
      </TableContainer>
    </div>
  )
}

export default History
