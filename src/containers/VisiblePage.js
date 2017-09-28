import { connect } from 'react-redux'
import Page from '../components/CompanyPage.js'
import { instantiateWeb3, addColorZero } from '../actions'

const mapStateToProps = (state) => ({
  web3: state.web3,
  data: state.data
})

const mapDispatchToProps = {
  instantiateWeb3: instantiateWeb3,
  addColorZero: addColorZero
}

const VisiblePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default VisiblePage
