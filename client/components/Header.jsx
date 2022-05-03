import React from 'react'
import { Typography, Box } from '@material-ui/core'
import AbcIcon from '@mui/icons-material/Abc'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <Box sx={{ m: 1 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Home
            </Typography>
          </Box>
        </Link>
        <Link to="/History">
          <Box sx={{ m: 1 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              History
            </Typography>
          </Box>
        </Link>
        <Box sx={{ m: 1 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Help
          </Typography>
        </Box>
      </Box>
      <Typography variant="h3" align="center" gutterBottom>
        <AbcIcon fontSize="inhert" color="primary"></AbcIcon>
        Wordle is hard
      </Typography>
    </div>
  )
}

export default Header
