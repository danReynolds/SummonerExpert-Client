import { StyleSheet } from 'aphrodite';

export const breakpoints = {
  desktop: '@media (min-width : 1224px)',
  mobile: '@media (max-width: 480px)',
};

export default StyleSheet.create({
  container: {
    paddingTop: '4rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',

    [breakpoints.desktop]: {
      width: 1200,
    },

    [breakpoints.mobile]: {
      padding: '0 2rem',
      width: 'initial',
    },
  },
});

export const colors = {
  header: '#909090',
  grey: '#e4e4e4',
  blue: '#55baea',
  darkBlue: '#242735',
  darkGrey: '#565656',
  white: '#f5f5f5',
  red: '#d44b4b',
};

export const fonts = {
  body: {
    font: 'Lato',
    color: colors.darkGrey,
  },
};
