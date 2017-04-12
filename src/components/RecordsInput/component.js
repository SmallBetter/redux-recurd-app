import React from 'react'
import './assets/style.css'

const RecordsInput = () => (
  <div>
    <input type="text" placeholder="Date" />
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="Amount" />
    <button className="button" >Increase</button>
  </div>
)


export default RecordsInput