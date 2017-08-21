import React, { Component } from 'react';
import { ApiAiClient } from 'api-ai-javascript';
import { StyleSheet, css } from 'aphrodite';
import 'normalize.css';

import SearchBar from './components/SearchBar';
import MessageList from './models/MessageList';
import MessageListView from './components/MessageListView';

const styles = StyleSheet.create({
  container: {
    paddingTop: '4rem',
    margin: '0 auto',
    width: 1600,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.messageList = new MessageList();
    this.client = new ApiAiClient({ accessToken: '2c82b4dc20f4427a9263c4d0fbb7050a' });
  }

  onSearch = (text) => {
    this.messageList.add(text);

    this.client.textRequest(text).then((response) => {
      this.messageList.add(response.result.fulfillment.speech);
    })
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <SearchBar onSearch={this.onSearch} />
        <MessageListView messageList={this.messageList} />
      </div>
    );
  }
}

export default App;
