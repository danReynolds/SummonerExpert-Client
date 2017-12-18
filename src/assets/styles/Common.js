import { StyleSheet } from 'aphrodite';

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
    margin: '7.5rem auto 0 auto',
    display: 'flex',
    flexDirection: 'column',

    [breakpoints.desktop]: {
      width: 1200,
    },

    [breakpoints.mobile]: {
      width: '90%',
    },
  },
});

export const colors = {
  header: '#909090',
  grey: '#e4e4e4',
  midGrey: '#cecece',
  darkGrey: '#565656',
  blue: '#55baea',
  midBlue: '#2098D1',
  darkBlue: '#242735',
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
    fontSize: '2.5rem',
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
