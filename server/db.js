const config = require('../knexfile').development
const connection = require('knex')(config)

function getTest(db = connection) {
  return db('test').select()
}

function getWords(db = connection) {
  return db('dictionary').select()
}

function searchWords(wordObj, db = connection) {
  //todo: break down word object
  return db('dictionary').select().whereLike('word', 'earth') //test word
}

function addHistory(word, date, db = connection) {
  return db('history').insert(word, date)
}

function getHistory(db = connection) {
  return db('history').select()
}

module.exports = {
  getTest,
  getWords,
  searchWords,
  addHistory,
  getHistory,
}
