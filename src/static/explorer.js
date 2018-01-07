import _ from 'lodash';

const entities = {
  role: {
    key: 'role',
    title: 'Role',
    values: ['top', 'jungle', 'middle', 'ADC', 'support'],
    template: 'playing {role}'
  },
  elo: {
    key: 'elo',
    title: 'Elo',
    values: ['bronze', 'silver', 'gold', 'platinum and above'],
    template: 'in {elo} division',
  },
  metric: {
    key: 'metric',
    title: 'Metric',
    values: ['highest win rate', 'most common']
  },
  champion: {
    key: 'champion',
    title: 'Champion',
    values: ['Aatrox', 'Zed']
  },
}

export default {
  general: {
    title: 'General',
    key: 'general',
    sections: [
      {
        title: 'Patch',
        queries: [
          { text: 'What patch are you on?' },
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
        entities: _.pick(entities, ['role', 'elo', 'metric', 'champion']),
        queryTemplate: '{metric} ability order for {champion:required} {role} {elo}',
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
        queries: [
          { text: "What does Twitch's ultimate do?" },
          { text: "What is Ivern's q?" },
          { text: "Rek'Sai w" },
        ]
      },
      allyTips: {
        key: 'allyTips',
        title: 'Ally tips',
        queries: [
          { text: 'Tip for playing with Jayce' },
          { text: 'How to play Yasuo' },
        ],
      },
      build: {
        key: 'build',
        title: 'Builds',
        tags: ['Role', 'Metric', 'Elo'],
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
      },
      enemyTips: {
        key: 'enemyTips',
        title: 'Enemy tips',
        queries: [
          { text: 'How do I play against Yorick?' },
          { text: 'How to win vs Vayne' },
        ],
      },
      lore: {
        key: 'lore',
        title: 'Lore',
        queries: [
          { text: 'Tell me about Poppy' },
          { text: 'Who is Heimerdinger?' },
        ],
      },
      matchupRankings: {
        key: 'matchupRankings',
        title: 'Matchup rankings',
        tags: ['Role', 'Order', 'Elo', 'Metric', 'List Position', 'List Size'],
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
        tags: ['Role', 'Elo', 'Metric'],
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
        tags: ['Elo', 'List Size', 'List Position', 'Metric'],
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
        tags: ['Elo', 'Role'],
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
        tags: ['Role', 'Elo', 'Metric'],
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
        queries: [
          { text: 'How do you build bork?' },
          { text: 'Build for Redemption' },
        ],
      },
      description: {
        key: 'description',
        title: 'Description',
        queries: [
          { text: 'Tell me about Boots of Speed' },
          { text: 'What does Thornmail give?' },
          { text: 'Stats for Mercurial Scimitar' },
        ],
      },
    }
  },
  summoner: {
    title: 'Summoner',
    key: 'summoner',
    sections: {
      rank: {
        key: 'rank',
        title: 'Rank',
        queries: [
          { text: 'How is Imaqtpie doing?' },
          { text: 'Lookup Dyrus' },
          { text: 'What rank is Pobelter?' },
        ],
      },
      champions: {
        key: 'champions',
        title: 'Champions',
        queries: [
          { text: '3 most played champions by Rallemus' },
          { text: "Who is TheOddOne's highest KDA champion?" },
          { text: 'Which champion does Doublelift get the most kills with?' },
        ],
      },
      championPerformance: {
        key: 'championPerformance',
        title: 'Champion Performance',
        queries: [
          { text: 'Does Doublelift play Xayah?' },
          { text: 'LL Stylish playing Zed' },
          { text: 'How is mvsh doing on Draven?' },
        ]
      },
      championStats: {
        title: 'Champion Stats',
        key: 'championStats',
        queries: [
          { text: 'How many kills does Rikara get playing Ezreal?' },
          { text: 'How many wards does Pants are Dragon place as Xin Zhao jg?' },
          { text: 'KDA for CLG Reign0ver playing Jarvan' }
        ]
      },
      championBuild: {
        key: 'championBuild',
        title: 'Champion Builds',
        queries: [
          { text: 'What does Dyrus build on Rumble Top?' },
          { text: 'Which build gives Doublelift the best KDA on Xayah?' },
          { text: 'What does Annie Bot build on Annie Bot?' },
        ]
      },
      championCounters: {
        key: 'championCounters',
        title: 'Champion Counters',
        queries: [
          { text: 'Who counters TheOddOne playing Ezreal?' },
          { text: 'Who has the highest KDA against Dyrus as Camille?' },
          { text: "Who gets the most assists against pokimane's Lulu?" },
        ]
      },
      championMatchups: {
        key: 'championMatchups',
        title: 'Champion Matchups',
        queries: [
          { text: "How does Pants are Dragon do playing Xin Xhao against Kha'Zix jg?" },
          { text: 'How many times has Dyrus played Rumble Top against Jayce?' },
          { text: "What is pokimane's KDA playing Lulu against Bard?" },
        ],
      },
      teammates: {
        key: 'teammates',
        title: 'Teammates',
        queries: [
          { text: 'Who helps Pants are Dragon win the most games as Warwick?' },
          { text: 'Which teammate does Dyrus get the best KDA with playing Rumble Top?' },
          { text: '5 people pokimane plays with the most as Lulu' },
        ],
      },
      bans: {
        key: 'bans',
        title: 'Bans',
        queries: [
          { text: 'Who does Dyrus ban to get the best KDA playing Rumble Top?' },
          { text: "Who does Saaantorin ban most often playing Kha'Zix" },
          { text: 'Top 3 bans by Rikara playing Lucian ADC' },
        ]
      },
      spells: {
        key: 'spells',
        title: 'Spells',
        queries: [
          { text: 'Which summoner spells does Rikara take most often on Lucian ADC?' },
          { text: 'Which spells does Pobelter get the best KDA on playing Azir Mid?' },
          { text: 'Spells fulano takes the most towers with playing Gangplank' },
        ],
      }
    }
  },
};
