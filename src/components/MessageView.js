import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  message: {
    flex: '0 1 auto',
    margin: '1rem 0',
    padding: '1rem',
    background: colors.white,
    borderRadius: '2px',
    color: colors.darkGrey,
  },
});

const MessageView = ({ message }) => (
  <div className={css(styles.message)}>{message.text}</div>
);

export default MessageView;
