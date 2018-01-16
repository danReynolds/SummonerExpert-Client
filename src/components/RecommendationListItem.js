import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';

import { colors } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';
import { style } from '../lib/utils';

const styles = StyleSheet.create({
  image: {
    borderRadius: '50%',
    height: '4rem',
    marginRight: '1rem',
  },
  dualImage: {
    borderRadius: '50%',
    height: '4rem',
  },
  dualImageContainer: {
    marginRight: '1rem',
    alignItems: 'center',
    display: 'flex',
  },
  dualImageSeparator: {
    padding: '0 1rem',
  },
  container: {
    animationName: fadeIn,
    animationDuration: '1s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid',
    borderRadius: 2,
    borderColor: colors.blue,
    padding: '1rem',
    marginTop: '1rem',
    color: colors.white,

    ':hover': {
      borderColor: colors.midBlue,
    }
  },
});


class RecommendationListItem extends Component {
  static PropTypes = {
    history: PropTypes.object,
    item: PropTypes.object,
  }

  handleClick = () => {
    const { history, item: { query }, category } = this.props;
    sendMessage(query);
    history.push(`/conversation?category=${category}`);
  }

  render() {
    const { getItemImage, item: { id, id2, query } } = this.props;
    let imageContent;

    if (id && id2) {
      imageContent = (
        <div className={css(styles.dualImageContainer)}>
          <img className={css(styles.dualImage)} src={getItemImage(id)} alt='avatar' />
          <div className={css(styles.dualImageSeparator)}>vs</div>
          <img className={css(styles.dualImage)} src={getItemImage(id2)} alt='avatar' />
        </div>
      );
    } else {
      imageContent = (
        <img className={css(styles.image)} src={getItemImage(id)} alt='avatar' />
      );
    }

    return (
      <div onClick={this.handleClick} className={style(styles.container, 'hvr-fade')}>
        {imageContent}
        <div>{query}</div>
      </div>
    );
  }
}

export default withRouter(RecommendationListItem);
