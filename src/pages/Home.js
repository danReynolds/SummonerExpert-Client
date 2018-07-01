import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

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
    width: '100%',
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
    ...fonts.headerDark,
    marginBottom: '2rem',
  }
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
    }
  }

  handleSelectTab = (index) => {
    this.setState({ selectedTab: index });
  }

  handleSubmit = () => {
    const { history } = this.props;
    history.push(`/conversation`);
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
        <div className={css([CommonStyles.titleContainer, styles.searchSection])}>
          <div className={css(styles.header)}>
            <SearchBar />
          </div>
          {window.innerWidth >= desktop ? this.renderLists() : this.renderTabs()}
        </div>
        <div className={css(styles.section)}>
          <div className={css(CommonStyles.container)}>
            <div className={css(styles.sectionTitle)}>Build your question</div>
            <QueryBuilder
              submit={this.handleSubmit}
              selectedCategory={Explorer.champion.key}
              selectedSection={Explorer.champion.sections.abilityOrder.key}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
