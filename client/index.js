import React from 'react'
import ReactDOM from 'react-dom'
import { provider } from 'react-redux'
import store from './store'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
