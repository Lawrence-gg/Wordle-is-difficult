/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('test').del()
  await knex('test').insert([
    { word: 'Brave' },
    { word: 'Proud' },
    { word: 'Token' },
    { word: 'World' },
    { word: 'Hello' },
    { word: 'Spicy' },
    { word: 'Hotty' },
    { word: 'Aloud' },
    { word: 'Words' },
    { word: 'Think' },
    { word: 'Sound' },
    { word: 'Never' },
  ])
}
