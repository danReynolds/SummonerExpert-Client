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
  }
];

export const getItemImage = (item) => {
  return `${itemJSON.url}/${itemJSON.data[item]}`;
};

export default {
  getItemImage,
  itemQueries,
};
