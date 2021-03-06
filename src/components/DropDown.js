import Downshift from 'downshift'
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors, breakpoints } from '../assets/styles/Common';

const styles = (isOpen) => StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    background: 'none',
    padding: '1rem',
    border: `2px solid ${colors.blue}`,
    borderBottom: `${isOpen ? 'none' : `2px solid ${colors.blue}`}`,
    borderRadius: '2px',
    color: colors.white,
    opacity: 0.95,
    fontSize: '1.25rem',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'Roboto Mono, monospace',
    textOverflow: 'ellipsis',
    transition: 'background .3s',

    ':hover': {
      background: colors.blue,
    },

    ':focus': {
      background: colors.blue,
    },
  },
  option: {
    fontFamily: 'Lato',
    padding: '1rem',
    background: colors.white,
    border: `2px solid ${colors.white}`,
    color: colors.darkGrey,
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
    minWidth: '100%',
  },
});

const typeStyles = {
  default: () => StyleSheet.create({

  }),
  inline: (inputLength, isOpen, validation = false) => StyleSheet.create({
    input: {
      border: 'none',
      borderBottom: `${isOpen ? 'none' : `2px solid`}`,
      padding: '0 0 0.5rem 0',
      fontSize: '2rem',
      width: `${inputLength}ch`,
      transition: 'borderBottomColor .3s',
      borderBottomColor: `${validation ? colors.red : colors.white}`,

      [breakpoints.mobile]: {
        fontSize: '1.5rem',
      },

      ':hover': {
        background: 'none',
        borderBottomColor: colors.blue,
      },

      ':focus': {
        background: 'none',
        color: colors.blue,
      },
    },
    optionContainer: {
      fontSize: '1rem',
    },
    option: {
      border: 'none',
      ':hover': {
        border: 'none',
        background: colors.grey,
      },
    }
  }),
};

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isOpen: false,
    }
  }

  static defaultProps = {
    onSelect: () => {},
    type: 'default',
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;
    if (prevState.value !== value) {
    }
  }

  handleChange = ({ inputValue }) => {
    if (typeof inputValue === 'string') {
      this.setState({ value: inputValue });
    }
  }

  handleSelect = (selectedItem) => {
    const { onSelect } = this.props;
    this.close();
    onSelect(selectedItem);
  }

  clearValue = () => {
    this.setState({ isOpen: true, value: '' });
  }

  close = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { items, onChange, placeholder, validation } = this.props;
    const { value, isOpen } = this.state;
    const { type } = this.props;
    return (
      <Downshift
        onChange={onChange}
        onStateChange={this.handleChange}
        isOpen={isOpen}
        inputValue={value}
        onOuterClick={this.close}
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
          const inputLength = inputValue.length || placeholder.length;
          return (
            <div className={css(styles().container)}>
              <input
                onClick={this.clearValue}
                {...getInputProps({ placeholder })}
                className={css(
                  styles(isOpen).input,
                  typeStyles[type](inputLength, isOpen, validation && !inputValue.length).input
                )}
              />
              {
                isOpen && (
                  <div className={css(styles().optionContainer, typeStyles[type]().optionContainer)}>
                    {items.filter(
                      item => item.title.toLowerCase().includes(inputValue.toLowerCase())
                    ).map(item => (
                      <div
                        key={item.key}
                        className={css(styles().option, typeStyles[type]().option)}
                        {...getItemProps({ item })}
                      >
                        {item.title}
                      </div>
                    ))}
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

export default DropDown;
