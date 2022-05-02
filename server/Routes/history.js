const express = require('express')
const router = express.Router()
const { post } = require('superagent')
const db = require('../db')

//history
router.get('/', (req, res) => {
  db.getHistory()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const guess = req.body
  console
    .log(guess)
    .then((something) => {})
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
