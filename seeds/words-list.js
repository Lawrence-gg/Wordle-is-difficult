/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const fs = require('fs')

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dictionary').del()
  const words = fs
    .readFileSync('server/public/data/wordfile.txt', 'utf-8')
    .split('\n')
  let emptyArr = []
  for (let i = 0; i < words.length; i++) {
    emptyArr.push(words[i])
    await knex('dictionary').insert({ word: emptyArr[i] })
  }
  console.log('Completed')
}
