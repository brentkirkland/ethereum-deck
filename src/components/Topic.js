import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Message from './Message'
import AddMessage from './AddMessage'

class Topic extends Component {

  renderMessage(a, i) {
    return <Message message={a.message} account={a.account}/>
  }

  renderMessages() {
    return this.props.messages.map(this.renderMessage.bind(this))
  }


  render() {
    return (
      <div className="Yellow">
        <div className="Pink-Header">
          <h3>{this.props.header}</h3>
          <p>{this.props.header}</p>
          <p>{this.props.account}</p>
        </div>
        <Message message="Great stuff" account="0x0asdasd"/>
        {this.renderMessages()}
        <AddMessage/>
      </div>
    );
  }
}

Topic.propTypes = {
  header: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired
}

export default Topic;
