import React from 'react'
import { Card, TextField, CardContent, Typography } from '@material-ui/core'
const LetterBox = ({ letter }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4">{letter.letter}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default LetterBox
