import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    // },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },

  typography: {
    fontFamily: [
      '"Poppins"',
      '"Raleway"',
      '"Roboto"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  palette: {
    primary: {
      main: "#192F59",
      light: "#163269",
    },
    secondary: {
      main: "#148EB7",
      light: "#3B70B2",
    },
    tertiary: {
      main: "#919BAD",
      vibrant: "#FBBC05",
    },
    background: {
      main: "#E6E9E9",
      main2: "#F6F6F6",
      intermediate: "#EFEFEF",
      light: "#FFFFFF",
      dark: "#303030",
    },
  },
});

export default theme;
