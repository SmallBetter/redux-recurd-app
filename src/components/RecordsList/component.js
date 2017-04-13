import React, { PropTypes } from 'react'
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

RecordsList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  })
  ).isRequired
}

export default RecordsList