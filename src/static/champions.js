const championJSON = require('./champions.json');

export const championQueries = [
  {
    id: 'Jayce',
    query: 'How is Jayce doing?',
  },
  {
    id: 'Akali',
    query: "What is Akali's win rate in gold?"
  },
  {
    id: 'Riven',
    query: 'Top 3 counters for Riven.',
  },
  {
    id: 'Bard',
    query: 'Who does Bard synergize with?',
  },
  {
    id: 'Caitlyn',
    query: 'Highest winrate build for Caitlyn.',
  }
];

export const championMatchupQueries = [
  {
    id: 'Nocturne',
    id2: 'Shyvana',
    query: 'How does Nocturne do against Shyvana?',
  },
  {
    id: 'Jinx',
    id2: 'Blitzcrank',
    query: "How does Jinx do against Blitzcrank?"
  },
  {
    id: 'Darius',
    id2: 'Kled',
    query: 'Does Darius beat Kled in Top lane?',
  },
  {
    id: 'Morgana',
    id2: 'Ashe',
    query: 'How does Morgana synergize with Ashe?',
  },
  {
    id: 'Heimerdinger',
    id2: 'Orianna',
    query: 'Is Heimerdinger a good counter for Orianna?',
  },
  {
    id: 'Warwick',
    id2: 'Lee Sin',
    query: 'Who gets more kills playing Jungle Warwick or Lee Sin?',
  },
  {
    id: 'Gangplank',
    id2: 'Gnar',
    query: 'Who gets more cs in Gankplank vs Gnar?',
  },
];

export const getChampionImage = (champion) => {
  return `${championJSON.url}/${championJSON.data[champion]}`;
}

export default {
  getChampionImage,
  championQueries,
  championMatchupQueries,
};
