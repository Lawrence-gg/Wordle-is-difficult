import React from 'react'
import { Typography } from '@material-ui/core'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AbcIcon from '@mui/icons-material/Abc';

const Header = () => {
  return (
    <div className="header">
    <Typography
    variant="h3"
    align="center"
    gutterBottom
    >
    <AbcIcon 
    fontSize="inhert"
    color="primary"></AbcIcon>
   Wordle is hard
    </Typography>
    </div>

  )
}

export default Header