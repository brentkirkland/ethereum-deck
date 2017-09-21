import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Oko from './contracts/Oko.json'
import Textarea from 'react-textarea-autosize';
import Header from './components/Header'
import Company from './components/Company'
import Topic from './components/Topic'
import CompanyPage from './components/CompanyPage'
import AddTopic from './components/AddTopic'
import HomePage from './components/HomePage'


import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class App extends Component {

  // find web3
  // write a company name, sub, paragraph

  componentDidMount() {
    // const StatusContract = window.web3.eth.contract(Oko.abi);
    // console.log(Oko.networks)
    // const statusInstance = StatusContract.at(Oko.networks["1505368618307"].address)
    // this.setState({statusInstance: statusInstance})
    //
    //this.addCompany(statusInstance)
    //this.addTopic(statusInstance)
    // this.addMessage(statusInstance)
    // this.showCompanys(statusInstance)
  }

  addCompany(s) {
    var new_company = {
      name: 'BOko',
      subheader: 'Oko Front Desk Beta',
      paragraph: 'Please let us know your concerns'
    }

    console.log(s)

    s.createCompany.estimateGas(new_company.name, new_company.subheader, new_company.paragraph, (error, result) => {
      s.createCompany.sendTransaction(new_company.name, new_company.subheader, new_company.paragraph, {
        gas: result*2
      }, (error, result) => {
        console.log('try')
        // this.addTopic(s)
      })
    })

    // this.state.statusInstance.addCompany(new_company.name, new_company.subheader, new_company.paragraph)

  }

  addTopic(s) {
    var new_topic = {
      topic: 'I need help with my pool...',
      subheader: 'The pool sucks',
      companyID: '0x3f58000000000000000000000000000000000000000000000000000000000000'
    }

    s.createTopic.estimateGas(new_topic.topic, new_topic.subheader, new_topic.companyID, (error, result) => {
      s.createTopic.sendTransaction(new_topic.topic, new_topic.subheader, new_topic.companyID, {
        gas: result*2
      }, (error, result) => {
        console.log('try')
        // this.addMessage(s)
      })
    })

  }

  addMessage(s) {
    var new_message = {
      message: 'Thank you we are getting right on it.',
      refNum: 1,
      companyIDBytes: '0x3f58000000000000000000000000000000000000000000000000000000000000'
    }

    s.createMessage.estimateGas(new_message.message, new_message.refNum, new_message.companyIDBytes, (error, result) => {
      s.createMessage.sendTransaction(new_message.message, new_message.refNum, new_message.companyIDBytes, {
        gas: result*2
      }, (error, result) => {
        console.log('try')
      })
      console.log(result)
    })

  }

  showCompanys(s) {
    var events = s.allEvents({fromBlock: 0, toBlock: 'latest'});
    events.watch(function(error, result) {
      console.log(result)
      // var company = result.args.paragraph
      // console.log(result.args.companyID)
      //
      // console.log(window.web3._extend.utils.toAscii(company))
    });
  }

  renderYellow() {
    return (
      <div className="Yellow">
        <div className="Pink-Header">
          <h3>How do I finally connected to some stupid icloud thing? FUXKKKKK</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </p>
          <p>0x0asdasd</p>
        </div>
        <div className="Pink">
          <p>Love the website. Is there are plan to make communities hidden. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
          <p>0x0asdasd</p>
        </div>
        <div className="Pink">
          <p>Love the website. Is there are plan to make communities hidden. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
          <p>0x0asdasd</p>
        </div>
        <div className="Pink">
          <Textarea rows={1} onChange={this.handleTopicText.bind(this)} placeholder="Add a public message"/> {this.renderMessageButton()}
        </div>
      </div>
    )
  }

  renderMessageButton() {}

  renderTopicButton() {

    // return (
    //   <div  className="Topic-button-active">
    //     <b>Submit</b>
    //   </div>
    // )
    //
    // if (this.state.addTopicText === '') {
    //   return (
    //     <div className="Topic-button-gray">
    //       Submit
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div  className="Topic-button-active">
    //       Submit
    //     </div>
    //   )
    // }
  }

  handleTopicText(e) {
    console.log(e.target.value)
  }

  handleMessageText(e) {
    console.log(e.target.value)
  }

  renderYellowInput() {
    return (
      <div className="Yellow-add">
        <div className="Pink">
          <Textarea rows={1} onChange={this.handleTopicText.bind(this)} placeholder="Add a public topic"/> {this.renderTopicButton()}
        </div>
      </div>
    )
  }

  render() {
    // console.log(window.web3.eth)

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/*" component={CompanyPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
