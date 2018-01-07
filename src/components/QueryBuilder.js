import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import DropDown from './DropDown';
import Explorer from '../static/explorer';

const styles = StyleSheet.create({
  title: {
    fontSize: '5rem',
    color: 'white',
    paddingBottom: '3vh',
  }
});

class QueryBuilder extends Component {
  render() {
    const { selectedSection } = this.props;
    return (
      <div>
        <div className={css(styles.title)}>Build your Question</div>
        <DropDown
          items={Explorer.champion.sections.map(section => section.title)}
          value={selectedSection}
        />
      </div>
    )
  }
}

export default QueryBuilder;
