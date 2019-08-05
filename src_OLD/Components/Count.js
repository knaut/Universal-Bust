import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// DUX
import * as Counter from '../dux/Counter.js'

class Count extends React.Component {
  static fetchData (store) {
    return store.dispatch(Counter.getCount())
  }

  handleIncrement () {
    this.props.increment()
  }

  handleDecrement () {
    this.props.decrement()
  }

  render () {
    return (
      <div id='count'>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <span>{this.props.count}</span>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment: Counter.increment,
  decrement: Counter.decrement
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Count)
