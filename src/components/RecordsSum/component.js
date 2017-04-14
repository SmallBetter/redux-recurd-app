import React, { PropTypes } from 'react'
import './assets/style.css'


const RecordsSum = ({ records }) => (
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
          <td>$ {records.map(record => record.amount).reduce((p, i) => i > 0 ? p + i : p, 0)}</td>
          <td>$ {records.map(record => record.amount).reduce((p, i) => i < 0 ? p + i : p, 0)}</td>
          <td>$ {records.map(record => record.amount).reduce((p, i) => p + i, 0)}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

RecordsSum.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  })
  ).isRequired
}

export default RecordsSum