import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MessageListView from '../components/MessageListView';
import ConversationInput from '../components/ConversationInput';
import ConversationExplorer from '../components/ConversationExplorer';
import CommonStyles, { colors } from '../assets/styles/Common';
import { getRandomAvatar } from '../static/avatars';

const styles = StyleSheet.create({
  conversationPage: {
    backgroundColor: colors.darkBlue,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  conversationContent: {
    height: '100%',
  },
  container: {
    height: '100%',
  },
  conversationInput: {
    marginTop: 'auto',
  },
  messageList: {
    marginTop: '6rem',
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
        <ConversationExplorer />
        <div className={css(styles.conversationContent)}>
          <div className={css(styles.container, CommonStyles.container)}>
            <div className={css(styles.messageList)}>
              <MessageListView avatar={this.avatar} />
            </div>
            <div className={css(styles.conversationInput)}>
              <ConversationInput />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Conversation;
