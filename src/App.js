import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import 'normalize.css';

import SearchBar from './components/SearchBar';

const styles = StyleSheet.create({
  container: {
    paddingTop: '4rem',
    margin: '0 auto',
    width: 960,
  },
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
