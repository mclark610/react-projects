import {createTheme} from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      light: 'blue[300]',
      main: '#1976d2',
      dark: 'blue[700]',
    },
    secondary: {
      light: 'pink[300]',
      main: 'rgb(220, 0, 78)',
      dark: 'pink[700]',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
    },
  },
};


const appTheme = createTheme(themeOptions);

export default appTheme;