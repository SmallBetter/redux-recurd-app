import { combineReducers } from 'redux'
import records from './records'

export const reducers = {
  records
}

export const rootReducers = combineReducers(reducers)
