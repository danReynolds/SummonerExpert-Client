import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import _ from 'lodash';

import DropDown from './DropDown';
import MultiSelectDropDown from './MultiSelectDropDown';
import Explorer, { Entities } from '../static/explorer';
import CommonStyles, { colors } from '../assets/styles/Common';
import Button from './Button';
import { sendMessage } from '../actions/ApiAiActions';

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

const ENTITY_TEMPLATE_PATTERN = /(\{\w+\})/;
const CAPTURE_ENTITY_TEMPLATE_PATTERN = /\{(\w+)\}/;

class QueryBuilder extends Component {
  constructor(props) {
    super(props);
    const category = Explorer[props.selectedCategory];
    this.state = {
      selectedCategory: category,
      selectedSection: category.sections[props.selectedSection],
      selectedEntities: {},
      entityValues: {},
      validation: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { validation: prevValidation } = prevState;
    const { validation } = this.state;

    if (validation && validation === prevValidation) {
      this.setState({ validation: false });
    }
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

  splitQueryString = (queryString) => (
    queryString.split(ENTITY_TEMPLATE_PATTERN).map(fragment => _.trim(fragment))
      .filter(fragment => fragment.length > 0)
  )

  validateEntities = () => {
    const { selectedEntities, selectedSection, entityValues } = this.state;
    const validatedEntities = Object.keys(selectedEntities).concat(selectedSection.requiredEntities);
    return _.every(validatedEntities, entity => entityValues[entity]);
  }

  submitQuery = () => {
    const { onComplete } = this.props;

    if (this.validateEntities()) {
      sendMessage(this.interpolateQueryString());
      onComplete();
    } else {
      this.setState({ validation: true });
    }
  }

  interpolateQueryString = () => {
    const { entityValues, selectedSection } = this.state;
    if (selectedSection) {
      return Object.keys(entityValues).reduce((acc, entityKey) => {
        const { template: entityTemplate } = Entities[entityKey];
        let interpolatedValue;
        const entityValue =  entityValues[entityKey];

        if (entityTemplate) {
          const entitySugar = entityTemplate.split(':');
          interpolatedValue = [entitySugar[0], entityValue, entitySugar[1]].join(' ');
        } else {
          interpolatedValue = entityValue;
        }

        return acc.replace(new RegExp(`{${entityKey}}`), interpolatedValue);
      }, selectedSection.queryTemplate).replace(/\s?\{\w+\}/g, '');
    }
  }

  renderQueryTemplate = (template) => {
    const { selectedEntities, entityValues, selectedSection, validation } = this.state;
    return this.splitQueryString(template).map((fragment, i) => {
      const templateValues = fragment.match(CAPTURE_ENTITY_TEMPLATE_PATTERN);
      if (templateValues) {
        const entityKey = templateValues[1];
        if (selectedEntities[entityKey] || selectedSection.requiredEntities.includes(entityKey)) {
          const entity = Entities[entityKey];
          const { template: entityTemplate } = entity;

          const entityComponent = (
            <div key={`fragment-${i}`} className={css(styles.fragment)}>
              <DropDown
                validation={validation}
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
          <Button onClick={this.submitQuery}>Send</Button>
        </div>
      </div>
    )
  }
}

export default QueryBuilder;
