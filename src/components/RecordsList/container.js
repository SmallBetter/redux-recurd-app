import { connect } from 'react-redux'
import RecordsList from './component'

const mapStateToProps = state => ({
  records: state.records
})

export default connect(mapStateToProps)(RecordsList)