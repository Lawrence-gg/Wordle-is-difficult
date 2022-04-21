import request from 'superagent'

export function getWords() {
  return request.get('/words').then((res) => res.body)
}
