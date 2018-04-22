import _ from 'lodash';
import moment from 'moment';

import { INPUT_TYPES } from '../components/Input';
import { CHAMPION_NAMES } from './champions';
import { ITEM_NAMES } from './items';

export const Entities = {
  role: {
    key: 'role',
    title: 'Role',
    values: ['top', 'jungle', 'middle', 'ADC', 'support'],
    template: 'playing ',
  },
  role1: {
    key: 'role1',
    title: 'Role 1',
    values: ['top', 'jungle', 'middle', 'ADC', 'support'],
    template: 'playing ',
  },
  role2: {
    key: 'role2',
    title: 'Role 2',
    values: ['top', 'jungle', 'middle', 'ADC', 'support'],
    template: 'playing ',
  },
  list_order: {
    key: 'list_order',
    title: 'List order',
    defaultValue: 'highest',
    values: ['highest', 'lowest'],
  },
  matchup_position: {
    key: 'matchup_position',
    title: 'Statistic',
    defaultValue: 'win rate',
    values: [
      'kills', 'deaths', 'assists', 'CS', 'gold earned', 'win rate', 'damage dealt to champions',
      'killing sprees',
    ],
  },
  list_size: {
    key: 'list_size',
    title: 'List size',
    type: INPUT_TYPES.NUMERIC,
  },
  list_position: {
    key: 'list_position',
    title: 'List position',
    type: INPUT_TYPES.ORDINAL,
  },
  elo: {
    key: 'elo',
    title: 'Elo',
    values: ['bronze', 'silver', 'gold', 'platinum', 'plat and above'],
    template: 'in:division',
  },
  metric: {
    key: 'metric',
    title: 'Metric',
    defaultValue: 'highest win rate',
    values: ['highest win rate', 'most common'],
  },
  champion: {
    key: 'champion',
    title: 'Champion',
    values: CHAMPION_NAMES,
  },
  champion1: {
    key: 'champion1',
    title: 'Champion',
    values: CHAMPION_NAMES,
  },
  champion2: {
    key: 'champion2',
    title: 'Champion',
    values: CHAMPION_NAMES,
  },
  summoner_champion: {
    key: 'summoner_champion',
    title: 'Champion',
    values: CHAMPION_NAMES,
    template: 'playing '
  },
  ability: {
    key: 'ability',
    title: 'Ability',
    values: ['Q', 'W', 'E', 'R'],
  },
  rank: {
    key: 'rank',
    title: 'Rank',
    values: _.range(1, 6).map(val => _.toString(val)),
    template: 'at rank ',
  },
  level: {
    key: 'level',
    title: 'Level',
    values: _.range(1, 19).map(val => _.toString(val)),
    template: 'at level ',
  },
  position: {
    key: 'position',
    title: 'Statistic',
    defaultValue: 'win rate',
    values: [
      'win rate', 'CS', 'ban rate', 'damage dealt', 'gold', 'overall performance', 'deaths',
      'assists', 'kills', 'play rate', 'total healing done', 'total damage taken',
      'games per summoner', 'killing sprees'
    ],
  },
  position_details: {
    key: 'position_details',
    title: 'Statistic',
    defaultValue: 'win rate',
    values: [
      'win rate', 'kills', 'total damage taken', 'wards killed', 'games played', 'largest killing spree',
      'assists', 'play rate', 'games per summoner', 'gold', 'deaths', 'warsd placed', 'ban rate', 'CS',
      'total healing done',
    ],
  },
  stat: {
    key: 'stat',
    title: 'Statistic',
    values: [
      'armor', 'AD', 'range', 'crit', 'health', 'health regen', 'movement speed', 'mana',
      'mana regen', 'MR', 'attack speed',
    ],
  },
  item: {
    key: 'item',
    title: 'Item',
    values: ITEM_NAMES,
  },
  summoner: {
    key: 'summoner',
    title: 'Summoner',
    type: INPUT_TYPES.TEXT,
  },
  summoner_metric: {
    key: 'summoner_metric',
    title: 'Metric',
    defaultValue: 'win rate',
    values: ['win rate', 'KDA', 'games played'],
  },
  summoner_role: {
    key: 'summoner_role',
    title: 'Role',
    values: ['top', 'jungle', 'middle', 'ADC', 'support'],
  },
  summoner_position_details: {
    key: 'summoner_position_details',
    title: 'Statistic',
    values: [
      'kills', 'deaths', 'assists', 'largest killing spree', 'total killing sprees',
      'double kills', 'triple kills', 'quadra kills', 'penta kills', 'total damage dealt',
      'magic damage dealt', 'physical damage dealt', 'true damage dealt', 'largest crit strike',
      'total damage to champs', 'physical damage to champs', 'magic damage to champs',
      'true damage to champs', 'total healing', 'vision score', 'cc score', 'gold', 'towers taken',
      'inhibs taken', 'CS', 'vision wards', 'sight wards', 'jungle CS', 'own jungle CS',
      'enemy jungle CS',
    ]
  },
  summoner_metric_and_details: {
    key: 'summoner_metric_and_details',
    title: 'Statistic',
    values: [
      'win rate', 'KDA', 'games played',
      'kills', 'deaths', 'assists', 'largest killing spree', 'total killing sprees',
      'double kills', 'triple kills', 'quadra kills', 'penta kills', 'total damage dealt',
      'magic damage dealt', 'physical damage dealt', 'true damage dealt', 'largest crit strike',
      'total damage to champs', 'physical damage to champs', 'magic damage to champs',
      'true damage to champs', 'total healing', 'vision score', 'cc score', 'gold', 'towers taken',
      'inhibs taken', 'CS', 'vision wards', 'sight wards', 'jungle CS', 'own jungle CS',
      'enemy jungle CS'
    ],
    defaultValue: 'win rate',
  },
  startTime: {
    key: 'startTime',
    title: 'Start time',
    type: INPUT_TYPES.TIME,
    template: 'from ',
    defaultValue: moment().format('MMMM Do YYYY H:mm:ss'),
  },
  endTime: {
    key: 'endTime',
    title: 'End time',
    type: INPUT_TYPES.TIME,
    template: 'to ',
    defaultValue: moment().format('MMMM Do YYYY H:mm:ss'),
  },
};

export default {
  general: {
    title: 'General',
    key: 'general',
    sections: [
      {
        title: 'Patch',
        key: 'patch',
        queries: [
          { text: 'What patch are you on?' },
        ],
      },
      {
        title: 'Remember me',
        key: 'remember',
        queries: [
          { text: 'Remember me' },
          { text: 'Remember my summoner name' },
        ],
      },
      {
        title: 'Feature request',
        key: 'feature',
        queries: [
          { text: 'I want to request a feature' },
          { text: 'You guys are missing an awesome feature' },
          { text: 'I know how to make you better' },
        ],
      },
      {
        title: 'Bug report',
        key: 'bug',
        queries: [
          { text: 'I found a bug' },
          { text: 'Something went terribly wrong!' },
        ],
      },
    ],
  },
  champion: {
    title: 'Champion',
    key: 'champion',
    sections: {
      abilityOrder: {
        key: 'abilityOrder',
        title: 'Ability order',
        entities: [Entities.role.key, Entities.champion.key, Entities.metric.key, Entities.elo.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate: () => '{metric} ability order for {champion} {role} {elo}',
        queries: [
          { text: 'Kassadin skill order mid lane', tags: ['Role'] },
          { text: 'Azir skill order mid lane in Silver', tags: ['Role', 'Elo'] },
          { text: 'What do I start on Jayce Top?', tags: ['Role'] },
          { text: 'Twitch ADC ability order', tags: ['Role'] },
          { text: 'Darius ability order in challenger', tags: ['Role', 'Elo'] },
          { text: 'What should I max as Amumu?' },
          { text: 'Most frequent ability order for Zyra Support', tags: ['Role', 'Metric'] },
          { text: 'Highest win rate ability order for Nocturne Jungle in Bronze', tags: ['Role', 'Metric', 'Elo'] },
        ],
      },
      ability: {
        key: 'ability',
        title: 'Ability',
        entities: [Entities.ability.key, Entities.champion.key],
        requiredEntities: [Entities.ability.key, Entities.champion.key],
        queryTemplate: () => 'What does the {ability} for {champion} do?',
        queries: [
          { text: "What does Twitch's ultimate do?" },
          { text: "What is Ivern's q?" },
          { text: "Rek'Sai w" },
        ]
      },
      allyTips: {
        key: 'allyTips',
        title: 'Ally tips',
        entities: [Entities.champion.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate: () => 'Tip for playing {champion}',
        queries: [
          { text: 'Tip for playing with Jayce' },
          { text: 'How to play Yasuo' },
        ],
      },
      build: {
        key: 'build',
        title: 'Builds',
        entities: [Entities.champion.key, Entities.role.key, Entities.metric.key, Entities.elo.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate: () => '{metric} build for {champion} {role} {elo}',
        queries: [
          { text: 'What do I build on Elise?' },
          { text: 'Ezreal build Diamond', tags: ['Elo'] },
          { text: 'Jinx ADC build Platinum', tags: ['Elo', 'Role'] },
          { text: 'Highest win rate build for Sejuani Jungle in Gold', tags: ['Elo', 'Metric', 'Role'] },
          { text: 'Most frequent build on Jarvan IV Top in Silver', tags: ['Elo', 'Metric', 'Role'] },
        ],
      },
      cooldown: {
        key: 'cooldown',
        title: 'Cooldowns',
        queries: [
          { text: "What is the cooldown of Ahri's ult at rank 2?" },
          { text: "Viktor cooldown e rank 1" },
        ],
        entities: [Entities.champion.key, Entities.ability.key, Entities.rank.key],
        requiredEntities: [Entities.champion.key, Entities.ability.key],
        queryTemplate: () => '{champion} {ability} cooldown {rank}',
      },
      enemyTips: {
        key: 'enemyTips',
        title: 'Enemy tips',
        entities: [Entities.champion.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate: () => 'Tip for playing against {champion}',
        queries: [
          { text: 'How do I play against Yorick?' },
          { text: 'How to win vs Vayne' },
        ],
      },
      lore: {
        key: 'lore',
        title: 'Lore',
        entities: [Entities.champion.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate: () => 'lore for {champion}',
        queries: [
          { text: 'Tell me about Poppy' },
          { text: 'Who is Heimerdinger?' },
        ],
      },
      matchupRankings: {
        key: 'matchupRankings',
        title: 'Matchup rankings',
        entities: [
          Entities.champion.key, Entities.role1.key, Entities.matchup_position.key, Entities.role2.key,
          Entities.elo.key, Entities.list_position.key, Entities.list_size.key, Entities.list_order.key,
        ],
        requiredEntities: [Entities.champion.key, Entities.list_order.key, Entities.matchup_position.key],
        queryTemplate: (values) => {
          const { list_size } = values;
          if (list_size && parseInt(list_size, 10)  > 1) {
            return 'Which {list_size} champions have the {list_position} {list_order} {matchup_position} {role1} against {champion} {role2} {elo}';
          } else {
            return 'Which {list_size} champion has the {list_position} {list_order} {matchup_position} {role1} against {champion} {role2} {elo}';
          }
        },
        queries: [
          { text: 'Three counters for Vayne ADC', tags: ['List Size'] },
          { text: '2nd best support with Sivir', tags: ['List Position', 'Role'] },
          { text: 'Worst jungler to play against Lee Sin', tags: ['Order'] },
          { text: 'Which 5 supports synergyize best with Jinx?', tags: ['List Size', 'Order'] },
          { text: '3 Champions that get the most kills against Azir', tags: ['List Size', 'Metric'] },
          { text: 'Who gets the most deaths against Talon Mid?', tags: ['Metric', 'Role'] },
          { text: 'Who gets the highest CS against Heimerdinger Mid?', tags: ['Metric', 'Role'] },
          { text: 'Who gets the most gold against Riven in Bronze division?', tags: ['Elo', 'Position'] },
          { text: '3 junglers with the highest win rates against Udyr', tags: ['List Size', 'Role', 'Metric'] },
          { text: 'Who deals the most damage to Varus ADC in Diamond?', tags: ['Elo', 'Role', 'Metric'] },
          { text: 'Which Support gets the most assists with Draven?', tags: ['Role', 'Metric'] },
          { text: 'Which 10 mid laners go on killing sprees against Azir?', tags: ['Role', 'Metric'] },
        ],
      },
      matchups: {
        key: 'matchups',
        title: 'Matchups',
        entities: [
          Entities.champion1.key, Entities.champion2.key, Entities.role1.key, Entities.role2.key,
          Entities.matchup_position.key, Entities.elo.key,
        ],
        requiredEntities: [Entities.champion1.key, Entities.champion2.key, Entities.matchup_position.key],
        queryTemplate: () => 'How does {champion1} {role1} do against {champion2} {role2} by {matchup_position} {elo}',
        queries: [
          { text: 'Does Darius beat Kled in Top lane?', tags: ['Role'] },
          { text: 'Who gets more cs in Yorick vs Renekton?', tags: ['Metric'] },
          { text: 'Who dies more in in Zed vs Talon?', tags: ['Metric'] },
          { text: "Win rates for Rengar vs Kha'Zix", tags: ['Metric'] },
          { text: 'Who deals more damage to champions in Diana vs Azir', tags: ['Metric'] },
          { text: 'Who gets more assists in Blitzcrank vs Thresh Support?', tags: ['Role', 'Metric'] },
          { text: 'Does Jinx have good synergy with Blitzcrank?', tags: ['Role'] },
          { text: 'Gold difference Jinx vs Ashe in Diamond', tags: ['Role', 'Elo'] },
          { text: 'Does Draven get destroyed by Twitch?' },
          { text: 'Who gets more kills, Ornn or Maokai Jungle?', tags: ['Role', 'Metric'] },
          { text: 'How does Viktor do against Katorina mid in Bronze?', tags: ['Elo', 'Role'] },
        ],
      },
      roleRankings: {
        key: 'roleRankings',
        title: 'Role rankings',
        entities: [
          Entities.list_size.key, Entities.role.key, Entities.list_position.key, Entities.position.key,
          Entities.elo.key, Entities.list_order.key,
        ],
        requiredEntities: [Entities.role.key, Entities.position.key, Entities.list_order.key],
        queryTemplate: ({ list_size }) => {
          if (list_size && parseInt(list_size, 10) > 1) {
            return 'Which {list_size} champions get the {list_position} {list_order} {position} {role} {elo}';
          } else {
            return 'Which {list_size} champion gets the {list_position} {list_order} {position} {role} {elo}';
          }
        },
        queries: [
          { text: 'Which champion gets the most CS in mid lane?', tags: ['Order', 'Metric'] },
          { text: 'Which mid laner has the highest play rate in gold?', tags: ['Elo', 'Metric'] },
          { text: 'Top 5 adcs right now', tags: ['List Size'] },
          { text: 'Which jungler dies the most?', tags: ['Metric'] },
          { text: 'Which ADC has the lowest ban rate?', tags: ['Metric'] },
          { text: 'Which support does the most healing?', tags: ['Metric'] },
          { text: 'Which top laner gets the most gold?', tags: ['Metric'] },
          { text: '5 most popular junglers right now', tags: ['Metric', 'List Size'] },
          { text: 'Which Jungler has the most damage taken?', tags: ['Metric'] },
          { text: 'Who has the 2nd highest win rate in Top lane?', tags: ['Metric', 'List Position'] },
        ],
      },
      rolePerformanceSummary: {
        key: 'rolePerformanceSummary',
        title: 'Role performance summary',
        entities: [Entities.champion.key, Entities.role.key, Entities.elo.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate: () => 'How is {champion} doing {role} {elo}',
        queries: [
          { text: 'How is Jax top?', tags: ['Role'] },
          { text: 'How is Blitzcrank doing?' },
          { text: 'Is Mordekaiser viable?' },
          { text: 'How does Yasuo do in Challenger?', tags: ['Elo', 'Role'] },
          { text: 'How is Blitzcrank in Bronze division?', tags: ['Elo', 'Role'] },
          { text: 'Is Graves a jungler?', tags: ['Role'] },
        ],
      },
      rolePerformance: {
        key: 'rolePerformance',
        title: 'Role performance',
        entities: [
          Entities.champion.key, Entities.role.key, Entities.position_details.key, Entities.elo.key,
        ],
        requiredEntities: [Entities.champion.key, Entities.position_details.key],
        queryTemplate: () => '{position_details} for {champion} {role} {elo}',
        queries: [
          { text: 'How much CS does Ornn get top?', tags: ['Role', 'Metric'] },
          { text: 'Does Sion die a lot?', tags: ['Metric'] },
          { text: "What is Zed's ban rate mid?", tags: ['Role', 'Metric'] },
          { text: "What is Teemo's win rate top in Bronze?", tags: ['Role', 'Metric', 'Elo'] },
          { text: "How much damage does Galio take Mid?", tags: ['Role', 'Metric'] },
          { text: "How many wards does Rek'Sai destroy in Platinum?", tags: ['Role', 'Metric'] },
          { text: "What is Nocturne's play rate in Gold division?", tags: ['Metric', 'Elo'] },
          { text: "How many games per person does an average player have on Jax in Bronze?", tags: ['Metric', 'Elo'] },
          { text: 'How many wards does Soraka place in Silver?', tags: ['Metric', 'Elo'] },
          { text: 'What percent of games is Lucian played Mid in Silver?', tags: ['Metric', 'Elo', 'Role'] },
          { text: 'How many wards are placed by Jayce Top?', tags: ['Metric', 'Role'] },
          { text: 'How many games in total has Nunu been played in Platinum?', tags: ['Metric', 'Elo'] },
        ],
      },
      baseStats: {
        key: 'baseStats',
        title: 'Base stats',
        entities: [Entities.champion.key, Entities.stat.key, Entities.level.key],
        requiredEntities: [Entities.champion.key, Entities.stat.key, Entities.level.key],
        queryTemplate: () => 'What is the {stat} for {champion} {level}',
        queries: [
          { text: "What is Maokai's health at level 10?" },
          { text: "What is Zac's movement speed?" },
          { text: "What is Azir's armor at level 10?" },
          { text: "What is Caitlyn's attack range?" },
        ],
      },
      title: {
        key: 'title',
        title: 'Title',
        entities: [Entities.champion.key],
        requiredEntities: [Entities.champion.key],
        queryTemplate:  () => 'What do they call {champion}',
        queries: [
          { text: 'What do they call Braum?' },
          { text: "What is Elise's title?" },
        ],
      },
    },
  },
  item: {
    title: 'Item',
    key: 'item',
    sections: {
      build: {
        key: 'build',
        title: 'Build',
        entities: [Entities.item.key],
        requiredEntities: [Entities.item.key],
        queryTemplate: () => 'How do you build {item}',
        queries: [
          { text: 'How do you build bork?' },
          { text: 'Build for Redemption' },
        ],
      },
      description: {
        key: 'description',
        title: 'Description',
        entities: [Entities.item.key],
        requiredEntities: [Entities.item.key],
        queryTemplate: () => 'What does {item} do?',
        queries: [
          { text: 'Tell me about Boots of Speed' },
          { text: 'What does Thornmail give?' },
          { text: 'Stats for Mercurial Scimitar' },
        ],
      },
    }
  },
  summoner: {
    title: 'Summoner (NA Only)',
    key: 'summoner',
    sections: {
      currentGame: {
        key: 'currentGame',
        title: 'Current game',
        entities: [Entities.summoner.key],
        requiredEntities: [Entities.summoner.key],
        queryTemplate: () => 'Is {summoner} going to win his lane',
        queries: [
          { text: 'Is Dyrus going to win his lane?' },
          { text: 'Does Pobelter have an easy lane?' },
        ],
      },
      rank: {
        key: 'rank',
        title: 'Rank',
        entities: [Entities.summoner.key],
        requiredEntities: [Entities.summoner.key],
        queryTemplate: () => 'How is {summoner} doing?',
        queries: [
          { text: 'How is Imaqtpie doing?' },
          { text: 'Lookup Dyrus' },
          { text: 'What rank is Pobelter?' },
        ],
      },
      stats: {
        title: 'Summoner Stats',
        key: 'stats',
        entities: [
          Entities.summoner.key, Entities.summoner_champion.key, Entities.summoner_metric_and_details.key,
          Entities.summoner_role.key, Entities.startTime.key, Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.summoner_metric_and_details.key,
        ],
        queryTemplate: () => '{summoner_metric_and_details} for {summoner} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}',
        queries: [
          { text: 'How many kills does Rikara get?' },
          { text: 'How many wards does Pants are Dragon place as Xin Zhao jg?' },
          { text: 'Gold earned by CLG Reign0ver playing Jarvan' }
        ]
      },
      counters: {
        key: 'counters',
        title: 'Counters',
        entities: [
          Entities.summoner.key, Entities.summoner_champion.key, Entities.list_size.key, Entities.list_position.key,
          Entities.list_order.key, Entities.summoner_role.key, Entities.summoner_metric_and_details.key,
          Entities.startTime.key, Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.list_order.key, Entities.summoner_metric_and_details.key,
          Entities.summoner_role.key,
        ],
        queryTemplate: ({ list_size }) => {
          if (parseInt(list_size, 10) > 1) {
            return 'Which {list_size} champions have the {list_position} {list_order} {summoner_metric_and_details} against {summoner} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}';
          } else {
            return 'Which {list_size} champion has the {list_position} {list_order} {summoner_metric_and_details} against {summoner} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}';
          }
        },
        queries: [
          { text: 'Who counters Imaqtpie playing Twitch?' },
          { text: 'Who has the highest KDA against Dyrus Top?' },
          { text: "Who gets the most assists against pokimane's Lulu?" },
        ]
      },
      matchups: {
        key: 'matchups',
        title: 'Matchups',
        entities: [
          Entities.summoner_champion.key, Entities.champion2.key, Entities.summoner.key, Entities.endTime.key,
          Entities.summoner_role.key, Entities.startTime.key, Entities.summoner_metric_and_details.key,
        ],
        requiredEntities: [
          Entities.champion2.key, Entities.summoner.key,
          Entities.summoner_metric_and_details.key,
        ],
        queryTemplate: () => '{summoner_metric_and_details} comparison for {summoner} {summoner_champion} against {champion2} {summoner_role} {elo} {startTime} {endTime}',
        queries: [
          { text: "How does Pants are Dragon do playing against Kha'Zix jg?" },
          { text: 'How many times has Dyrus played Rumble Top against Jayce?' },
          { text: "What is pokimane's KDA playing Lulu against Bard?" },
        ],
      },
      teammates: {
        key: 'teammates',
        entities: [
          Entities.summoner.key, Entities.summoner_champion.key, Entities.list_order.key, Entities.list_size.key,
          Entities.summoner_metric_and_details.key, Entities.list_position.key, Entities.startTime.key,
          Entities.summoner_role.key, Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.list_order.key,
          Entities.summoner_metric_and_details.key,
        ],
        queryTemplate: ({ list_size }) => {
          if (parseInt(list_size, 10) > 1) {
            return '{list_position} {list_size} teammates who help {summoner} get the {list_order} {summoner_metric_and_details} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}';
          } else {
            return '{list_position} {list_size} teammate who helps {summoner} get the {list_order} {summoner_metric_and_details} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}';
          }
        },
        title: 'Teammates',
        queries: [
          { text: 'Who helps Pants are Dragon win the most games as Warwick?' },
          { text: 'Which teammate does Dyrus get the best KDA with playing playing ADC?' },
          { text: '5 people pokimane plays with the most as Lulu' },
        ],
      },
      bans: {
        key: 'bans',
        title: 'Bans',
        entities: [
          Entities.summoner.key, Entities.list_order.key, Entities.summoner_champion.key,
          Entities.summoner_metric_and_details.key, Entities.list_size.key,
          Entities.list_position.key, Entities.startTime.key, Entities.summoner_role.key,
          Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.list_order.key, Entities.summoner_metric_and_details.key,
        ],
        queryTemplate: ({ list_size }) => {
          if (parseInt(list_size, 10) > 1) {
            return '{list_size} bans that give {summoner} the {list_position} {list_order} {summoner_metric_and_details} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}';
          } else {
            return '{list_size} ban that gives {summoner} the {list_position} {list_order} {summoner_metric_and_details} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}';
          }
        },
        queries: [
          { text: 'Who does Dyrus ban to get the best KDA playing Top?' },
          { text: "Who does Saaantorin ban most often playing Kha'Zix" },
          { text: 'Top 3 bans by Rikara playing Lucian ADC' },
        ]
      },
      spells: {
        key: 'spells',
        title: 'Spells',
        entities: [
          Entities.summoner.key, Entities.list_order.key, Entities.summoner_champion.key,
          Entities.summoner_metric_and_details.key, Entities.list_position.key,
          Entities.startTime.key, Entities.summoner_role.key, Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.list_order.key, Entities.summoner_metric_and_details.key,
        ],
        queryTemplate: () => 'spell combination that gives {summoner} the {list_position} {list_order} {summoner_metric_and_details} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}',
        queries: [
          { text: 'Which summoner spells does Rikara take most often on Lucian ADC?' },
          { text: 'Which spells does Pobelter get the best KDA on playing Azir Mid?' },
          { text: 'Spells fulano takes the most towers with playing Gangplank' },
        ],
      },
      championRanking: {
        key: 'championRanking',
        title: 'Champion Ranking',
        entities: [
          Entities.summoner.key, Entities.list_order.key, Entities.list_size.key, Entities.list_position.key,
          Entities.summoner_role.key, Entities.summoner_metric_and_details.key, Entities.startTime.key,
          Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.list_order.key, Entities.summoner_metric_and_details.key,
        ],
        queryTemplate: ({ list_size }) => {
          if (parseInt(list_size, 10) > 1) {
            return '{list_size} champions with the {list_position} {list_order} {summoner_metric_and_details} played by {summoner} {summoner_role} {elo} {startTime} {endTime}';
          } else {
            return '{list_size} champion with the {list_position} {list_order} {summoner_metric_and_details} played by {summoner} {summoner_role} {elo} {startTime} {endTime}';
          }
        },
        queries: [
          { text: '3 most played champions by Rallemus' },
          { text: "who does Imaqtpie play most often bot?" },
          { text: 'Which champion does Doublelift get the most kills with?' },
        ],
      },
      championPerformance: {
        key: 'championPerformance',
        title: 'Champion Performance',
        entities: [
          Entities.summoner.key, Entities.summoner_champion.key, Entities.startTime.key,
          Entities.endTime.key,
        ],
        requiredEntities: [Entities.summoner.key, Entities.summoner_champion.key],
        queryTemplate: () => 'How is {summoner} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}',
        queries: [
          { text: 'Does Doublelift play Xayah?' },
          { text: 'LL Stylish playing Zed' },
          { text: 'How is mvsh doing on Draven?' },
        ]
      },
      championBuild: {
        entities: [
          Entities.summoner.key, Entities.summoner_champion.key, Entities.summoner_role.key, Entities.list_order.key,
          Entities.summoner_metric_and_details.key, Entities.startTime.key, Entities.endTime.key,
        ],
        requiredEntities: [
          Entities.summoner.key, Entities.summoner_metric_and_details.key,
          Entities.list_order.key,
        ],
        queryTemplate: () => '{list_order} {summoner_metric_and_details} build for {summoner} {summoner_champion} {summoner_role} {elo} {startTime} {endTime}',
        key: 'championBuild',
        title: 'Champion Builds',
        queries: [
          { text: 'What does Dyrus build on Rumble Top?' },
          { text: 'Which build gives Doublelift the best KDA on Xayah?' },
          { text: 'What does Annie Bot build on Annie Bot?' },
        ]
      },
    }
  },
};
