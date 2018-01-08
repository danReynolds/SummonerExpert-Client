import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import DropDown from './DropDown';
import MultiSelectDropDown from './MultiSelectDropDown';
import Explorer, { Entities } from '../static/explorer';
import { colors } from '../assets/styles/Common';

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
  queryTemplate: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '10vh',
    color: colors.white,
    fontSize: '2rem',
  },
  entityComponentWrapper: {
    display: 'flex',
  },
  entitySugar: {
    marginLeft: '1rem',
  },
});

class QueryBuilder extends Component {
  constructor(props) {
    super(props);
    const category = Explorer[props.selectedCategory];
    this.state = {
      selectedCategory: category,
      selectedSection: category.sections[props.selectedSection],
      selectedEntities: {},
      entityValues: {},
    };
  }

  handleSelectSection = (section) => {
    const { selectedCategory } = this.state;
    this.setState({ selectedSection: selectedCategory.sections[section] });
  }

  handleChangeEntity = (selectedEntities) => {
    this.setState({
      selectedEntities: selectedEntities.reduce((acc, entity) => ({ ...acc, [entity.key]: entity }), {}),
    });
  }

  renderQueryTemplate = (template) => {
    const { selectedEntities, entityValues } = this.state;
    return template.split(/(\{\w+:?\w+\})/).filter(fragment => fragment.length > 0).map((fragment, i) => {
      const templateValues = fragment.match(/\{(\w+):?(\w*)\}/);
      if (templateValues) {
        const entityName = templateValues[1];
        const entityRequired = templateValues[2].length > 0;

        if (selectedEntities[entityName] || entityRequired) {
          const entity = Entities[entityName];
          const { template: entityTemplate } = entity;
          const entityComponent = (
            <DropDown
              key={`fragment-${i}`}
              type='inline'
              placeholder={entity.title}
              items={entity.values.map(value => ({ key: value, title: value }))}
              value={entityValues[entityName]}
            />
          );

          if (entityTemplate) {
            const entitySugar = entityTemplate.split(':');
            return (
              <div className={css(styles.entityComponentWrapper)}>
                <div className={css(styles.entitySugar)}>{entitySugar[0]}</div>
                {entityComponent}
                <div className={css(styles.entitySugar)}>{entitySugar[1]}</div>
              </div>
            );
          } else {
            return entityComponent;
          }
        } else {
          return '';
        }
      } else {
        return <div key={`fragment-${i}`} className={css(styles.queryText)}>{fragment}</div>;
      }
    });
  }

  render() {
    const { selectedCategory, selectedSection } = this.state;
    return (
      <div>
        <div className={css(styles.title)}>Build your Question</div>
        <div className={css(styles.dropdowns)}>
          <div className={css(styles.dropdown)}>
            <DropDown
              placeholder={'Pick a topic'}
              onSelect={this.handleSelectSection}
              items={Object.values(selectedCategory.sections)}
              value={selectedSection.title}
            />
          </div>
          <div className={css(styles.dropdown)}>
            <MultiSelectDropDown
              placeholder={'Choose filters'}
              onChange={this.handleChangeEntity}
              items={Object.values(selectedSection.entities)}
            />
          </div>
        </div>
        <div className={css(styles.queryTemplate)}>
          {this.renderQueryTemplate(selectedSection.queryTemplate)}
        </div>
      </div>
    )
  }
}

export default QueryBuilder;
