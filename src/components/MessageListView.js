import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types';

import { colors } from '../assets/styles/Common';
import MessageView from './MessageView';

const styles = StyleSheet.create({
  messageList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  messageListEmpty: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noMessages: {
    color: colors.grey,
    fontSize: '2rem',
  },
});

@inject('messageListStore') @observer
class MessageListView extends Component {
  static PropTypes = {
    messageListStore: PropTypes.object,
    avatar: PropTypes.string,
  }

  componentDidUpdate() {
    this.scrollToLastMessage();
  }

  scrollToLastMessage = () => {
    this.lastMessage && this.lastMessage.scrollIntoView();
  };

  render() {
    const { messageListStore, avatar } = this.props;
    let messageListContent, messageListStyle;
    const messages = messageListStore.messages;

    if (messages.length > 0) {
      messageListStyle = styles.messageList;
      messageListContent = (
        messages.map((message, index) => (
          <MessageView
            key={`message-${index}`}
            listRef={(m) => this.lastMessage = m}
            message={message}
            avatar={avatar}
          />
        ))
      );
    } else {
      messageListStyle = styles.messageListEmpty;
      messageListContent = (
        <div className={css(styles.noMessages)}>
          Not sure what to ask? Use the Conversation Explorer.
        </div>
      )
    }

    return (
      <div
        ref={(messageListView) => this.messageListView = messageListView}
        className={css(messageListStyle)}
      >
        {messageListContent}
      </div>
    )
  }
}

export default MessageListView;
