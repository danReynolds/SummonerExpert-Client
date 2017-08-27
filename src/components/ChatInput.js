import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors, fonts } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  input: {
    ...fonts.body,
    width: '100%',
    background: 'none',
    border: '3px solid',
    borderRadius: 2,
    borderColor: colors.blue,
    color: colors.white,
    padding: '1rem 0',
    textIndent: '1rem',
    fontSize: '1.5rem',
    marginBottom: '2rem',

    ':focus': {
      outline: 'none',
    },
  },
});

class ChatInput extends Component {
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
    const { onSubmit } = this.props;
    const { text } = this.state;

    e.preventDefault();
    this.clearText();
    sendMessage(text);
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          className={css(styles.input)}
          onChange={this.handleChange}
          type='text'
          value={text}
        />
      </form>
    )
  }
};

export default ChatInput;
