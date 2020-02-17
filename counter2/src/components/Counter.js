import React, { Component } from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }
    add = () => {
        this.props.onIncrement()
    }
    reduce = () => {
        this.props.onDecrement()
    }
    addIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    addAsync = () => {
        setTimeout(this.props.onIncrement, 3000)
    }
    render() {
        const { value } = this.props

        return (
            <div>
                Clicked: <span id="value">{value}</span> times
                <button id="increment" onClick={this.add}>+</button>
                <button id="decrement" onClick={this.reduce}>-</button>
                <button id="incrementIfOdd" onClick={this.addIfOdd}>Increment if odd</button>
                <button id="incrementAsync" onClick={this.addAsync}>Increment async</button>
            </div>
        )
    }
}

export default Counter