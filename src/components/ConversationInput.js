import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';
import PropTypes from 'prop-types';

import { colors, fonts, breakpoints, isDesktop } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  input: {
    ...fonts.body,
    background: 'none',
    flex: 1,
    border: '2px solid',
    borderRadius: 2,
    borderColor: colors.blue,
    color: colors.white,
    padding: '0.85rem 0',
    textIndent: '1rem',

    ':focus': {
      outline: 'none',
    },
  },
  conversationForm: {
    display: 'flex',
    alignItems: 'center',
    color: colors.blue,
    margin: '2rem 0',

    [breakpoints.mobile]: {
      margin: '1rem 0',
    },
  },
  conversationIconWrapper: {
    marginLeft: '1rem',
    cursor: 'pointer',
    ':hover': {
      color: colors.midBlue,
    },
  },
});

class ConversationInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  clearText = () => {
    this.setState({ text: '' });
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.submitMessage();
  }

  submitMessage = () => {
    const { text } = this.state;
    if (text) {
      this.clearText();
      sendMessage(text);
    }
  }

  render() {
    const { text } = this.state;

    return (
      <form className={css(styles.conversationForm)} onSubmit={this.handleSubmit}>
        <input
          autoFocus={isDesktop()}
          placeholder={'Type a message.'}
          className={css(styles.input)}
          onChange={this.handleChange}
          type='text'
          value={text}
        />
        <div onClick={this.submitMessage} className={css(styles.conversationIconWrapper)}>
          <Icon
            size={window.innerWidth >= breakpoints.desktop ? 40 : 32}
            icon={ic_send}
          />
        </div>
      </form>
    )
  }
};

export default ConversationInput;
