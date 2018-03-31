import _ from 'lodash';
import { ApiAiClient } from 'api-ai-javascript';
import Cookies from 'js-cookie';

import messageListStore from '../stores/MessageListStore';
import { MESSAGE_TYPES } from '../stores/MessageStore';
import Responses from '../static/responses';

const apiAiClient = new ApiAiClient({ accessToken: '2c82b4dc20f4427a9263c4d0fbb7050a' });
let contexts = [];

const CACHE_PERMISSIONS = {
  PENDING: 'cache_pending',
  ACCEPTED: 'cache_accepted',
  REJECTED: 'cache_rejected',
};

const getSummonerName = () => {
  const summonerContext = _.find(contexts, context => context.name === 'summoner');
  return _.get(summonerContext, 'parameters.name');
}

export const sendMessage = (text, options = {}) => {
  messageListStore.add(text, MESSAGE_TYPES.user);
  const botMessage = messageListStore.add('', MESSAGE_TYPES.bot);

  const updatedOptions = { contexts: [], ...options };
  const cacheSummonerName = Cookies.get('cacheSummonerName');
  if (cacheSummonerName) {
    updatedOptions.contexts = [{
      name: 'summoner',
      lifespan: 1,
      parameters: {
        self: cacheSummonerName,
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
    const { result: { action, fulfillment: { messages }, contexts: currentContexts } } = response;
    contexts = currentContexts;

    const [quickResponse, ...fullResponse] = messages;
    messageListStore.updateMessage(botMessage.id, quickResponse.speech);
    fullResponse.forEach(response => messageListStore.add(response.speech, MESSAGE_TYPES.bot));

    const summonerName = getSummonerName(contexts);
    if (!Cookies.get('cachePermission') && summonerName) {
      const permission = CACHE_PERMISSIONS.PENDING;
      const response = _.sample(Responses[permission])(summonerName);
      Cookies.set('cachePermission', permission);
      messageListStore.add(response, MESSAGE_TYPES.bot);
    } else if (action === CACHE_PERMISSIONS.ACCEPTED) {
      const pendingContext = _.find(contexts, context => context.name === CACHE_PERMISSIONS.PENDING);
      const name = _.get(pendingContext, ['parameters', 'name']);
      if (name) {
        Cookies.set('cachePermission', CACHE_PERMISSIONS.ACCEPTED, { expires: 365 });
        Cookies.set('cacheSummonerName', name, { expires: 365 });
      }
    } else if (action === CACHE_PERMISSIONS.REJECTED) {
      Cookies.set('cachePermission', CACHE_PERMISSIONS.REJECTED);
    }
  });
}
