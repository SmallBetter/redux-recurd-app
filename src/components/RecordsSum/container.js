import { connect } from 'react-redux'
import RecordsSum from './component'

const mapStateToProps = state => ({
  records: state.records
})

export default connect(mapStateToProps)(RecordsSum)