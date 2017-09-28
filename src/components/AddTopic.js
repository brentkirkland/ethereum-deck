import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize';
import ipfsAPI from 'ipfs-api'
import bs58 from 'bs58'
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'})

class AddTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: ''
    };
  }

  renderTopicButton() {
    if (this.state.topic !== '') {
      return (
        <div className="Topic-button-active" onClick={this.add.bind(this)}>
          <b>Add Topic</b>
        </div>
      )
    }
  }

  componentDidMount () {
    this.fetchColorZero()
  }

  fetchColorZero () {
    this.props.web3.instance.getColorHashArray.call(0, (err, r) => {
      if (err) {
        console.log(err)
      }
      this.props.add(r)
    })
  }

  setHash (err, files) {
    if (err) {
      console.log(err)
    } else {
      var hash = files[0].hash;
      const bytes = bs58.decode(hash);
      const multiHashId = 2;
      const b = bytes.slice(multiHashId, bytes.length);
      console.log(this.props.web3)
      console.log(b.toString("hex"))
      this.props.web3.instance.writeEvent.estimateGas("0", 0, "0x" + b.toString("hex"), 0, (error, result) => {
        console.log(result)
        this.props.web3.instance.writeEvent.sendTransaction("0", 0, "0x" + b.toString("hex"), 0, {gas: result*2}, (err, r) => {
          if (error) {
            console.log(error)
          }
          console.log('send it')
          this.reset()
        })
      })
    }
  }

  add () {
    ipfs.add(Buffer.from(this.state.topic), this.setHash.bind(this))
  }

  renderBreaker() {
    if (this.state.topic !== '') {
      return (<div className="breaker"/>)
    }
  }

  handleTopicText(e) {
    this.setState({topic: e.target.value})
  }

  reset () {
    console.log("reset")
    this.setState({
      topic: ''
    })
    setTimeout(this.fetchColorZero.bind(this), 15000)
  }

  render() {
    return (
      <div className="Yellow-add">
        <div className="Pink-new">
          <Textarea rows={1} onChange={this.handleTopicText.bind(this)} placeholder="Add a public issue" value={this.state.topic}/> {this.renderBreaker()}
          {this.renderTopicButton()}
        </div>
      </div>
    );
  }
}

AddTopic.propTypes = {
  web3: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired
}

export default AddTopic;
