import React, { Component } from 'react';
import '../App.css';

class Loading extends Component {
  render() {
    return (
      <div className="Header">
        <p>Wrong network. Please switch to Ropsten on metamask.</p>
      </div>
    );
  }
}

export default Loading;
