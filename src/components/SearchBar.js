import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { COLORS, TEXT } from '../style';

const styles = StyleSheet.create({
  bar: {
    border: 'none',
    fontSize: '6rem',
    color: COLORS.header,

    ':focus': {
      outline: 'none',
    },
  },
});

class SearchBar extends Component {
  static PropTypes = {
    onSearch: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  clearText = () => {
    this.setState({ text: '' });
  }

  handleSubmit = (e) => {
    const { onSearch } = this.props;
    const { text } = this.state;

    e.preventDefault();
    this.clearText();
    onSearch(text);
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          className={css(styles.bar, TEXT.header)}
          type='search'
          placeholder='Ask away Summoner'
          value={text}
        />
      </form>
    )
  }
}

export default SearchBar;
