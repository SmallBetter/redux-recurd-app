import TYPE from './types'


export const addRecords = ({ date, title, amount }) => ({
  type: TYPE.RECORDS.ADD,
  payload: { date, title, amount }
})

export const removeRecords = id => ({
  type: TYPE.RECORDS.REMOVE,
  payload: { id }
})