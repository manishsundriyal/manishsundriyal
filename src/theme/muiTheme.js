import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
    },
    secondary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
    },
    mainPage: {
      height: '100%',
      background: 'linear-gradient(to bottom left, #473B7B 0%, #3584A7 30%, #30D2BE 100%)',
      color: '#000000',
    },
    fullHeight: {
      height: '100%',
    },
  },
});

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
    },
    secondary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
    },
    mainPage: {
      height: '100%',
      background: 'linear-gradient(to bottom left, #473B7B 0%, #3584A7 30%, #30D2BE 100%)',
      color: '#000000',
    },
    fullHeight: {
      height: '100%',
    },
  },
});

export { darkTheme, lightTheme };
