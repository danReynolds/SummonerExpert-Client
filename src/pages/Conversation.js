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
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  conversationContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  conversationInput: {
    marginTop: 'auto',
    paddingTop: '1rem',
  },
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
            <MessageListView avatar={this.avatar} />
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
