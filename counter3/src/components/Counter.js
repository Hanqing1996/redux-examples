import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/index'
import Other from './Other'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }
  add = () => {
    this.props.increment()
  }
  reduce = () => {
    this.props.decrement()
  }
  addIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.increment()
    }
  }

  addAsync = () => {
    setTimeout(this.props.increment, 3000)
  }
  render() {

    return (
      <div>
        <div className="part">
          you Clicked: <span id="value">{this.props.count}</span> times
              <button id="increment" onClick={this.add}>+</button>
          <button id="decrement" onClick={this.reduce}>-</button>
          <button id="incrementIfOdd" onClick={this.addIfOdd}>Increment if odd</button>
          <button id="incrementAsync" onClick={this.addAsync}>Increment async</button>
        </div>
        <div className="other">
          <Other/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

// 等价写法
/*
const mapDispatchToProps = dispatch => {
  return {
    // dispatch(obj)
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)