import _ from 'lodash';
import { ApiAiClient } from 'api-ai-javascript';
import Cookies from 'js-cookie';

import messageListStore from '../stores/MessageListStore';
import { MESSAGE_TYPES } from '../stores/MessageStore';
import Responses from '../static/responses';

const apiAiClient = new ApiAiClient({ accessToken: '2c82b4dc20f4427a9263c4d0fbb7050a' });
const MESSAGES_BEFORE_PROMPT = 1;

const CACHE_PERMISSIONS = {
  PENDING: 'cache_pending',
  ACCEPTED: 'cache_accepted',
  REJECTED: 'cache_rejected',
};

export const sendMessage = (text, options = {}) => {
  messageListStore.add(text, MESSAGE_TYPES.user);
  const botMessage = messageListStore.add('', MESSAGE_TYPES.bot);

  const updatedOptions = { contexts: [], ...options };
  const summonerName = Cookies.get('cacheSummonerName');
  if (summonerName) {
    updatedOptions.contexts = [{
      name: 'summoner',
      lifespan: 1,
      parameters: {
        name: summonerName,
      },
    }];
  }

  if (Cookies.get('cachePermission') === CACHE_PERMISSIONS.PENDING) {
    updatedOptions.contexts = [
      ...updatedOptions.contexts,
      {
        name: CACHE_PERMISSIONS.PENDING,
        lifespan: 1,
      }
    ]
  }

  apiAiClient.textRequest(text, updatedOptions).then((response) => {
    const { result: { action, fulfillment, contexts } } = response;
    messageListStore.updateMessage(botMessage.id, fulfillment.speech);

    if (!Cookies.get('cachePermission')
      && messageListStore.messagesByType(MESSAGE_TYPES.user).length === MESSAGES_BEFORE_PROMPT) {
      const permission = CACHE_PERMISSIONS.PENDING;
      const response = _.sample(Responses[permission]);
      Cookies.set('cachePermission', permission);
      messageListStore.add(response, MESSAGE_TYPES.bot);
    } else if (action === CACHE_PERMISSIONS.ACCEPTED) {
      const pendingContext = _.find(contexts, context => context.name === CACHE_PERMISSIONS.PENDING);
      const name = _.get(pendingContext, ['parameters', 'name']);
      if (name) {
        Cookies.set('cachePermission', CACHE_PERMISSIONS.ACCEPTED);
        Cookies.set('cacheSummonerName', name);
      }
    } else if (action === CACHE_PERMISSIONS.REJECTED) {
      Cookies.set('cachePermission', CACHE_PERMISSIONS.REJECTED);
    }
  });
}
