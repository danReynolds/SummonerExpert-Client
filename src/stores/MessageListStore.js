import { observable, action } from 'mobx';

import MessageStore from './MessageStore';

class MessageListStore {
  @observable messages = [];

  @action add(text, type) {
    const id = this.messages.length;
    const message = new MessageStore(id, text, type);
    this.messages.push(message);

    return message;
  }

  @action updateMessage(id, text) {
    const message = this.messages[id];
    message.update(text);
  }
};

const messageListStore = new MessageListStore();

export default messageListStore;
