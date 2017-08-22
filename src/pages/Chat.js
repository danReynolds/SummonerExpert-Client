import React, { Component } from 'react';
import { ApiAiClient } from 'api-ai-javascript';
import { StyleSheet, css } from 'aphrodite';

import MessageList from '../models/MessageList';
import MessageListView from '../components/MessageListView';
import ChatInput from '../components/ChatInput';
import CommonStyles, { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  chatPage: {
    paddingTop: 0,
    backgroundColor: colors.darkBlue,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  chatInput: {
    marginTop: 'auto',
  },
  messageList: {
    height: '100%',
    overflow: 'auto',
    marginBottom: '2rem',
  }
});

class Chat extends Component {
  constructor(props) {
    super(props);

    this.messageList = new MessageList();
    this.client = new ApiAiClient({ accessToken: '2c82b4dc20f4427a9263c4d0fbb7050a' });
  }

  componentWillMount() {
    const { location: { state: { initialQuery } } } = this.props;

    if (initialQuery) {
      this.sendMessage(initialQuery);
    }
  }

  sendMessage = (text) => {
    this.messageList.add(text);
    this.client.textRequest(text).then((response) => {
      this.messageList.add(response.result.fulfillment.speech);
    })
  }

  render() {
    return (
      <div className={css(styles.chatPage)}>
        <div className={css(CommonStyles.container)}>
          <div className={css(styles.messageList)}>
            <MessageListView messageList={this.messageList} />
          </div>
          <div className={css(styles.chatInput)}>
            <ChatInput onSubmit={this.sendMessage} />
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
