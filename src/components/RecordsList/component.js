import React from 'react'
import './assets/style.css'
import RecordsItem from '../RecordsItem'


const RecordsList = ({ records }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {records.map(record => <RecordsItem key={record.id} {...record} />)}
    </tbody>
  </table>
)


export default RecordsList