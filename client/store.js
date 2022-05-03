import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import thunkMiddleWare from 'redux-thunk'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunkMiddleWare))
)

export default store
