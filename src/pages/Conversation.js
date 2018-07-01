import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import qs from 'query-string';
import { observer, inject } from 'mobx-react'

import MessageListView from '../components/MessageListView';
import ConversationInput from '../components/ConversationInput';
import ConversationExplorer from '../components/ConversationExplorer';
import CommonStyles, { colors, breakpoints } from '../assets/styles/Common';
import BannerImage from '../assets/images/banner.jpg';
import Explorer from '../static/explorer';
import { MESSAGE_TYPES } from '../stores/MessageStore';

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
    margin: '7rem 350px 0 350px',

    [breakpoints.desktop]: {
      width: 'calc(100% - 700px)',
    },
  },
  conversationInput: {
    marginTop: 'auto',
  },
});

@inject('messageListStore') @observer
class Conversation extends Component {
  constructor(props) {
    super(props);

    this.scrollMessageListView = () => {
      this.messageListView.scrollTop = this.messageListView.scrollHeight;
    }

    this.state = { text: '', messageHistory: 0 };
  }

  handleChange = (text) => {
    this.setState({ text, messageHistory: 0 })
  }

  handleChangeMessageHistory = (value) => {
    const { messageHistory } = this.state;
    const { messageListStore } = this.props;
    const messages = messageListStore.messagesByType(MESSAGE_TYPES.user);

    let newMessageHistory = messageHistory + value;

    if (newMessageHistory > 0) {
      newMessageHistory = 0;
    } else if (newMessageHistory < messages.length * -1) {
      newMessageHistory = messages.length * -1;
    }

    this.setState({ messageHistory: newMessageHistory });
  }

  componentDidMount() {
     window.addEventListener('resize', this.scrollMessageListView);
  }

  componentWillUnmount() {
     window.removeEventListener('resize', this.scrollMessageListView);
  }

  render() {
    const { messageListStore, location: { search } } = this.props;
    const category = qs.parse(search).category || Explorer.champion.key;
    const { messageHistory, text } = this.state;
    const messages = messageListStore.messagesByType(MESSAGE_TYPES.user);
    const messageHistoryMessage = messages[messages.length + messageHistory];
    const displayText = messageHistoryMessage ? messageHistoryMessage.text : text;

    return (
      <div className={css(styles.conversationPage)}>
        <ConversationExplorer category={category} />
        <div className={css(styles.conversationContent)}>
          <div className={css(CommonStyles.titleContainer, styles.container)}>
            <MessageListView
              onMessageChange={this.handleChange}
              messageListRef={list => this.messageListView = list}
            />
            <div className={css(styles.conversationInput)}>
              <ConversationInput
                onChange={this.handleChange}
                onChangeMessageHistory={this.handleChangeMessageHistory}
                text={displayText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;
