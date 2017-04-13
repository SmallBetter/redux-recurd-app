import { initialStore } from '../store'
import TYPE from '../actions/types'


export default (records = initialStore.records, action) => {
  switch (action.type) {
    case TYPE.RECORDS.ADD: {
      return [...records, {
        id: records.length ? records[records.length - 1].id + 1 : 1,
        date: action.payload.date,
        title: action.payload.title,
        amount: (action.payload.amount * 1)
      }]
    }

    case TYPE.RECORDS.REMOVE: {
      return records.filter(record => record.id ? record.id !== action.payload.id : record)
    }

    default: {
      return records
    }
  }
}