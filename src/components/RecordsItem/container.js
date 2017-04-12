import { connect } from 'react-redux'
import RecordsItem from './component'

const mapStateToProps = (state, props) => ({ props })

export default connect(mapStateToProps)(RecordsItem)