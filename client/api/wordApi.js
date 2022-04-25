import request from 'superagent'

const words = '/words'

export function getTestWords() {
  return request.get(words).then((response) => {
    return response.body
  })
}
