//导入connect
import { connect } from 'react-redux'
//导入action
import { setFilter } from '../actions'
//导入Footer展示组件
import Footer from '../components/Footer'

//创建mapStateToprops
const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

//创建mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    changeFilter(filter) {
      dispatch(setFilter(filter))
    }
  }
}

//创建FooterContainer容器组件
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

//导出FooterContainer容器组件
export default FooterContainer
