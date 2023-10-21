import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';
import './fonts.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#921FED'
    },
    secondary: {
      main: '#FCFAFA'
    },
    text: {
      primary: '#FCFAFA',
      secondary: '#921FED'
    },
    grey: {
      100: '#FBFAFC',
      300: '#E6E6E6',
      500: '#ADA7B8'
    },
    action: {
      hover: '#A239F4',
      selected: '#B568F2'
    },
    warning: {
      main: '#FFCF32'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: 'Dosis, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  components: {
    MuiButton: MuiButtonConfig,
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
