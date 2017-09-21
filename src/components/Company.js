import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class Company extends Component {
  render() {
    return (
      <div className="Blue">
        <div className="Blue-in">
          <span>
            <i>{this.props.id}</i>
          </span>
          <h2>{this.props.header}</h2>
          <p>{this.props.about}</p>
          <p>{this.props.account}</p>
        </div>
      </div>
    );
  }
}

Company.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired
}

export default Company;
