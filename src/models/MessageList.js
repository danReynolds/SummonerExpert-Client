import { observable, action } from 'mobx';

import Message from './Message';

class MessageList {
  @observable messages = [];

  @action
  add(text, type) {
    const message = new Message(text, type);
    this.messages.push(message);
  }
};

export default MessageList;
