import Downshift from 'downshift'
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  input: {
    background: 'none',
    padding: '1rem',
    border: `2px solid ${colors.blue}`,
    borderRadius: '2px',
    color: colors.white,
    opacity: 0.95,
    fontFamily: 'Lato',
    fontSize: '1.25rem',
    outline: 'none',
    width: '12.5rem',
    cursor: 'pointer',
    textOverflow: 'ellipsis',

    ':hover': {
      background: colors.blue,
    },

    ':focus': {
      background: colors.blue,
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
  },
});

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isOpen: false,
    }
  }

  handleChange = ({ inputValue }) => {
    if (typeof inputValue === 'string') {
      this.setState({ value: inputValue });
    }
  }

  clearValue = () => {
    this.setState({ isOpen: true, value: '' });
  }

  close = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { items, onChange } = this.props;
    const { value, isOpen } = this.state;

    return (
      <Downshift
        onChange={onChange}
        onStateChange={this.handleChange}
        isOpen={isOpen}
        inputValue={value}
        onOuterClick={this.close}
        onSelect={this.close}
        render={({
          isOpen,
          getInputProps,
          getItemProps,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div>
            <input onClick={this.clearValue} className={css(styles.input)} {...getInputProps()} />
            {
              isOpen && (
                <div className={css(styles.optionContainer)}>
                  {items.filter(
                    item => item.toLowerCase().includes(inputValue.toLowerCase())
                  ).map(item => (
                    <div
                      key={item}
                      className={css(styles.option)}
                      {...getItemProps({ item })}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        )}
      />
    );
  }
};

export default DropDown;
