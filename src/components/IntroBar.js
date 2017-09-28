import React, {Component} from 'react';
import '../App.css';

class IntroBar extends Component {

  render() {
    return (
      <div className="App-intro-bar">
        <div className="IntroBar-width">
          <h1 className="IntroBar-title">Let's simplify support tickets.</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </h3>
          <div className="IntroBar-benefits-div">
            <div className="IntroBar-benefits">
              <div className="circle"/>
              <span className="IntroBar-benefits-span">Transparent</span>
              <p>Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
            <div className="IntroBar-benefits">
              <div className="circle"/>
              <span className="IntroBar-benefits-span">Awesome</span>
              <p>Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
            <div className="IntroBar-benefits">
              <div className="circle"/>
              <span className="IntroBar-benefits-span">Decentralized</span>
              <p>Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroBar;
