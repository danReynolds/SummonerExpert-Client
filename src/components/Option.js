import { StyleSheet } from 'aphrodite';
import React from 'react';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';

import { colors } from '../assets/styles/Common';
import { style } from '../lib/utils';
const styles = StyleSheet.create({
  container: {
    animationName: fadeIn,
    padding: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  selected: {
    borderLeft: `2px solid ${colors.gold}`,
    ':hover': {
      background: colors.gold,
    }
  }
});

const Option = ({ index, children, value, onClick, selected }) => {
  const handleClick = () => {
    onClick(value);
  };

  const animateStyles = StyleSheet.create({
    animate: { animationDuration: `${(index + 1) / 2}s` }
  });

  const optionStyles = [styles.container, animateStyles.animate, 'hvr-fade'];
  if (selected) {
    optionStyles.push(styles.selected);
  }

  return (
    <div
      onClick={handleClick}
      key={`category-${index}`}
      className={style(...optionStyles)}
    >
      {children}
    </div>
  );
}

Option.PropTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Option;
