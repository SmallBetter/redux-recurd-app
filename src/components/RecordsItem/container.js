import { connect } from 'react-redux'
import RecordsItem from './component'
import { removeRecords } from '../../actions/records'

const mapStateToProps = (state, props) => ({ props })
const mapDispatchToProps = { removeRecords }

export default connect(mapStateToProps, mapDispatchToProps)(RecordsItem)