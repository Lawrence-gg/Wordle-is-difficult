const express = require('express')
const router = express.Router()
const db = require('../db')
const { post } = require('superagent')

//'api/history'
router.get('/', (req, res) => {
  db.getHistory()
    .then((response) => {
      console.log(response)
      res.json(response)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const data = JSON.stringify(req.body.wordified)
  const date = new Date().toLocaleString().replace(',', '')
  console.log(data)
  console.log(date)
  db.addHistory(data, date)
    .then((res) => {})
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
