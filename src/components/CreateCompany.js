import React, { Component } from 'react';
import '../App.css';

class CreateComapny extends Component {

  render() {
    return (
      <div className="App-send-entry-bar">
        <div className="SendEntry-width">
          <h1 className="SendEntry-title">Create Issue</h1>
          <div className="SendEntry-forum">
            <input placeholder="Subject"/>
            <input placeholder="Info"/>
            <div className="SendEntry-button">Create</div>
          </div>
          <p>Try it out. You need metamask!</p>
          <p>WARNING: This is alpha software. We are not responsible for lost funds. By using the application you acknowledge that you are aware of the applications development phase. Proceed with caution.
          </p>
        </div>
      </div>
    );
  }
}

export default CreateComapny;
