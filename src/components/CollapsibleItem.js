import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';
import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  collapsibleItem: {
    animationName: fadeIn,
    color: colors.white,
    paddingBottom: '0.5rem',
    margin: '1rem',
    cursor: 'pointer',

    ':hover': {
      color: colors.blue,
    },
  }
});

class CollapsibleItem  extends Component {
  static PropTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    index: PropTypes.number,
  }

  handleClick = () => {
    const { text, onClick } = this.props;
    onClick(text);
  }

  render() {
    const { text, index } = this.props;
    const animateStyles = StyleSheet.create({ animate: { animationDuration: `${(index + 1) / 2}s` } });
    return (
      <div
        onClick={this.handleClick}
        className={css(styles.collapsibleItem, animateStyles.animate)}
      >
        {text}
      </div>
    );
  }
}

export default CollapsibleItem;
