import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { fadeIn } from 'react-animations';

import { colors } from '../assets/styles/Common';
import { style } from '../lib/utils';

const styles = StyleSheet.create({
  container: {
    animationName: fadeIn,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.8rem',
    color: colors.gold,
    cursor: 'pointer',
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
      <div onClick={this.toggleOpen} className={style(styles.title, 'hvr-fade')}>
        <Icon icon={icon} size={32} />
        {title}
      </div>
    )
  }

  render() {
    const { children, isOpen, index } = this.props;
    const animateStyles = StyleSheet.create({
      animate: { animationDuration: `${(index + 1) / 4}s` }
    });

    return (
      <div className={css(styles.container, animateStyles.animate)}>
        {this.renderTitle()}
        <div className={css(styles.content)}>
          {isOpen ? children : null}
        </div>
      </div>
    )
  }
}

export default Collapsible;
