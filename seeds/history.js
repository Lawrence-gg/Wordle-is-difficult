/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('history').del()
  await knex('history').insert([
    { guess_word: 'seed1', date: knex.fn.now() },
    { guess_word: 'seed2', date: knex.fn.now() },
    { guess_word: 'seed3', date: knex.fn.now() },
  ])
}
