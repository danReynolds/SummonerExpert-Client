export const MESSAGE_TYPES = {
  user: 'user',
  bot: 'bot',
};

class MessageStore {
  constructor(text, type) {
    this.text = text;
    this.type = type;
  }
};

export default MessageStore;
