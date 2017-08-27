import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router'
import { StyleSheet, css } from 'aphrodite';

import { colors, fonts } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  bar: {
    ...fonts.body,
    width: '100%',
    border: 'none',
    fontSize: '6rem',
    color: colors.blue,
    background: 'none',

    ':focus': {
      outline: 'none',
    },
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  clearText = () => {
    this.setState({ text: '' });
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    const { text } = this.state;

    e.preventDefault();
    this.clearText();
    sendMessage(text);
    history.push('/conversation');
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          onChange={this.handleChange}
          className={css(styles.bar)}
          type='search'
          placeholder='Ask away Summoner'
          value={text}
        />
      </form>
    )
  }
}

export default withRouter(SearchBar);
