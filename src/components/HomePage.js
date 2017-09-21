import React, { Component } from 'react';
import '../App.css';
import IntroBar from './IntroBar'
import Header from './Header'
import CreateCompany from './CreateCompany'

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <IntroBar/>
        <CreateCompany/>
      </div>
    );
  }
}

export default HomePage;
