import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import _ from 'lodash';

import { colors, fonts } from '../assets/styles/Common';
import RecommendationListItem from './RecommendationListItem';

const styles = StyleSheet.create({
  title: {
    ...fonts.body,
      color: colors.grey,
      fontSize: '1rem',
      textTransform: 'uppercase',
      marginBottom: '1rem',
  },
});

class RecommendationList extends Component {
  render() {
    const { title, items, getItemImage, limit } = this.props;

    return (
      <div>
        <div className={css(styles.title)}>{title}</div>
        {
          _.sampleSize(items, limit).map(item => (
            <RecommendationListItem key={item.id} item={item} getItemImage={getItemImage} />
          ))
        }
      </div>
    )
  }
};

export default RecommendationList;
