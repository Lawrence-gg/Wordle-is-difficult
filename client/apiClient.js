import request from 'superagent'

export function getWords() {
  return request.get('/words').then((res) => res.body)
}

// export function getTestWords() {
//   return request.get('./testWords').then((res) => res.body)
// }
