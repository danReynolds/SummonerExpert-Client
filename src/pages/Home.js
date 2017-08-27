import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SearchBar from '../components/SearchBar';
import CommonStyles, { colors } from '../assets/styles/Common';
import RecommendationList from '../components/RecommendationList';
import Items from '../static/items';
import Champions from '../static/champions';

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.darkBlue,
    height: '100vh',
  },
  header: {
    flex: '0 1 auto',
  },
  content: {
    display: 'flex',
    marginTop: '4rem',
    justifyContent: 'space-between',
  },
  recommendationList: {
    width: '32%',
  }
});

class Home extends Component {
  render() {
    return (
      <div className={css(styles.homeContainer)}>
        <div className={css(CommonStyles.container)}>
          <div className={css(styles.header)}>
            <SearchBar />
          </div>
          <div className={css(styles.content)}>
            <div className={css(styles.recommendationList)}>
              <RecommendationList
                title='champions'
                limit={5}
                items={Champions.championQueries}
                getItemImage={Champions.getChampionImage}
              />
            </div>
            <div className={css(styles.recommendationList)}>
              <RecommendationList
                limit={5}
                title='matchups'
                items={Champions.championMatchupQueries}
                getItemImage={Champions.getChampionImage}
              />
            </div>
            <div className={css(styles.recommendationList)}>
              <RecommendationList
                limit={5}
                title='items'
                items={Items.itemQueries}
                getItemImage={Items.getItemImage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
