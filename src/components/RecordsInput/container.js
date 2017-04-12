import { connect } from 'react-redux'
import TodoInput from './component'
import { addRecords } from '../../actions/records'

const mapDispatchToProps = { addRecords }

export default connect(null, mapDispatchToProps)(TodoInput)