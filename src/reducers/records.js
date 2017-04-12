import { initialStore } from '../store'


export default (records = initialStore.records, action) => {
  switch (action.type) {
    default: {
      return records
    }
  }
}