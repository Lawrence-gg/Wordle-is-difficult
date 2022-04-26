import React from 'react'
import { Card, TextField, CardContent, Typography } from '@material-ui/core'
const LetterBox = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4"></Typography>
          <button>Gray</button>
          <button>Yellow</button>
          <button>Green</button>
        </CardContent>
      </Card>
    </>
  )
}

export default LetterBox
