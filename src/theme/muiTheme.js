import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "\"Roboto\", sans-serif",
    fontWeightLight: '600',
  },
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
      contrastText: '#ffffff',
    },
    textPrimary: {
      main: "#ffffff",
    },
    secondary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
        contrastText: '#ffffff',
    },
    mainPage: {
      height: '100%',
      background: '#ffffff',
    },
    fullHeight: {
      height: '100%',
    },
  },
});

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "\"Roboto\", sans-serif",
    fontWeightLight: '600',
    // fontWeightMedium: '700',
    // fontWeightRegular: '700'
  },
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
      contrastText: '#ffffff',
    },
    textPrimary: {
      main: "#ffffff",
    },
    secondary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
    },
    mainPage: {
      height: '100%',
      background: 'linear-gradient(to top, #0a192f 30%, #020c1b 100%)',
    },
    fullHeight: {
      height: '100%',
    },
  },
});

export { darkTheme, lightTheme };
