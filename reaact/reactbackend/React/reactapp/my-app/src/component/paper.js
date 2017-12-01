import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Paper  extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Paper;
