import React, { Component } from 'react'
import { connect } from 'react-redux'
import { otherAction } from '../actions/index'

class Other extends React.Component {
  constructor(props) {
    super(props)
  }
  otherAction=()=>{
      this.props.otherAction()
  }

  render() {

    return (
      <div>
          {this.props.count}
          <button onClick={this.props.otherOperation}>乘1000</button>    
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
    otherOperation:otherAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Other)