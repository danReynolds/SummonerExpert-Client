import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import { withRouter } from 'react-router'

import CommonStyles, { colors, fonts } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';

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
    padding: '0 0.5rem',
  },
  container: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: '0.5rem',
    marginTop: '1rem',

    ':hover': {
      backgroundColor: colors.grey,
    }
  },
  query: {
    ...fonts.body,
  },
});


class RecommendationListItem extends Component {
  handleClick = () => {
    const { history, item: { query } } = this.props;
    sendMessage(query);
    history.push('/conversation');
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
      <div onClick={this.handleClick} className={css(styles.container)}>
        {imageContent}
        <div className={css(styles.query)}>{query}</div>
      </div>
    );
  }
}

export default withRouter(RecommendationListItem);
