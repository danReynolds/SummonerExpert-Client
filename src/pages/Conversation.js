import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MessageListView from '../components/MessageListView';
import ConversationInput from '../components/ConversationInput';
import ConversationExplorer from '../components/ConversationExplorer';
import CommonStyles, { colors } from '../assets/styles/Common';
import BannerImage from '../assets/images/vitaliy-paykov-212215.jpg';

const styles = StyleSheet.create({
  conversationPage: {
    backgroundImage: `linear-gradient(${colors.brightBlue}, ${colors.nightBlue}), url(${BannerImage})`,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
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
  },
});

class Conversation extends Component {
  constructor(props) {
    super(props);

    this.scrollMessageListView = () => {
      this.messageListView.scrollTop = this.messageListView.scrollHeight;
    }
  }

  componentDidMount() {
     window.addEventListener('resize', this.scrollMessageListView);
  }

  componentWillUnmount() {
     window.removeEventListener('resize', this.scrollMessageListView);
  }

  render() {
    return (
      <div className={css(styles.conversationPage)}>
        <ConversationExplorer />
        <div className={css(styles.conversationContent)}>
          <div className={css(styles.container, CommonStyles.container)}>
            <MessageListView messageListRef={list => this.messageListView = list} />
            <div className={css(styles.conversationInput)}>
              <ConversationInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;
