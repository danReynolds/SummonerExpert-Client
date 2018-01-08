import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  container: {
    border: `2px solid ${colors.gold}`,
    padding: '0.8rem 2rem',
    color: colors.white,
    display: 'inline-block',
    transition: 'background, .3s',
    cursor: 'pointer',
    borderRadius: '2px',
    fontSize: '1.2rem',

    ':hover': {
      background: colors.gold,
    }
  }
});

const Button = ({ children }) => {
  return (
    <div className={css(styles.container)}>
      {children}
    </div>
  );
}

export default Button;
