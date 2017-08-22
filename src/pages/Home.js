import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SearchBar from '../components/SearchBar';
import CommonStyles, { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.darkBlue,
    height: '100vh',
    overflow: 'hidden',
  },
  header: {
    flex: '0 1 auto',
  },
  content: {
    flex: '1 1 auto',
  }
});

class Home extends Component {
  onSearch = (text) => {
    const { history } = this.props;
    history.push('/chat', { initialQuery: text });
  }

  render() {
    return (
      <div className={css(styles.homeContainer)}>
        <div className={css(CommonStyles.container)}>
          <div className={css(styles.header)}>
            <SearchBar onSearch={this.onSearch} />
          </div>
          <div className={css(styles.content)}>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
