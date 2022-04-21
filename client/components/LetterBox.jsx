import React from 'react'
import { Card, TextField, CardContent } from '@material-ui/core'
const LetterBox = () => {
  return (
    <>
      <Card>
        <CardContent>
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            margin="normal"
          />
        </CardContent>
      </Card>
    </>
  )
}

export default LetterBox
