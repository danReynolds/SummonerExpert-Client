import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SearchBar from '../components/SearchBar';
import CommonStyles, { colors, desktop } from '../assets/styles/Common';
import RecommendationList from '../components/RecommendationList';
import Tab from '../components/Tab';
import Items from '../static/items';
import Champions from '../static/champions';

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: '4rem',
    backgroundColor: colors.darkBlue,
    height: '100vh',
  },
  header: {
    flex: '0 1 auto',
  },
  listContainer: {
    display: 'flex',
    marginTop: '4rem',
    justifyContent: 'space-between',
  },
  tabHeader: {
    display: 'flex',
    marginTop: '4rem',
  },
  recommendationList: {
    width: '32%',
  },
  recommendationTab: {
    width: '100%',
  }
});

const RECOMMENDATIONS = [
  {
    title: 'champions',
    items: Champions.championQueries,
    getItemImage: Champions.getChampionImage,
  },
  {
    title: 'matchups',
    items: Champions.championMatchupQueries,
    getItemImage: Champions.getChampionImage,
  },
  {
    title: 'items',
    items: Items.itemQueries,
    getItemImage: Items.getItemImage,
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

  renderTabs = () => {
    const { selectedTab } = this.state;
    const { items, getItemImage } = RECOMMENDATIONS[selectedTab];

    return (
      <div>
        <div className={css(styles.tabHeader)}>
          {RECOMMENDATIONS.map((recommendation, index) => {
            const { title } = recommendation;
            return (
              <Tab
                index={index}
                onClick={this.handleSelectTab}
                title={title}
                selected={selectedTab === index}
              />
            );
          })}
        </div>
        <div className={css(styles.tabContent)}>
          <RecommendationList
            limit={5}
            items={items}
            getItemImage={getItemImage}
          />
        </div>
      </div>
    );
  }

  renderLists = () => {
    return (
      <div className={css(styles.listContainer)}>
        {RECOMMENDATIONS.map((recommendation, index) => (
          <div className={css(styles.recommendationList)}>
            <RecommendationList limit={5} {...recommendation} />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className={css(styles.homeContainer)}>
        <div className={css(CommonStyles.container)}>
          <div className={css(styles.header)}>
            <SearchBar />
          </div>
          <div className={css(styles.content)}>
            {window.innerWidth >= desktop ? this.renderLists() : this.renderTabs()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
