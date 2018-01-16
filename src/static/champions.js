import _ from 'lodash';

const championJSON = require('./champions.json');

export const CHAMPION_NAMES = Object.keys(championJSON.data);
export const championQueries = [
  (() => {
    const champion = _.sample(CHAMPION_NAMES);
    return {
      id: champion,
      query: `How is ${champion} doing?`,
    };
  })(),
  (() => {
    const champion = _.sample(CHAMPION_NAMES);
    return {
      id: champion,
      query: `Win rate for ${champion} in gold?`,
    };
  })(),
  (() => {
    const champion = _.sample(CHAMPION_NAMES);
    return {
      id: champion,
      query: `Top 3 counters for ${champion}?`,
    };
  })(),
  {
    id: 'Bard',
    query: 'Who does Bard synergize with?',
  },
  (() => {
    const champion = _.sample(CHAMPION_NAMES);
    return {
      id: champion,
      query: `Highest win rate ability order for ${champion}?`,
    };
  })(),
  {
    id: "Cho'Gath",
    query: "How many kills does Cho'gath get Top.",
  },
  (() => {
    const champion = _.sample(CHAMPION_NAMES);
    return {
      id: champion,
      query: `Does {champion} get a lot of assists?`,
    };
  })(),
  {
    id: 'Garen',
    id2: 'Darius',
    query: 'How does Garen do against Darius Top?',
  },
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
  const championImage = championJSON.data[champion];
  if (!championImage) {
    return;
  }

  return `${championJSON.url}/${championImage}`;
}

export default {
  getChampionImage,
  championQueries,
};
