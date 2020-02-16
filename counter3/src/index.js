import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counter from './reducers/counter'
import Counter from './components/Counter'

const store = createStore(counter)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Counter />   
  </Provider>,
  rootElement
)