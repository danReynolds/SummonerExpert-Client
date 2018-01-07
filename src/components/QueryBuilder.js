import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import DropDown from './DropDown';
import Explorer from '../static/explorer';

const styles = StyleSheet.create({
  title: {
    fontSize: '5rem',
    color: 'white',
    paddingBottom: '3vh',
  },
  dropdowns: {
    display: 'flex',
  },
  dropdown: {
    marginRight: '1.5rem',
  },
});

class QueryBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: props.selectedSection,
      selectedCategory: props.selectedCategory,
    };
  }

  handleSelectSection = (section) => {
    this.setState({ selectedSection: section });
  }

  handleSelectEntity = (entity) => {

  }

  render() {
    const { selectedSection, selectedCategory } = this.state;
    const category = Explorer[selectedCategory];
    const section = category.sections[selectedSection];

    return (
      <div>
        <div className={css(styles.title)}>Build your Question</div>
        <div className={css(styles.dropdowns)}>
          <div className={css(styles.dropdown)}>
            <DropDown
              placeholder={'Pick a topic'}
              onSelect={this.handleSelectSection}
              items={Object.values(category.sections)}
              value={section.title}
            />
          </div>
          <div className={css(styles.dropdown)}>
            <DropDown placeholder={'Choose filters'} items={Object.values(section.entities)} />
          </div>
        </div>
      </div>
    )
  }
}

export default QueryBuilder;
