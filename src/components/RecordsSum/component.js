import React from 'react'
import './assets/style.css'


const RecordsSum = ({ records }) => (
  <table>
    <thead>
      <tr>
        <th>Credit</th>
        <th>Debit</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{records.map(record => record.amount).reduce((p, i) => i > 0 ? p + i : p, 0)}</td>
        <td>{records.map(record => record.amount).reduce((p, i) => i < 0 ? p + i : p, 0)}</td>
        <td>{records.map(record => record.amount).reduce((p, i) => i ? p + i : p, 0)}</td>
      </tr>
    </tbody>
  </table>
)


export default RecordsSum