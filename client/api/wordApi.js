import request from 'superagent'

const words = '/api/words'
const history = '/api/history'
// const remaining = '/words/remaining'

export function getTestWords() {
  return request.get(words).then((response) => {
    return response.body
  })
}

export function searchRemainingWords() {
  return request.get(remaining).then((response) => {
    return response.body
  })
}

export async function postGuess(wordified) {
  console.log(wordified)
  try {
    const res = await request.post(history).send(wordified)
    return res.body
  } catch (err) {
    return err.message
  }
}
