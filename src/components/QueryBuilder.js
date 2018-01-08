import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import _ from 'lodash';

import DropDown from './DropDown';
import MultiSelectDropDown from './MultiSelectDropDown';
import Explorer, { Entities } from '../static/explorer';
import CommonStyles, { colors } from '../assets/styles/Common';
import Button from './Button';

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
    fontFamily: 'Roboto Mono, monospace',
  },
  entityComponentWrapper: {
    display: 'flex',
  },
  fragment: {
    marginLeft: '1rem',
  },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: '0',
  },
  container: {
    height: '60vh',
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

  handleSelectSection = ({ sectionKey }) => {
    const { selectedCategory } = this.state;
    this.setState({ selectedSection: selectedCategory.sections[sectionKey] });
  }

  handleChangeEntity = (selectedEntities) => {
    this.setState({
      selectedEntities: selectedEntities.reduce((acc, entity) => ({ ...acc, [entity.key]: entity }), {}),
    });
  }

  updateEntityValue = ({ entity, title }) => {
    const { entityValues } = this.state;
    this.setState({ entityValues: { ...entityValues, [entity]: title } });
  }

  renderQueryTemplate = (template) => {
    const { selectedEntities, entityValues, selectedSection } = this.state;
    return template.split(/(\{\w+:?\w+\})/)
      .map(fragment => _.trim(fragment))
      .filter(fragment => fragment.length > 0).map((fragment, i) => {
      const templateValues = fragment.match(/\{(\w+)\}/);
      if (templateValues) {
        const entityKey = templateValues[1];
        if (selectedEntities[entityKey] || selectedSection.requiredEntities.includes(entityKey)) {
        const entityKey = templateValues[1];
          const entity = Entities[entityKey];
          const { template: entityTemplate } = entity;

          const entityComponent = (
            <div key={`fragment-${i}`} className={css(styles.fragment)}>
              <DropDown
                type='inline'
                onSelect={this.updateEntityValue}
                placeholder={entity.title}
                items={entity.values.map(value => ({ entity: entity.key, key: value, title: value }))}
                value={entityValues[entityKey]}
              />
            </div>
          );

          if (entityTemplate) {
            const entitySugar = entityTemplate.split(':');
            return (
              <div key={`fragment-${i}`} className={css(styles.entityComponentWrapper)}>
                { entitySugar[0] && <div className={css(styles.fragment)}>{entitySugar[0]}</div> }
                {entityComponent}
                { entitySugar[1] && <div className={css(styles.fragment)}>{entitySugar[1]}</div> }
              </div>
            );
          } else {
            return entityComponent;
          }
        } else {
          return '';
        }
      } else {
        return <div key={`fragment-${i}`} className={css(styles.fragment)}>{fragment}</div>;
      }
    });
  }

  render() {
    const { selectedCategory, selectedSection } = this.state;
    const selectableEntities = Object.values(
      _.pick(Entities, selectedSection.entities))
      .filter(entity => !selectedSection.requiredEntities.includes(entity.key)
    );
    return (
      <div className={css(CommonStyles.container, styles.container)}>
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
              items={selectableEntities}
            />
          </div>
        </div>
        <div className={css(styles.queryTemplate)}>
          {this.renderQueryTemplate(selectedSection.queryTemplate)}
        </div>
        <div className={css(styles.footer)}>
          <Button>
            Send
          </Button>
        </div>
      </div>
    )
  }
}

export default QueryBuilder;
