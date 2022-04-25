const express = require('express')
const router = express.Router()

const db = require('../db')
//words
router.get('/', (req, res) => {
  db.getWords()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
