import React, { Component } from 'react';
import '../App.css';

class WrongNetwork extends Component {
  render() {
    return (
      <div className="Header">
        <p>Metamask not found. Please install Metamask.</p>
      </div>
    );
  }
}

export default WrongNetwork;
