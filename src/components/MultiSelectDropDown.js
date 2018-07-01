import Downshift from 'downshift'
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import _ from 'lodash';

import { colors, breakpoints } from '../assets/styles/Common';

const styles = StyleSheet.create({
  input: {
    background: 'none',
    padding: '1rem',
    border: `2px solid ${colors.blue}`,
    borderRadius: '2px',
    color: colors.darkGrey,
    opacity: 0.95,
    fontFamily: 'Lato',
    fontSize: '1.25rem',
    outline: 'none',
    width: '12.5rem',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    transitionDuration: '.3s',

    ':hover': {
      background: colors.blue,
      color: colors.white,
    },

    ':focus': {
      background: colors.blue,
      color: colors.white,
    },
  },
  option: {
    padding: '1rem',
    background: colors.white,
    border: `2px solid ${colors.white}`,
    color: colors.darkGrey,
    width: '12.5rem',
    cursor: 'pointer',
    ':hover': {
      background: colors.grey,
      border: `2px solid ${colors.grey}`,
    },
  },
  optionContainer: {
    maxHeight: '21vh',
    overflow: 'auto',
    position: 'absolute',
    zIndex: 100000,
  },
});

const typeStyles = {
  default: StyleSheet.create({

  }),
  inline: StyleSheet.create({
    input: {
      border: 'none',
      borderBottom: `2px solid ${colors.white}`,
      margin: '0 0 0 1rem',
      padding: '0 0 0.5rem 0',
      fontSize: '2rem',

      [breakpoints.mobile]: {
        fontSize: '1.5rem',
      },

      ':hover': {
        background: 'none',
      },

      ':focus': {
        background: 'none',
      },
    },
    optionContainer: {
      margin: '0 1rem 1rem 1rem',
      fontSize: '1rem',
    },
    option: {
      width: '10.5rem',
      border: 'none',
      ':hover': {
        border: 'none',
        background: colors.grey,
      },
    }
  }),
};

class MultiSelectDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      prevValue: '',
      isOpen: false,
    }
  }

  static defaultProps = {
    onSelect: () => {},
    type: 'default',
    value: '',
  }

  getValidItems = (value) => {
    const { items } = this.props;
    return items.filter(item =>
      _.some(value.split(','), valueFragment => valueFragment.includes(item.title))
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;

    if (prevState.value !== value) {
      this.onChangeDelayed(this.getValidItems(value));
    }
  }

  // Debounce sending the onChange handler to the parent component
  // in case the value is about to be changed again
  onChangeDelayed = _.debounce((value) => {
    const { onChange } = this.props;
    onChange(value);
  }, 0)

  handleChange = (inputValue) => {
    const { value } = this.state;
    if (typeof inputValue === 'string') {
      // prevValue is a slight hack because selecting an item counts as a inputValue
      // change with the selected option and onInputValueChange triggers before
      // onSelect so the entire value is overwritten with the selected value.
      // Store the entire selected value before that happens so handleSelect can recover it
      this.setState({ value: inputValue, prevValue: value });
    }
  }

  handleSelect = (selectedItem) => {
    const { prevValue } = this.state;
    const updatedValue = this.getValidItems(prevValue).concat(selectedItem)
      .map(item => item.title).join(', ');
    this.setState({ value: updatedValue });
    this.close();
  }

  handleOuterClick = () => {
    const { prevValue } = this.state;
    this.close();
    this.setState({ value: this.getValidItems(prevValue).map(item => item.title).join(', ') });
  }

  newInput = () => {
    const { value, isOpen } = this.state;
    if (!isOpen) {
      this.setState({ isOpen: true, value: !value.endsWith(', ') && value.length ? `${value}, ` : value });
    }
  }

  close = () => {
    this.setState({ isOpen: false });
  }

  filteredOptions = (inputValue) => {
    const { items } = this.props;
    const allActiveInput = inputValue.split(',').map(input => _.trim(input));
    const lastActiveInput = _.last(allActiveInput) || '';
    return items.filter(item =>
      item.title.toLowerCase().includes(lastActiveInput.toLowerCase()) &&
        !_.some(allActiveInput, input => input === item.title)
    );
  }

  render() {
    const { placeholder } = this.props;
    const { value, isOpen } = this.state;
    const { type } = this.props;

    return (
      <Downshift
        onInputValueChange={this.handleChange}
        onOuterClick={this.handleOuterClick}
        isOpen={isOpen}
        inputValue={value}
        onSelect={this.handleSelect}
        itemToString={item => item && item.title}
        render={({
          isOpen,
          getInputProps,
          getItemProps,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => {
          return (
            <div>
              <input
                className={css(styles.input, typeStyles[type].input)}
                {...getInputProps({ placeholder, value: inputValue, onClick: this.newInput })}
              />
              {
                isOpen && (
                  <div className={css(styles.optionContainer, typeStyles[type].optionContainer)}>
                    {this.filteredOptions(inputValue).map(item => (
                        <div
                          key={item.key}
                          className={css(styles.option, typeStyles[type].option)}
                          {...getItemProps({ item })}
                        >
                          {item.title}
                        </div>
                      )
                    )}
                  </div>
                )
              }
            </div>
          );
        }}
      />
    );
  }
};

export default MultiSelectDropDown;
