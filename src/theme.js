import { createTheme } from "@mui/material/styles";
import {
  grey,
  red,
  teal,
  deepPurple,
  purple,
  brown,
  yellow,
} from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      light: brown[200],
      main: "#14D9E6",
      dark: brown[900],
    },
    secondary: {
      light: yellow[400],
      main: teal[300],
      dark: teal[400],
    },
    warning: {
      light: deepPurple[100],
      main: deepPurple[500],
      dark: deepPurple[700],
    },
    error: {
      light: red[300],
      main: red[300],
      dark: red[400],
    },
    success: {
      light: purple[400],
      main: purple[600],
      dark: purple[700],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant:"contained"
        // disableElevation: true,
      },
      styleOverrides: {
        contained: {
          borderRadius: 4,
          boxShadow: 0,
          background:
            "linear-gradient(99.46deg, #9DFE00 -10.9%, #14D9E6 97.14%)",
          color: "#fff",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        color: "primary",
        // disableElevation: true,
      },
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "#dadada",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
  typography: {
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: "128px",
      lineHeight: 1.21,
      color: "white",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      color: "#14D9E5",
      lineHeight: 1.27,
    },
    h3: {
      fontWeight: 600,
      color: "white",
      fontSize: "1.5rem",
      lineHeight: 1.33,
    },
    h4: {
      color: "white",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h5: {
      color: "white",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    h6: {
      color: "white",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.57,
    },
    caption: {
      color: "white",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
    },
    body1: {
      color: "white",
      fontSize: "0.875rem",
      lineHeight: 1.57,
    },
    body2: {
      color: "white",
      fontSize: "0.75rem",
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "0.875rem",
      color: "white",
      fontWeight: 600,
      lineHeight: 1.57,
    },
    subtitle2: {
      color: "white",
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
    },
    overline: {
      color: "white",
      lineHeight: 1.66,
    },
    button: {
      textTransform: "capitalize",
      color: "white",
    },
  },
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: "#1E1E1E",
      placeholder: grey[200],
    },
  },
};

export default theme;
