import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { colors, fonts } from '../assets/styles/Common';
import RecommendationListItem from './RecommendationListItem';

const styles = StyleSheet.create({
  title: {
    ...fonts.body,
      color: colors.white,
      fontSize: '1rem',
      textTransform: 'uppercase',
      marginBottom: '1rem',
  },
});

const RecommendationList  = ({ title, items, getItemImage, limit }) => (
  <div>
    <div className={css(styles.title)}>{title}</div>
    {
      _.sampleSize(items, limit).map(item => (
        <RecommendationListItem key={item.id} item={item} getItemImage={getItemImage} />
      ))
    }
  </div>
);

RecommendationList.PropTypes = {
  title: PropTypes.string,
  items: PropTypes.object,
  getItemImage: PropTypes.func,
  limit: PropTypes.number,
};

export default RecommendationList;
