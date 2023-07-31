import React, { Component } from 'react';
import '../Styles/styles.css';

class Button extends Component {
  render() {
    const { onLoadMore, show } = this.props;

    return show ? (
      <button type="button" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    ) : null;
  }
}

export default Button;
