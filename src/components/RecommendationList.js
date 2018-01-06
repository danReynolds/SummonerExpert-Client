import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { colors, fonts, isDesktop } from '../assets/styles/Common';
import RecommendationListItem from './RecommendationListItem';

const styles = StyleSheet.create({
  title: {
    ...fonts.body,
      color: colors.white,
      fontSize: '1rem',
      textTransform: 'uppercase',
  },
  icon: {
    height: '1.8rem',
    marginRight: '1rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
});

const RecommendationList  = ({ title, items, getItemImage, limit, icon }) => (
  <div>
    {
      isDesktop() && (
        <div className={css(styles.header)}>
        <img className={css(styles.icon)} src={icon} alt='logo' />
          <div className={css(styles.title)}>{title}</div>
        </div>
      )
    }
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
