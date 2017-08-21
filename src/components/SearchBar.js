import React, { Component } from 'react';
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
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <input
        className={css(styles.bar, TEXT.header)}
        type='search'
        placeholder='Ask away Summoner'
      />
    )
  }
}

export default SearchBar;
