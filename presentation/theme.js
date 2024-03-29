import { nightOwl } from '@code-surfer/themes';

export const YELLOW = 'rgb(255, 203, 139)';
export const BLUE = '#5dd3f3';

const defaultHeadingStyles = () => ({
  fontWeight: '500',
  maxWidth: '75vw',
  margin: 0,
  marginBottom: 34,
  textAlign: 'center',
  lineHeight: 1.4
});

const responsiveFontSize = (baseSize) => {
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
    h4: {
      ...defaultHeadingStyles(),
      fontSize: responsiveFontSize(24)
    },
    p: {
      fontWeight: '500',
      margin: 0,
      marginBottom: 20,
      fontSize: responsiveFontSize(20),
      textAlign: 'center',
      maxWidth: '60vw',
      lineHeight: 1.6
    },
    li: {
      lineHeight: 1.75,
      fontWeight: '500',
      fontSize: responsiveFontSize(24)
    },
    ul: {
      paddingLeft: 0,
      padding: 0,
      marginBottom: 20,
      marginTop: 20,
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
