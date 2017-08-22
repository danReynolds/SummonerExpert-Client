import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    paddingTop: '4rem',
    margin: '0 auto',
    width: 1080,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const fonts = StyleSheet.create({
  header: {
    fontFamily: ['Lato', 'sans-serif']
  },
});

export const colors = {
  header: '#909090',
  grey: '#e4e4e4',
  darkBlue: '#242735',
  darkGrey: '#565656',
  white: '#f5f5f5',
  red: '#d44b4b',
};
