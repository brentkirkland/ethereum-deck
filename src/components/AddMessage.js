import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize';

class AddMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  renderMessageButton () {

  }

  handleMessageText (e) {
    this.setState({
      message: e.target.value
    })
  }

  renderMessageButton() {
    if (this.state.message !== '') {
      return (
        <div  className="Topic-button-active">
          <b>Add Message</b>
        </div>
      )
    }
  }

  renderBreaker () {
    if (this.state.message !== '') {
      return (
        <div className="breaker"/>
      )
    }
  }

  render() {
    return (
      <div className="Pink-new">
        <Textarea rows={1} onChange={this.handleMessageText.bind(this)} placeholder="Add a public reply"/>
        {this.renderBreaker()}
        {this.renderMessageButton()}
      </div>
    );
  }
}

export default AddMessage;
