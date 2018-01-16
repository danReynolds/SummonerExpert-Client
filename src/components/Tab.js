import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import { colors, breakpoints } from '../assets/styles/Common';

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    textTransform: 'uppercase',
  },
  selected: {
    color: colors.gold,
  },
  container: {
    marginRight: '1rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: '1.8rem',
    marginRight: '1rem',

    [breakpoints.mobile]: {
      height: '1.25rem',
      marginRight: '0.5rem',
      fontSize: '0.75rem',
    },
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
    const { selected, title, icon } = this.props;

    return (
      <div className={css(styles.container)}>
        <div onClick={this.handleClick}>
          <div className={css(styles.header)}>
            <img className={css(styles.icon)} src={icon} alt={title} />
            <div className={css(styles.title, selected ? styles.selected : null)}>{title}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tab;
