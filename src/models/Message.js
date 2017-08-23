export const MESSAGE_TYPES = {
  user: 'user',
  bot: 'bot',
};


class Message {
  constructor(text, type) {
    this.text = text;
    this.type = type;
  }
};

export default Message;
