import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import { colors } from '../assets/styles/Common';

const styles = (open) => StyleSheet.create({
  container: {
    width: open ? '100%' : '28%',
    backgroundColor: open ? colors.blue : colors.red,
    padding: '1.5rem',
    margin: '0.5rem',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: colors.blue,
    },
  },
  question: {
    fontSize: '2rem',
    marginBottom: open ? '2.5rem' : 0,
  },
});

class Tile extends Component {
  static PropTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { question, answer } = this.props;
    const { open } = this.state;
    const style = styles(open);
    return (
      <div className={css(style.container)} onClick={this.toggleOpen}>
        <div className={css(style.question)}>{question}</div>
        { open && <div className={css(style.answer)}>{answer}</div> }
      </div>
    )
  }
}

export default Tile;
