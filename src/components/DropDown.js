import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  select: {
    width: '100%',
    height: '3rem',
    background: colors.grey,
    color: colors.darkGrey,
    textIndent: '1rem',
    appearance: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
});

class DropDown extends Component {
  static propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    selectedValue: PropTypes.string,
  }

  handleChange = (e) => {
    const { onSelect } = this.props;
    const { target: { value } } = e;
    onSelect(value);
  }

  render() {
    const { options, key, placeholder, selectedValue } = this.props;
    const optionContent = options.map((tag, tagIndex) => (
      <option key={`${key}-tag-${tagIndex}`} value={tag}>{tag}</option>
    ));
    optionContent.unshift(
      <option key={`${key}-tag-default`} disabled selected>{placeholder}</option>
    );

    return (
      <select
        value={selectedValue}
        onChange={this.handleChange}
        className={css(styles.select)}
      >
        {optionContent}
      </select>
    )
  }
}

export default DropDown;
