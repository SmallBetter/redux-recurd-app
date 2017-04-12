import TYPE from './types'


export const addRecords = ({ date, title, amount }) => ({
  type: TYPE.RECORDS.ADD,
  payload: { date, title, amount }
})