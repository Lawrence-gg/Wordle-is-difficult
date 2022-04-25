const config = require('../knexfile').development
const connection = require('knex')(config)

function getTest(db = connection) {
  return db('test').select()
}

function getWords(db = connection) {
  return db('dictionary').select()
}

module.exports = {
  getTest,
  getWords,
}
