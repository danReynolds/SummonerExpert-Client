import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors } from '../assets/styles/Common';

export const BUTTON_TYPES = {
  CANCEL: 'CANCEL',
  CONFIRM: 'CONFIRM',
};

const styles = (type = BUTTON_TYPES.CONFIRM) => StyleSheet.create({
  container: {
    border: `2px solid ${type === BUTTON_TYPES.CONFIRM ? colors.gold : colors.red}`,
    padding: '0.8rem 2rem',
    color: `${type === BUTTON_TYPES.CONFIRM ? colors.gold : colors.red}`,
    display: 'inline-block',
    transition: 'background, .3s',
    cursor: 'pointer',
    borderRadius: '2px',
    fontSize: '1.2rem',
    width: 'fit-content',

    ':hover': {
      background: `${type === BUTTON_TYPES.CONFIRM ? colors.gold : colors.red}`,
      color: colors.white,
    }
  }
});

const Button = ({ children, onClick, type, style }) => {
  return (
    <div onClick={onClick} className={css(styles(type).container, style)}>
      {children}
    </div>
  );
}

export default Button;
