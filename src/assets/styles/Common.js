import { StyleSheet } from 'aphrodite';

import ChampionIcon from '../images/barbute.svg';
import SummonerIcon from '../images/hood.svg';
import GeneralIcon from '../images/book-cover.svg';
import ItemIcon from '../images/winged-sword.svg';

export const CategoryIcons = {
  champion: ChampionIcon,
  summoner: SummonerIcon,
  general: GeneralIcon,
  item: ItemIcon,
};

export const desktop = 1224;
export const mobile = 480;

export const isDesktop = () => {
  return window.innerWidth >= desktop;
}

export const breakpoints = {
  desktop: `@media (min-width : ${desktop}px)`,
  mobile: `@media (max-width: ${mobile}px)`,
};

export default StyleSheet.create({
  container: {
    margin: '7rem auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    [breakpoints.desktop]: {
      width: 1200,
    },

    [breakpoints.mobile]: {
      width: '90%',
      marginTop: '5rem',
    },
  },
  containerWide: {
    margin: '0 auto 0 auto',
    [breakpoints.desktop]: {
      width: 1600,
    },

    [breakpoints.mobile]: {
      width: '90%',
      marginTop: '5rem',
    },
  }
});

export const colors = {
  header: '#909090',
  grey: '#e4e4e4',
  midGrey: '#cecece',
  darkGrey: '#565656',
  blue: '#55baea',
  midBlue: '#2098D1',
  darkBlue: '#12264e',
  white: '#f5f5f5',
  red: '#d44b4b',
  facebook: '#3b5998',
  twitter: '#1da1f2',
  google: '#ea4335',
  brightBlue: '#142c85',
  nightBlue: 'rgba(17, 37, 66, 0.95)',
  gold: '#dad09a',
};

export const fonts = {
  body: {
    fontFamily: 'Lato',
    color: colors.darkGrey,
  },
  header: {
    fontSize: '2rem',
    color: colors.white,
  },
  link: {
    color: colors.white,
    textDecoration: 'none',

    ':hover': {
      color: colors.blue,
    }
  },
};
