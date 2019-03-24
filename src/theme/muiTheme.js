import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c6c6c6',
      contrastText: '#000000',
    },
    secondary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
        contrastText: '#000000',
    },
  },
});

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#595959',
      main: '#303030',
      dark: '#070707',
      contrastText: '#ffffff',
    },
    secondary: {
        light: '#6ec6ff',
        main: '#2196f3',
        dark: '#0069c0',
        contrastText: '#ffffff',
    },
  },
});

export { darkTheme, lightTheme };
