import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: purple[300],
    },
  },
});