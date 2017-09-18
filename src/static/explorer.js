const explorer = [
  {
    title: 'Patch',
    queries: [
      { text: 'What patch are you on?' },
    ],
  },
  {
    title: 'Ability order',
    tags: ['Role', 'Elo', 'Metric'],
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
  {
    title: 'Ability',
    queries: [
      { text: "What does Twitch's ultimate do?" },
      { text: "What is Ivern's q?" },
      { text: "Rek'Sai w" },
    ]
  },
  {
    title: 'Ally tips',
    queries: [
      { text: 'Tip for playing with Jayce' },
      { text: 'How to play Yasuo' },
    ],
  },
  {
    title: 'Champion builds',
    tags: ['Role', 'Metric', 'Elo'],
    queries: [
      { text: 'What do I build on Elise?' },
      { text: 'Ezreal build Diamond', tags: ['Elo'] },
      { text: 'Jinx ADC build Platinum', tags: ['Elo', 'Role'] },
      { text: 'Highest win rate build for Sejuani Jungle in Gold', tags: ['Elo', 'Metric', 'Role'] },
      { text: 'Most frequent build on Jarvan IV Top in Silver', tags: ['Elo', 'Metric', 'Role'] },
    ],
  },
  {
    title: 'Cooldowns',
    queries: [
      { text: "What is the cooldown of Ahri's ult at rank 2?" },
      { text: "Viktor cooldown e rank 1" },
    ],
  },
  {
    title: 'Enemy tips',
    queries: [
      { text: 'How do I play against Yorick?' },
      { text: 'How to win vs Vayne' },
    ],
  },
  {
    title: 'Champion lore',
    queries: [
      { text: 'Tell me about Poppy' },
      { text: 'Who is Heimerdinger?' },
    ],
  },
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    title: 'Champion base stats',
    queries: [
      { text: "What is Maokai's health at level 10?" },
      { text: "What is Zac's movement speed?" },
      { text: "What is Azir's armor at level 10?" },
      { text: "What is Caitlyn's attack range?" },
    ],
  },
  {
    title: 'Champion title',
    queries: [
      { text: 'What do they call Braum?' },
      { text: "What is Elise's title?" },
    ],
  },
  {
    title: 'Item build',
    queries: [
      { text: 'How do you build bork?' },
      { text: 'Build for Redemption' },
    ],
  },
  {
    title: 'Item description',
    queries: [
      { text: 'Tell me about Boots of Speed' },
      { text: 'What does Thornmail give?' },
      { text: 'Stats for Mercurial Scimitar' },
    ],
  },
  {
    title: 'Summoner lookup',
    queries: [
      { text: 'Lookup imaqtpie in NA' },
      { text: 'Lookup God' },
    ],
  },
];

export default explorer;
