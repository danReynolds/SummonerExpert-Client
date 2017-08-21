import { observable, action } from 'mobx';

import Message from './Message';

class MessageList {
  @observable messages = [];

  @action
  add(text) {
    const message = new Message(text);
    this.messages.push(message);
  }
};

export default MessageList;
