import React, { PropTypes } from 'react'
import './assets/style.css'


const RecordsSum = ({ record }) => (
  <div>
    <h1>Records</h1>
    <table>
      <thead>
        <tr>
          <th className="Credit">Credit</th>
          <th className="Debit">Debit</th>
          <th className="Balance">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$ {record.reduce((p, i) => i > 0 ? p + i : p, 0)}</td>
          <td>$ {record.reduce((p, i) => i < 0 ? p + i : p, 0)}</td>
          <td>$ {record.reduce((p, i) => p + i, 0)}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

RecordsSum.propTypes = {
  record: PropTypes.number.isRequired
}

export default RecordsSum