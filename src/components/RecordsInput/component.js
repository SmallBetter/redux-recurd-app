import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class RecordsInput extends Component {

  state = {
    date: '',
    title: '',
    amount: ''
  }

  handledate = event => {
    this.setState({
      date: event.target.value
    })
  }

  handletitle = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleamount = event => {
    this.setState({
      amount: event.target.value
    })
  }

  handleClick = () => {
    const State = this.state
    if ((State.date.length > 0 &&
      State.title.length > 0 &&
      State.amount.length > 0 &&
      State.amount < Infinity)) { this.props.addRecords({ ...this.state }) }
    this.setState({
      date: '',
      title: '',
      amount: ''
    })
  }


  render() {
    return (
      <div className="d">
        <input type="text" placeholder="Date" value={this.state.date} onChange={this.handledate} />
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handletitle} />
        <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.handleamount} />
        <button className="button" onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}

RecordsInput.propTypes = {
  addRecords: PropTypes.func.isRequired
}

export default RecordsInput