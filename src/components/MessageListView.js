import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { observer } from 'mobx-react';

import MessageView from './MessageView';

const styles = StyleSheet.create({
  messageList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

@observer
class MessageListView extends Component {

  componentDidUpdate() {
    this.scrollToLastMessage();
  }

  scrollToLastMessage = () => {
    this.lastMessage && this.lastMessage.scrollIntoView();
  };

  render() {
    return (
      <div
        ref={(messageListView) => this.messageListView = messageListView}
        className={css(styles.messageList)}
      >
        {this.props.messageList.messages.map((message, index) => (
          <MessageView
            key={`message-${index}`}
            listRef={(m) => this.lastMessage = m}
            message={message}
            avatar={this.props.avatar}
          />
        ))}
      </div>
    )
  }
}

export default MessageListView;
