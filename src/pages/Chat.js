import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MessageListView from '../components/MessageListView';
import ChatInput from '../components/ChatInput';
import CommonStyles, { colors } from '../assets/styles/Common';
import { getRandomAvatar } from '../static/avatars';

const styles = StyleSheet.create({
  chatPage: {
    paddingTop: 0,
    backgroundColor: colors.darkBlue,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '100%',
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
    this.avatar = getRandomAvatar();
  }

  render() {
    return (
      <div className={css(styles.chatPage)}>
        <div className={css(styles.container, CommonStyles.container)}>
          <div className={css(styles.messageList)}>
            <MessageListView avatar={this.avatar} />
          </div>
          <div className={css(styles.chatInput)}>
            <ChatInput />
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
