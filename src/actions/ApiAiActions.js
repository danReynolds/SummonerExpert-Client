import { ApiAiClient } from 'api-ai-javascript';

import messageListStore from '../stores/MessageListStore';
import { MESSAGE_TYPES } from '../stores/MessageStore';

const apiAiClient = new ApiAiClient({ accessToken: '2c82b4dc20f4427a9263c4d0fbb7050a' });

export const sendMessage = (text) => {
  messageListStore.add(text, MESSAGE_TYPES.user);
  apiAiClient.textRequest(text).then((response) => {
    messageListStore.add(response.result.fulfillment.speech, MESSAGE_TYPES.bot);
  })
}
