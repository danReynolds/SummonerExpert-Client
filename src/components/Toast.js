import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  action: {
    color: colors.blue,
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    marginLeft: '1rem',
  },
  text: {
    fontSize: '0.8rem',
  },
});

const Toast = ({ text, icon, action, onClick }) => (
  <div className={css(styles.container)}>
    <div onClick={onClick} className={css(styles.text)}>
      {text}
    </div>
    <div className={css(styles.action)}>
      {action}
    </div>
  </div>
);

export default Toast;
