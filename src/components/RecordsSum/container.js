import { connect } from 'react-redux'
import RecordsSum from './component'

const mapStateToProps = state => ({
  record: state.records.map(record => record.amount)
})

export default connect(mapStateToProps)(RecordsSum)