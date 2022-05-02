import React from 'react'
import { Typography, Box } from '@material-ui/core'
import AbcIcon from '@mui/icons-material/Abc'

const Header = () => {
  return (
    <div className="header">
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{m: 2}}><Typography variant="h6" color="primary" gutterBottom><a href="">Home</a> </Typography></Box>
      <Box sx={{m: 2}}><Typography variant="h6" color="primary" gutterBottom><a href="">History</a> </Typography></Box>
      <Box sx={{m: 2}}><Typography variant="h6" color="primary" gutterBottom><a href="">Help</a> </Typography></Box>
    </Box>
      <Typography variant="h3" align="center" gutterBottom>
        <AbcIcon fontSize="inhert" color="primary"></AbcIcon>
        Wordle is hard
      </Typography>
    </div>
  )
}

export default Header
