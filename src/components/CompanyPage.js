import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import Company from './Company'
import Topic from './Topic'
import AddTopic from './AddTopic'

class CompanyPage extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Company id={"brentkirkland"} header="BrentKirklandCom" about={"Personal website stuff. PGP key: ya"} account={"0xasdasdasdas"}/>
        <div className="background">
          <AddTopic/>
          <Topic header="Great stuff" about="about some stuff" account="0xasdasd" messages={[{message: 'ho', account: '0x0000'}]}/>
        </div>
      </div>
    );
  }
}

export default CompanyPage;
