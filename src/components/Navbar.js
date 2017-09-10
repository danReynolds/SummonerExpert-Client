import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { facebookF } from 'react-icons-kit/fa/facebookF';
import { twitter } from 'react-icons-kit/fa/twitter';

import { colors, fonts, isDesktop } from '../assets/styles/Common';
import LogoImage from '../assets/images/summoner-expert.svg';

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    height: '5rem',
    justifyContent: 'center',
    display: 'flex',
    background: colors.nightBlue,
  },
  link: {
    ...fonts.link,
    padding: '0 1rem',
  },
  logo: {
    position: 'absolute',
    height: '6rem',
    width: '6rem',
    borderRadius: '50%',
    marginTop: '1.5rem',
    background: colors.white,
  },
  socialWrapper: {
    left: '2rem',
    position: 'absolute',
    top: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    color: colors.white,
    fontSize: '1rem',
  },
  facebook: {
    background: colors.facebook,
    ':hover': {
      color: colors.facebook,
      background: colors.white,
    },
  },
  twitter: {
    background: colors.twitter,
    ':hover': {
      color: colors.twitter,
      background: colors.white,
    },
  },
  socialIcon: {
    color: colors.white,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.75rem',
    width: '2.75rem',
    marginRight: '1rem',
  },
  navbarItems: {
    paddingRight: '1rem',
    color: colors.white,
    marginLeft: 'auto',
  }
});

class Navbar extends Component {
  render() {
    return (
      <div className={css(styles.navbar)}>
        {
          window.location.pathname !== '/conversation' && (
            <div className={css(styles.socialWrapper)}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/summonerExpert'
                className={css(styles.socialIcon, styles.facebook)}
              >
                <Icon size={32} icon={facebookF} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/summonerexpert'
                className={css(styles.socialIcon, styles.twitter)}
              >
                <Icon size={32} icon={twitter} />
              </a>
            </div>
          )
        }
        <img className={css(styles.logo)} src={LogoImage} alt='logo' />
        {
          isDesktop() && (
            <div className={css(styles.navbarItems)}>
              <a className={css(styles.link)} href="/">Home</a>
              <a className={css(styles.link)} href="/conversation">Chat</a>
              <a className={css(styles.link)} href="/about">About</a>
            </div>
          )
        }

      </div>
    )
  }
}

export default Navbar;
