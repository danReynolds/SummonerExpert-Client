import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon from 'react-icons-kit';
import { facebookF } from 'react-icons-kit/fa/facebookF';
import { twitter } from 'react-icons-kit/fa/twitter';
import { google } from 'react-icons-kit/fa/google';

import { colors, fonts, isDesktop, breakpoints } from '../assets/styles/Common';
import LogoImage from '../assets/images/summoner-expert.svg';

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
    height: '5rem',
    justifyContent: 'center',
    display: 'flex',
  },
  link: {
    ...fonts.link,
    padding: '1rem',
  },
  logo: {
    height: 'inherit',
    width: 'inherit',
    borderRadius: '50%',
    background: colors.white,
  },
  logoContainer: {
    marginTop: '1.5rem',
    position: 'absolute',
    height: '6rem',
    width: '6rem',
    [breakpoints.mobile]: {
      height: '3.5rem',
      width: '3.5rem',
      marginTop: '0',
    },
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
  google: {
    background: colors.google,
    ':hover': {
      color: colors.google,
      background: colors.white,
    },
  },
  socialIcon: {
    color: colors.white,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '2.5rem',
    marginRight: '1rem',
  },
  navbarItems: {
    paddingRight: '1rem',
    color: colors.white,
    marginLeft: 'auto',
  },
  beta: {
    color: colors.white,
    padding: '0 0.5rem',
    height: '2rem',
    lineHeight: '2',
    borderRadius: 2,
    background: colors.blue,
    position: 'absolute',
    top: 0,
    right: '-2rem',

    [breakpoints.mobile]: {
      right: '-2.5rem',
      height: '1.5rem',
      lineHeight: '1.5',
    }
  },
});

class Navbar extends Component {
  render() {
    const desktop = isDesktop();
    return (
      <div className={css(styles.navbar)}>
        {
          window.location.pathname !== '/conversation' && desktop && (
            <div className={css(styles.socialWrapper)}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/summonerExpert'
                className={css(styles.socialIcon, styles.facebook)}
              >
                <Icon size={25} icon={facebookF} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/summonerexpert'
                className={css(styles.socialIcon, styles.twitter)}
              >
                <Icon size={25} icon={twitter} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://assistant.google.com/services/a/id/335d3b57787076a8/'
                className={css(styles.socialIcon, styles.google)}
              >
                <Icon size={25} icon={google} />
              </a>
            </div>
          )
        }
        <a className={css(styles.logoContainer)} href="/">
          <img className={css(styles.logo)} src={LogoImage} alt='logo' />
          <div className={css(styles.beta)}>Beta</div>
        </a>
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
    );
  }
}

export default Navbar;
