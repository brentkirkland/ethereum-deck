import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import Company from './Company'
import Topic from './Topic'
import AddTopic from './AddTopic'
import PropTypes from 'prop-types'

class CompanyPage extends Component {

  componentDidMount () {
    // we know web3 is existent
    // call action to instantiate contract
    this.props.instantiateWeb3()
  }

  renderAddTopic () {
    if (this.props.web3.instance !== undefined) {
      return <AddTopic web3={this.props.web3} add={this.props.addColorZero}/>
    }
  }

  renderTopic (arr, i) {
    return <Topic ipfs={arr}/>
  }

  renderTopics () {
    return this.props.data.colorZero.map(this.renderTopic.bind(this))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Company id={"brentkirkland"} header="Blockchain for business communication." about={"This website is currently being developed to explore using blockchain as a means to manage a company's state. This is a test website. Feel free to create a ticket or reply to an existing one."} account={"0xasdasdasdas"}/>
        <div className="background">
          {this.renderAddTopic()}
          {this.renderTopics()}
        </div>
      </div>
    );
  }
}


CompanyPage.propTypes = {
  web3: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  instantiateWeb3: PropTypes.func.isRequired,
  addColorZero: PropTypes.func.isRequired,
}

export default CompanyPage;
