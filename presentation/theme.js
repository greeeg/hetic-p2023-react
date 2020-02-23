import { dark } from '@mdx-deck/themes';

export const colors = {
  black: 'rgb(1, 22, 39)',
  grey: '#525252',
  white: '#fff',
  red: 'rgb(255, 203, 139)'
};

export const sizes = {
  h1: '5.5em',
  h1Small: '4em',
  h2: '2.11em',
  h3: '1.55em',
  p: '2.5em',
  small: '1.4em'
};

export default {
  ...dark,
  colors: {
    background: colors.black,
    text: colors.white
  },
  h1: {
    color: colors.white,
    fontWeight: '500',
    maxWidth: '50vw',
    fontSize: sizes.h1
  },
  h2: {
    color: colors.grey,
    fontWeight: 'normal',
    maxWidth: '70vw',
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  font: 'Larsseit',
  ul: {
    margin: '20px',
    fontWeight: '500',
    fontSize: sizes.p
  },
  p: {
    fontWeight: '500',
    fontSize: sizes.p
  },
  li: {
    padding: '20px 0 20px 0',
    color: colors.red,
    fontWeight: '500',
    fontSize: sizes.p
  },
  a: {
    color: colors.red,
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: sizes.p
  },
  css: {
    textAlign: 'left'
  }
};
