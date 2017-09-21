import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class Message extends Component {
  render() {
    return (
      <div className="Pink">
        <p>{this.props.message}</p>
        <p>{this.props.account}</p>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired
}

export default Message;
