import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';

import { colors, fonts } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  input: {
    ...fonts.body,
    background: 'none',
    flex: 1,
    border: '3px solid',
    borderRadius: 2,
    borderColor: colors.blue,
    color: colors.white,
    padding: '1rem 0',
    textIndent: '1rem',
    fontSize: '1.5rem',

    ':focus': {
      outline: 'none',
    },
  },
  conversationForm: {
    display: 'flex',
    alignItems: 'center',
    color: colors.blue,
    marginBottom: '2rem',
  },
  conversationIconWrapper: {
    margin: '0 1rem',
    cursor: 'pointer',
    ':hover': {
      color: colors.midBlue,
    },
  },
});

class conversationInput extends Component {
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
          autoFocus
          className={css(styles.input)}
          onChange={this.handleChange}
          type='text'
          value={text}
        />
        <div onClick={this.submitMessage} className={css(styles.conversationIconWrapper)}>
          <Icon size={56} icon={ic_send} />
        </div>
      </form>
    )
  }
};

export default conversationInput;
