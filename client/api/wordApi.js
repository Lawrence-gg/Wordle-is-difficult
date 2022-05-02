import request from 'superagent'

const words = '/words'
const remaining = '/words/remaining'

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
