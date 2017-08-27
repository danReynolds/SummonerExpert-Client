import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  collapsibleItem: {
    color: colors.white,
    padding: '1rem',
    background: colors.blue,
    cursor: 'pointer',

    ':hover': {
      background: colors.midBlue,
    }
  }
});

class CollapsibleItem  extends Component {
  static PropTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  }

  handleClick = () => {
    const { text, onClick } = this.props;
    onClick(text);
  }

  render() {
    const { text } = this.props;

    return (
      <div onClick={this.handleClick} className={css(styles.collapsibleItem)}>
        {text}
      </div>
    );
  }
}

export default CollapsibleItem;
