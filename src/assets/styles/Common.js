import { StyleSheet } from 'aphrodite';

export const desktop = 1224;
export const mobile = 480;

export const breakpoints = {
  desktop: `@media (min-width : ${desktop}px)`,
  mobile: `@media (max-width: ${mobile}px)`,
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
  midGrey: '#cecece',
  darkGrey: '#565656',
  blue: '#55baea',
  midBlue: '#368cb5',
  darkBlue: '#242735',
  white: '#f5f5f5',
  red: '#d44b4b',
};

export const fonts = {
  body: {
    font: 'Lato',
    color: colors.darkGrey,
  },
};
