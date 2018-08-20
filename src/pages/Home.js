import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SearchBar from '../components/SearchBar';
import CommonStyles, { desktop, CategoryIcons, colors } from '../assets/styles/Common';
import RecommendationList from '../components/RecommendationList';
import QueryBuilder from '../components/QueryBuilder';
import Tab from '../components/Tab';
import SimilarityGraph from '../components/SimilarityGraph';
import Items from '../static/items';
import Champions from '../static/champions';
import Summoners from '../static/summoners';
import Explorer from '../static/explorer';
import { sendMessage } from '../actions/ApiAiActions';
import BannerImage from '../assets/images/banner.jpg';

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
  questionSection: {
    padding: '7rem 0',
  },
  darkSection: {
    background: colors.darkBlue,
    backgroundImage: `linear-gradient(${colors.brightBlue}, ${colors.nightBlue}), url(${BannerImage})`,
  },
  lightTitle: {
    color: colors.white,
  },
  sectionBody: {
    marginTop: '2rem',
    color: colors.white,
    fontSize: '1.3rem',
    lineHeight: 1.4,
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
    };
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

  render() {
    return (
      <div className={css(styles.homePage)}>
        <div className={css([CommonStyles.contentSection, styles.searchSection])}>
          <div className={css(styles.header)}>
            <SearchBar />
          </div>
          {window.innerWidth >= desktop ? this.renderLists() : this.renderTabs()}
        </div>
        <div className={css([styles.section, styles.questionSection])}>
          <div className={css(CommonStyles.container)}>
            <div className={css(styles.sectionTitleWrapper)}>
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
              Recommendations are based on the play rate correlation of champions by summoners from the past 10,000,000 games in NA solo queue.
              <p>
                <a className={css(CommonStyles.darkLink)} onClick={this.handleSimilarityLink}>Who are the 3 most similar champions to Jax?</a>
              </p>
              <p>
                <a className={css(CommonStyles.darkLink)} onClick={this.handleSimilarityLink}>Who should I play?</a>
              </p>
            </div>
          </div>
          <SimilarityGraph />
        </div>
      </div>
    );
  }
}

export default Home;
