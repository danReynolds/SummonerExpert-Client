import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    alignItems: 'center',
    background: colors.grey,
    padding: '1rem',
    color: colors.darkGrey,
    cursor: 'pointer',

    ':hover': {
      background: colors.midGrey,
    }
  },
});

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

  }

  toggleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  renderTitle = () => {
    const { title } = this.props;
    const { open } = this.state;
    const icon = open ? ic_keyboard_arrow_down : ic_keyboard_arrow_right;

    return (
      <div onClick={this.toggleOpen} className={css(styles.title)}>
        <Icon icon={icon} size={32} />
        {title}
      </div>
    )
  }

  render() {
    const { children } = this.props;
    const { open } = this.state;
    return (
      <div className={css(styles.container)}>
        {this.renderTitle()}
        <div className={css(styles.content)}>
          {open ? children : null}
        </div>
      </div>
    )
  }
}

export default Collapsible;
