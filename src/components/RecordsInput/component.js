import React, { Component } from 'react'
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
      State.amount > 0)) { this.props.addRecords({ ...this.state }) }
    this.setState({
      date: '',
      title: '',
      amount: ''
    })
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="Date" value={this.state.date} onChange={this.handledate} />
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handletitle} />
        <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.handleamount} />
        <button className="button" onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}

export default RecordsInput