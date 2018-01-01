const itemJSON = require('./items.json');

export const itemQueries = [
  {
    id: 'Hexdrinker',
    query: 'What does Hexdrinker do?',
  },
  {
    id: 'Tiamat',
    query: "What stats does Tiamat give?"
  },
  {
    id: 'Ardent Censer',
    query: 'How do you build Ardent Censer?',
  },
  {
    id: 'Redemption',
    query: 'What does Redemption cost?',
  },
  {
    id: 'Boots of Speed',
    query: 'Tell me about Boots of Speed.',
  },
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
