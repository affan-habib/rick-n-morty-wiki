import { createTheme } from "@mui/material/styles";
import "./assets/fonts/TTTravels-Black.ttf";
import { grey, red, brown, yellow, orange, pink } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      light: brown[200],
      main: "#14D9E6",
      dark: brown[900],
    },
    secondary: {
      light: yellow[400],
      main: yellow[300],
      dark: yellow[400],
    },
    warning: {
      light: orange[100],
      main: orange[500],
      dark: orange[700],
    },
    error: {
      light: red[300],
      main: red[300],
      dark: red[400],
    },
    success: {
      light: pink[400],
      main: pink[600],
      dark: pink[700],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "contained",
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
            color: "#fff",
            // background: "red",
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
      fontFamily: `'TTTravels-bold', "sans-serif"`,
      fontSize: "128px",
      lineHeight: 1.21,
      color: "white",
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      color: "#14D9E5",
      lineHeight: 1.27,
    },
    h3: {
      fontFamily: `'TTTravels-Medium', "sans-serif"`,
      color: "white",
      fontSize: "1.8rem",
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
      fontFamily: `'TTTravels-Medium', "sans-serif"`,
      fontSize: "24px",
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
      fontFamily: `'TTTravels-Medium', "sans-serif"`,
    },
    body2: {
      color: "white",
      fontSize: "0.75rem",
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "1.1rem",
      color: "white",
      lineHeight: 1.57,
      fontFamily: `'TTTravels-Medium', "sans-serif"`,
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
      default: "#191D29",
      placeholder: grey[200],
    },
  },
};

export default theme;
