import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize';

class AddTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: '',
    };
  }

  renderTopicButton() {
    if (this.state.topic !== '') {
      return (
        <div  className="Topic-button-active">
          <b>Add Topic</b>
        </div>
      )
    }
  }

  renderBreaker () {
    if (this.state.topic !== '') {
      return (
        <div className="breaker"/>
      )
    }
  }

  handleTopicText(e) {
    this.setState({
      topic: e.target.value
    })
  }

  render() {
    return (
      <div className="Yellow-add">
        <div className="Pink-new">
          <Textarea rows={1} onChange={this.handleTopicText.bind(this)} placeholder="Add a public topic"/>
          {this.renderBreaker()}
          {this.renderTopicButton()}
        </div>
      </div>
    );
  }
}

export default AddTopic;
