import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '3rem',
    textIndent: '1rem',
    background: colors.white,
    border: 'none',
    borderRadius: '2px',
  }
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
    onSubmit(text);
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={css(styles.input)}
          onChange={this.handleChange}
          type='text'
          placeholder='Enter message'
          value={text}
        />
      </form>
    )
  }
};

export default ChatInput;
