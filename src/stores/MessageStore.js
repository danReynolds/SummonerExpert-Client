import { observable, action } from 'mobx';

export const MESSAGE_TYPES = {
  user: 'user',
  bot: 'bot',
};

class MessageStore {
  @observable text;

  constructor(id, text, type) {
    this.id = id;
    this.text = text;
    this.type = type;
  }

  @action update(text) {
    this.text = text;
  }
};

export default MessageStore;
