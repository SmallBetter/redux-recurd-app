import React from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'
import RecordsInput from '../RecordsInput/'
import RecordsList from '../RecordsList'
import RecordsSum from '../RecordsSum'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <RecordsSum />
      <RecordsInput />
      <RecordsList />
    </div>
  </div>
)

export default App
