import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { ic_search } from 'react-icons-kit/md/ic_search';
import PropTypes from 'prop-types';

import { colors, fonts, breakpoints, isDesktop } from '../assets/styles/Common';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  bar: {
    ...fonts.body,
    width: '100%',
    border: 'none',
    color: colors.blue,
    background: 'none',

    ':focus': {
      outline: 'none',
    },

    [breakpoints.desktop]: {
      fontSize: '4rem',
    },

    [breakpoints.mobile]: {
      fontSize: '1.5rem',
    },
  },
  searchBarForm: {
    display: 'flex',
    alignItems: 'center',
    color: colors.white,
  },
  searchIconWrapper: {
    cursor: 'pointer',
    ':hover': {
      color: colors.blue,
    },
  },
});

class SearchBar extends Component {
  static PropTypes = {
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  clearText = () => {
    this.setState({ text: '' });
  }

  submitMessage = () => {
    const { history } = this.props;
    const { text } = this.state;

    if (text) {
      sendMessage(text);
    }
    this.clearText();
    history.push('/conversation');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.submitMessage();
  }

  render() {
    const { text } = this.state;

    return (
      <form className={css(styles.searchBarForm)} onSubmit={this.handleSubmit}>
        <input
          spellCheck={false}
          autoFocus={isDesktop()}
          onChange={this.handleChange}
          className={css(styles.bar)}
          type='search'
          placeholder='Talk to Summoner Expert'
          value={text}
        />
        <div onClick={this.submitMessage} className={css(styles.searchIconWrapper)}>
          <Icon size={isDesktop() ? 100 : 40} icon={ic_search} />
        </div>
      </form>
    )
  }
}

export default withRouter(SearchBar);
