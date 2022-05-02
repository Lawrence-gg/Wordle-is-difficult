import request from 'superagent'

export function getWords() {
  return request.get('/words').then((res) => res.body)
}

export function getWords() {
  return request.get('/words/remaining').then((res) => res.body)
}
