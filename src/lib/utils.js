import { css } from 'aphrodite';

export const style = (...args) => {
  const classes = [];
  const styles = [];
  args.forEach((arg) => {
    if (typeof arg === 'string') {
      classes.push(arg)
    } else {
      styles.push(arg);
    }
  });
  return `${css(...styles)} ${classes.join(' ')}`;
}
