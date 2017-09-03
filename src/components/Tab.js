import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    textTransform: 'uppercase',
  },
  selected: {
    paddingBottom: '0.5rem',
    borderBottom: '1px solid',
    borderBottomColor: colors.blue,
  },
  container: {
    marginRight: '1rem',
  },
});

class Tab extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func,
    index: PropTypes.number,
  }

  handleClick = () => {
    const { index, onClick } = this.props;
    onClick(index);
  }

  render() {
    const { selected, title } = this.props;

    return (
      <div className={css(styles.container)}>
        <div
          onClick={this.handleClick}
          className={css(styles.title, selected ? styles.selected : null)}
        >
          {title}
        </div>
      </div>
    )
  }
}

export default Tab;
