import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { bubbles } from 'react-icons-kit/icomoon/bubbles';
import echarts from 'echarts';

import { getSimilarity } from '../lib/endpoints';
import SearchBar from '../components/SearchBar';
import CommonStyles, { desktop, CategoryIcons, colors, fonts } from '../assets/styles/Common';
import RecommendationList from '../components/RecommendationList';
import QueryBuilder from '../components/QueryBuilder';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Modal from '../components/Modal';
import Items from '../static/items';
import Champions from '../static/champions';
import Summoners from '../static/summoners';
import Explorer from '../static/explorer';
import { sendMessage } from '../actions/ApiAiActions';
import { fadeIn } from 'react-animations';


const styles = StyleSheet.create({
  homePage: {
    width: '100%',
  },
  header: {
    paddingTop: '2rem',
    flex: '0 1 auto',
  },
  listContainer: {
    display: 'flex',
    marginTop: '4rem',
    justifyContent: 'space-between',
  },
  tabContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tabHeader: {
    display: 'flex',
    paddingTop: '2rem',
  },
  tabContent: {
    flex: 1,
    height: 0,
    overflow: 'auto',
    marginBottom: '1rem',
  },
  recommendationList: {
    width: '32%',
  },
  recommendationTab: {
    width: '100%',
  },
  searchSection: {
    height: '100vh',
  },
  section: {
    padding: '5rem',
    display: 'flex',
    alignItems: 'center',
    background: 'white',
    position: 'relative',
    zIndex: 0,
    ':before': {
      top: 0,
      transform: 'skewY(-1.5deg)',
      transformOrigin: '0 0',
      content: "''",
      display: 'block',
      height: '50%',
      left: 0,
      position: 'absolute',
      right: 0,
      zIndex: -1,
      background: 'inherit',
    },
  },
  sectionTitle: {
    fontSize: '3rem',
    fontFamily: 'Roboto Condensed, sans-serif',
  },
  sectionTitleWrapper: {
    color: colors.blue,
    alignItems: 'center',
    marginBottom: '3rem',
    display: 'flex',
  },
  similarityDescription: {
    flex: 4,
    marginRight: '2rem',
  },
  similarityContainer: {
    width: '100%',
    height: '40rem',
    border: `4px solid ${colors.blue}`,
    animationName: fadeIn,
    animationDuration: '15s',
    borderRadius: '2px',
    flex: 6,
  },
  darkSection: {
    background: colors.darkBlue,
  },
  lightTitle: {
    color: colors.white,
  },
  sectionBody: {
    marginTop: '2rem',
    color: colors.white,
    fontSize: '1.6rem',
  },
});

const RECOMMENDATIONS = [
  {
    title: 'Champions',
    category: Explorer.champion.key,
    items: Champions.championQueries,
    getItemImage: Champions.getChampionImage,
    icon: CategoryIcons.champion,
  },
  {
    title: 'Summoners',
    category: Explorer.summoner.key,
    items: Summoners.summonerQueries,
    getItemImage: Champions.getChampionImage,
    icon: CategoryIcons.summoner,
  },
  {
    title: 'Items',
    category: Explorer.item.key,
    items: Items.itemQueries,
    getItemImage: (image) => {
      return Items.getItemImage(image) || Champions.getChampionImage(image);
    },
    icon: CategoryIcons.item,
  },
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
      similarities: null,
    };

    this.similarityChart = null;
  }

  componentDidMount() {
    getSimilarity().then(({ data: similarities }) => {
      this.setState({ similarities });
    });
  }

  componentDidUpdate(prevState) {
    if (this.state.similarities !== prevState.similarities) {
      this.renderSimilarities();
    }
  }

  handleSelectTab = (index) => {
    this.setState({ selectedTab: index });
  }

  handleSubmit = () => {
    const { history } = this.props;
    history.push(`/conversation`);
  }

  handleSimilarityLink = ({ target: { text }}) => {
    sendMessage(text);
    this.props.history.push(`/conversation`);
  }

  renderTabs = () => {
    const { selectedTab } = this.state;
    const recommendation = RECOMMENDATIONS[selectedTab];

    return (
      <div className={css(styles.tabContainer)}>
        <div className={css(styles.tabHeader)}>
          {RECOMMENDATIONS.map((recommendation, index) => {
            const { title, icon } = recommendation;
            return (
              <Tab
                key={`tab-${index}`}
                index={index}
                onClick={this.handleSelectTab}
                title={title}
                icon={icon}
                selected={selectedTab === index}
              />
            );
          })}
        </div>
        <div className={css(styles.tabContent)}>
          <RecommendationList
            limit={5}
            {...recommendation}
          />
        </div>
      </div>
    );
  }

  renderLists = () => {
    return (
      <div className={css(styles.listContainer)}>
        {RECOMMENDATIONS.map((recommendation, index) => (
          <div
            key={`recommendation-${index}`}
            className={css(styles.recommendationList)}
          >
            <RecommendationList limit={5} {...recommendation} />
          </div>
        ))}
      </div>
    );
  }

  renderSimilarities = () => {
    const { similarities } = this.state;
    if (similarities) {
      this.similarityChart = echarts.init(document.getElementById('similarity'));
      const similarityIds = Object.keys(similarities);
      const nodes = similarityIds.map(similarityId => ({ name: similarityId, symbolSize: 1 }));
      const edges = similarityIds.reduce((acc, similarityId) => {
        return [
          ...acc,
          ...similarities[similarityId].map(targetSimilarityId => {
            const targetSimilarityIdString = targetSimilarityId.toString();
            nodes.find(node => node.name === targetSimilarityIdString).symbolSize += 1;
            return { source: similarityId, target: targetSimilarityIdString };
          }),
        ];
      }, []);
      this.similarityChart.setOption({
       series: [
         {
           label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
           name: 'Champion similarities',
           animation: true,
           animationDurationUpdate: 1500,
           animationEasingUpdate: 'quinticInOut',
           layout: 'force',
           type: 'graph',
           roam: true,
           lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                },
           hoverAnimation: true,
           focusNodeAdjacency: true,
           force: {
             repulsion: 200,
             edgeLength: 5,
             gravity: 0.2,
           },
           data: nodes,
           links: edges,
         }
       ]
      });
    }
  }

  render() {
    return (
      <div className={css(styles.homePage)}>
        <div className={css([CommonStyles.titleContainer, styles.searchSection])}>
          <div className={css(styles.header)}>
            <SearchBar />
          </div>
          {window.innerWidth >= desktop ? this.renderLists() : this.renderTabs()}
        </div>
        <div className={css(styles.section)}>
          <div className={css(CommonStyles.container)}>
            <div className={css(styles.sectionTitleWrapper)}>
              <Icon icon={bubbles} size={48} />
              <div className={css(styles.sectionTitle)}>Customize your question</div>
            </div>
            <QueryBuilder
              submit={this.handleSubmit}
              selectedCategory={Explorer.champion.key}
              selectedSection={Explorer.champion.sections.abilityOrder.key}
            />
          </div>
        </div>
        <div className={css([styles.section, styles.darkSection])}>
          <div className={css(styles.similarityDescription)}>
            <div className={css([styles.sectionTitle, styles.lightTitle])}>Gain Insights into the Meta</div>
            <div className={css(styles.sectionBody)}>
              Try asking
              <a className={css(CommonStyles.darkLink)} onClick={this.handleSimilarityLink}> who should I play? </a>
              or
              <a className={css(CommonStyles.darkLink)} onClick={this.handleSimilarityLink}> who is similar to my favorite champion? </a>
              <br />
              <br />
              Recommendations are based on which champions summoners find similar to each other from the past 10,000,000 games in NA solo queue.
            </div>
          </div>
          <div className={css(styles.similarityContainer)} id='similarity' />
        </div>
      </div>
    );
  }
}

export default Home;
