import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { colors } from '../assets/styles/Common';
import LogoImage from '../assets/images/summoner-expert.svg';

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    width: '100%',
    height: '5rem',
    justifyContent: 'center',
    display: 'flex',
    background: colors.nightBlue,
  },
  logo: {
    height: '6rem',
    width: '6rem',
    borderRadius: '50%',
    marginTop: '1rem',
    background: colors.white,
  }
});

class Navbar extends Component {
  render() {
    return (
      <div className={css(styles.navbar)}>
        <img className={css(styles.logo)} src={LogoImage} alt='logo' />
      </div>
    )
  }
}

export default Navbar;
