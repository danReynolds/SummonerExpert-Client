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
    padding: '0.8rem',
    color: colors.darkGrey,
    cursor: 'pointer',

    ':hover': {
      background: colors.midGrey,
    }
  },
});

class Collapsible extends Component {
  toggleOpen = () => {
    const { onSectionOpen, index } = this.props;
    onSectionOpen(index);
  }

  renderTitle = () => {
    const { title, isOpen } = this.props;
    const icon = isOpen ? ic_keyboard_arrow_down : ic_keyboard_arrow_right;

    return (
      <div onClick={this.toggleOpen} className={css(styles.title)}>
        <Icon icon={icon} size={32} />
        {title}
      </div>
    )
  }

  render() {
    const { children, isOpen } = this.props;
    return (
      <div className={css(styles.container)}>
        {this.renderTitle()}
        <div className={css(styles.content)}>
          {isOpen ? children : null}
        </div>
      </div>
    )
  }
}

export default Collapsible;
