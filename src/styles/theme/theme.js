import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    tableHeader: {
      main:"#2196f3",
    },
    editIcon: {
      main: "blue",
    },
    deleteIcon: {
      main: "red",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;