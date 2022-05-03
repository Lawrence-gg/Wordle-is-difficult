/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('userReview').del()
  await knex('userReview').insert([
    { id: 1, review: 'Helpful App! thanks for making it', username: 'Barry' },
    {
      id: 2,
      review: 'I agree, wordle is hard. So many words',
      username: 'TofuNinja',
    },
    {
      id: 3,
      review: 'Lol wut is dis y play if u gonna get help 1 star',
      username: 'scrabbleProXx12',
    },
  ])
}
