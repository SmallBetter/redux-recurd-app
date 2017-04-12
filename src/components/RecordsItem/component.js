import React from 'react'
import './assets/style.css'

const RecordsItem = ({ id, date, title, amount }) => (
  <tr>
    <td>{date}</td>
    <td>{title}</td>
    <td>$ {amount}</td>
    <td>
      <button className="buttonitem">Delete</button>
    </td>
  </tr>
)


export default RecordsItem