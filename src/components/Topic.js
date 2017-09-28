import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Message from './Message'
import AddMessage from './AddMessage'
import bs58 from 'bs58'

//ipfs should be added to redux
import ipfsAPI from 'ipfs-api'
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'})

class Topic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      res: '',
      done: false
    };
  }

  componentDidMount () {
    this.convertIPFSHash()
  }

  getHash (str) {
    const remove0x = str.slice(2, str.length);
    const bytes = Buffer.from(`1220${remove0x}`, "hex");
    const hash = bs58.encode(bytes);
    return hash;
  }

  convertIPFSHash () {
    // console.log(this.getHash(this.props.ipfs))
    if (!this.state.done) {
      ipfs.files.cat(this.getHash(this.props.ipfs), this.handleStream.bind(this))
    }
  }

  handleStream (err, stream) {
    var res = ''

    stream.on('data', this.chunk.bind(this))

    stream.on('error', function (err) {
      console.error('Oh nooo', err)
    })

    stream.on('end', this.end.bind(this))
  }

  chunk (chunk) {
    if (!this.state.done) {
      this.setState({
        res: this.state.res + chunk.toString()
      })
    }
  }

  end () {
    this.setState({
      done: true
    })
  }

  render() {
    return (
      <div className="Yellow">
        <div className="Pink-Header">
          <p>{this.state.res}</p>
        </div>
      </div>
    );
  }
}

Topic.propTypes = {
  ipfs: PropTypes.string.isRequired
}

export default Topic;
