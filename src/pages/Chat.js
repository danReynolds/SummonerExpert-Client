import React, { Component } from 'react';
import { ApiAiClient } from 'api-ai-javascript';
import { StyleSheet, css } from 'aphrodite';

import { MESSAGE_TYPES } from '../models/Message';
import MessageList from '../models/MessageList';
import MessageListView from '../components/MessageListView';
import ChatInput from '../components/ChatInput';
import CommonStyles, { colors, avatarURL } from '../assets/styles/Common';

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

    this.avatar = `${avatarURL}/${this.getRandomInt(1, 200)}.jpg`;
    this.messageList = new MessageList();
    this.client = new ApiAiClient({ accessToken: '2c82b4dc20f4427a9263c4d0fbb7050a' });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentWillMount() {
    const { location: { state: { initialQuery } } } = this.props;

    if (initialQuery) {
      this.sendMessage(initialQuery);
    }
  }

  sendMessage = (text) => {
    this.messageList.add(text, MESSAGE_TYPES.user);
    this.client.textRequest(text).then((response) => {
      this.messageList.add(response.result.fulfillment.speech, MESSAGE_TYPES.bot);
    })
  }

  render() {
    return (
      <div className={css(styles.chatPage)}>
        <div className={css(CommonStyles.container)}>
          <div className={css(styles.messageList)}>
            <MessageListView avatar={this.avatar} messageList={this.messageList} />
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
