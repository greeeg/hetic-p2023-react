import { nightOwl } from '@code-surfer/themes';

const YELLOW = 'rgb(255, 203, 139)';
const BLUE = '#5dd3f3';

const defaultHeadingStyles = () => ({
  fontWeight: '500',
  maxWidth: '75vw',
  margin: 0,
  marginBottom: 34,
  textAlign: 'center'
});

const responsiveFontSize = baseSize => {
  return `calc(${baseSize}px + 6 * ((100vw - 320px) / 680))`;
};

export const theme = {
  ...nightOwl,
  styles: {
    h1: {
      ...defaultHeadingStyles(),
      fontSize: responsiveFontSize(60)
    },
    h2: {
      ...defaultHeadingStyles(),
      fontSize: responsiveFontSize(48)
    },
    h3: {
      ...defaultHeadingStyles(),
      fontSize: responsiveFontSize(40)
    },
    p: {
      fontWeight: '500',
      margin: 0,
      marginBottom: 20,
      fontSize: responsiveFontSize(20)
    },
    ul: {
      paddingLeft: 0,
      margin: 0,
      marginBottom: 20,
      marginTop: 20
    },
    li: {
      lineHeight: 1.75,
      fontWeight: '500',
      fontSize: responsiveFontSize(24)
    },
    ul: {
      li: {
        listStyle: 'none'
      }
    },
    ol: {
      li: {
        listStyle: 'circle',
        color: BLUE
      }
    },
    a: {
      color: YELLOW,
      textDecoration: 'none',
      fontWeight: '500',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    strong: {
      fontWeight: '500',
      color: BLUE
    },
    CodeSurfer: {
      subtitle: {
        backgroundColor: 'red'
      }
    }
  }
};
