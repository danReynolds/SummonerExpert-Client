import _ from 'lodash';
const itemJSON = require('./items.json');

export const ITEM_NAMES = Object.keys(itemJSON.data);
export const itemQueries = [
  (() => {
    const item = _.sample(ITEM_NAMES);
    return {
      id: item,
      query: `What does ${item} do?`,
    };
  })(),
  (() => {
    const item = _.sample(ITEM_NAMES);
    return {
      id: item,
      query: `What stats does ${item} give?`,
    };
  })(),
  (() => {
    const item = _.sample(ITEM_NAMES);
    return {
      id: item,
      query: `How do you build ${item}?`,
    };
  })(),
  (() => {
    const item = _.sample(ITEM_NAMES);
    return {
      id: item,
      query: `How much does ${item} cost?`,
    };
  })(),
  (() => {
    const item = _.sample(ITEM_NAMES);
    return {
      id: item,
      query: `Tell me about ${item}`,
    };
  })(),
  {
    id: 'Rumble',
    query: 'What does Dyrus build on Rumble Top?',
  },
  {
    id: 'Annie',
    query: 'What does Annie Bot build on Annie Bot?',
  },
  {
    id: 'Zoe',
    query: 'Best build for Zoe Mid',
  },
  {
    id: 'Ornn',
    query: 'Most frequent build for Ornn Top',
  },
];

export const getItemImage = (item) => {
  const itemImage = itemJSON.data[item];
  if (!itemImage) {
    return;
  }

  return `${itemJSON.url}/${itemImage}`;
};

export default {
  getItemImage,
  itemQueries,
};
