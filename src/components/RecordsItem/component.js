import React, { PropTypes } from 'react'
import './assets/style.css'

const RecordsItem = ({ id, date, title, amount, removeRecords }) => (
  <tr>
    <td>{date}</td>
    <td>{title}</td>
    <td>$ {amount}</td>
    <td>
      <button className="buttonitem" onClick={() => removeRecords(id)}>Delete</button>
    </td>
  </tr>
  )

RecordsItem.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  removeRecords: PropTypes.func.isRequired
}

export default RecordsItem