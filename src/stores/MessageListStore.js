import { observable, action } from 'mobx';

import MessageStore from './MessageStore';

class MessageListStore {
  @observable messages = [];

  @action add(text, type) {
    const message = new MessageStore(text, type);
    this.messages.push(message);
  }
};

const messageListStore = new MessageListStore();

export default messageListStore;
