import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers/counter'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT', payload:1})}
    onDecrement={() => store.dispatch({ type: 'DECREMENT', payload:1 })}
  />,
  rootEl
)

render()
store.subscribe(render)