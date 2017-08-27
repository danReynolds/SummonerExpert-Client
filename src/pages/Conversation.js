import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MessageListView from '../components/MessageListView';
import ConversationInput from '../components/ConversationInput';
import CommonStyles, { colors } from '../assets/styles/Common';
import { getRandomAvatar } from '../static/avatars';

const styles = StyleSheet.create({
  conversationPage: {
    paddingTop: 0,
    backgroundColor: colors.darkBlue,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '100%',
  },
  conversationInput: {
    marginTop: 'auto',
  },
  messageList: {
    height: '100%',
    overflow: 'auto',
    marginBottom: '2rem',
  }
});

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.avatar = getRandomAvatar();
  }

  render() {
    return (
      <div className={css(styles.conversationPage)}>
        <div className={css(styles.container, CommonStyles.container)}>
          <div className={css(styles.messageList)}>
            <MessageListView avatar={this.avatar} />
          </div>
          <div className={css(styles.conversationInput)}>
            <ConversationInput />
          </div>
        </div>
      </div>
    )
  }
}

export default Conversation;
