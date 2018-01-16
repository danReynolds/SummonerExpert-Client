import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import _ from 'lodash';
import ordinal from 'ordinal';

import DropDown from './DropDown';
import Input, { INPUT_TYPES } from './Input';
import MultiSelectDropDown from './MultiSelectDropDown';
import Explorer, { Entities } from '../static/explorer';
import CommonStyles, { colors, breakpoints } from '../assets/styles/Common';
import Button, { BUTTON_TYPES } from './Button';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  title: {
    fontSize: '5rem',
    color: 'white',
    paddingBottom: '3vh',

    [breakpoints.mobile]: {
      fontSize: '2rem',
    },
  },
  dropdowns: {
    display: 'flex',

    [breakpoints.mobile]: {
      flexWrap: 'wrap',
    },
  },
  dropdown: {
    marginRight: '1.5rem',

    [breakpoints.mobile]: {
      marginTop: '1rem',
    },
  },
  queryTemplate: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '10vh',
    color: colors.white,
    fontSize: '2rem',
    fontFamily: 'Roboto Mono, monospace',
    flexWrap: 'wrap',
    lineHeight: 2,
    marginLeft: '-1rem',

    [breakpoints.mobile]: {
      marginTop: '2vh',
      fontSize: '1.5rem',
    },
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
    height: '80vh',
  },
  footerButton: {
    marginLeft: '1rem',
  },
});

const ENTITY_TEMPLATE_PATTERN = /(\{\w+\})/;
const CAPTURE_ENTITY_TEMPLATE_PATTERN = /\{(\w+)\}/;

class QueryBuilder extends Component {
  constructor(props) {
    super(props);
    const category = Explorer[props.selectedCategory];
    const selectedSection = category.sections[props.selectedSection];
    this.state = {
      selectedSection,
      selectedCategory: category,
      selectedEntities: [],
      entityValues: this.updateEntityValues(selectedSection),
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

  handleSelectSection = ({ key: sectionKey }) => {
    const { selectedCategory } = this.state;
    const selectedSection = selectedCategory.sections[sectionKey];

    this.setState({
      selectedSection,
      entityValues: this.updateEntityValues(selectedSection),
    });
  }

  handleChangeEntity = (selectedEntitiesList) => {
    const { selectedSection, entityValues } = this.state;
    const selectedEntities = selectedEntitiesList.map(entity => entity.key);
    this.setState({
      selectedEntities,
      entityValues: this.updateEntityValues(selectedSection, selectedEntities, entityValues)
    });
  }

  updateEntityValues = (selectedSection, selectedEntities = [], entityValues = {}) => {
    const entities = selectedSection.entities.filter(
      entityKey => selectedSection.requiredEntities.includes(entityKey) || selectedEntities.includes(entityKey)
    );
    return entities.reduce((acc, entityKey) => (
      { ...acc, [entityKey]: entityValues[entityKey] || Entities[entityKey].defaultValue }
    ), {});
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
    const validatedEntities = selectedEntities.concat(selectedSection.requiredEntities);
    return _.every(validatedEntities, entity => entityValues[entity]);
  }

  submitQuery = () => {
    const { submit } = this.props;

    if (this.validateEntities()) {
      sendMessage(this.interpolateQueryString());
      submit();
    } else {
      this.setState({ validation: true });
    }
  }

  onChangeFormat = (entity, value) => (
    { title: value, entity }
  );

  interpolateQueryString = () => {
    const { entityValues, selectedSection } = this.state;
    if (selectedSection) {
      return Object.keys(entityValues).reduce((acc, entityKey) => {
        const { template: entityTemplate, type } = Entities[entityKey];
        let interpolatedValue;
        let entityValue =  entityValues[entityKey];
        if (type === INPUT_TYPES.ORDINAL) {
          entityValue = ordinal(parseInt(entityValue, 10));
        }

        if (entityTemplate) {
          const entitySugar = entityTemplate.split(':');
          interpolatedValue = [entitySugar[0], entityValue, entitySugar[1]].join(' ');
        } else {
          interpolatedValue = entityValue;
        }

        return acc.replace(new RegExp(`{${entityKey}}`), interpolatedValue);
      }, selectedSection.queryTemplate(entityValues)).replace(/\s?\{\w+\}/g, '');
    }
  }

  renderQueryTemplate = (template) => {
    const { selectedEntities, entityValues, selectedSection, validation } = this.state;
    return this.splitQueryString(template).map((fragment, i) => {
      const templateValues = fragment.match(CAPTURE_ENTITY_TEMPLATE_PATTERN);
      if (templateValues) {
        const entityKey = templateValues[1];
        if (selectedEntities.includes(entityKey) || selectedSection.requiredEntities.includes(entityKey)) {
          const entity = Entities[entityKey];
          const entityValue = entityValues[entityKey] || '';
          const { template: entityTemplate, type } = entity;

          let entityComponent;

          if (type) {
            entityComponent = (
              <Input
                validation={validation}
                onChange={this.updateEntityValue}
                onChangeFormat={this.onChangeFormat.bind(this, entity.key)}
                placeholder={entity.title}
                type={type}
                value={entityValue}
              />
            );
          } else {
            entityComponent = (
              <DropDown
                validation={validation}
                type='inline'
                onSelect={this.updateEntityValue}
                placeholder={entity.title}
                items={entity.values.map(value => ({ entity: entity.key, key: value, title: value }))}
                value={entityValue}
              />
            );
          }

          if (entityTemplate) {
            const entitySugar = entityTemplate.split(':');
            return (
              <div key={`fragment-${i}`} className={css(styles.entityComponentWrapper)}>
                { entitySugar[0] && <div className={css(styles.fragment)}>{entitySugar[0]}</div> }
                <div className={css(styles.fragment)}>
                  {entityComponent}
                </div>
                { entitySugar[1] && <div className={css(styles.fragment)}>{entitySugar[1]}</div> }
              </div>
            );
          } else {
            return (
              <div key={`fragment-${i}`} className={css(styles.fragment)}>
                {entityComponent}
              </div>
            );
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
    const { selectedCategory, selectedSection, entityValues } = this.state;
    const { close } = this.props;
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
          {this.renderQueryTemplate(selectedSection.queryTemplate(entityValues))}
        </div>
        <div className={css(styles.footer)}>
          <Button type={BUTTON_TYPES.CANCEL} onClick={close}>Cancel</Button>
          <Button style={styles.footerButton} onClick={this.submitQuery}>Send</Button>
        </div>
      </div>
    )
  }
}

export default QueryBuilder;
