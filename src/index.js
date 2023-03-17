import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Catalogue from "./components/Catalogue";
import DetailCard from "./components/DetailCard";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

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
      main: "#D9D9D9",
      light: "#FFFFFF",
      dark: "#303030",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      // loader={rootLoader}
      // action={rootAction}
      // errorElement={<ErrorPage />}
    >
      {/* <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} /> */}
      <Route
        path="catalogue/books"
        element={<Catalogue />}
        // loader={contactLoader}
        // action={contactAction}
      />
      <Route
        path="catalogue/books/book"
        element={<DetailCard />}
        // loader={contactLoader}
        // action={editAction}
      />
      {/* <Route path="contacts/:contactId/destroy" action={destroyAction} /> */}
    </Route>
    // </Route>
  )
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
