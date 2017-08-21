import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class MessageListView extends Component {
  render() {
    return (
      <ul>
        {this.props.messageList.messages.map(message => (
          <li>{message.text}</li>
        ))}
      </ul>
    )
  }
}

export default MessageListView;
