import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Index from "./components/index";
import Catalogue, { loader as booksLoader } from "./components/Catalogue";
import DetailCard, { loader as detailsLoader } from "./components/DetailCard";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
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
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="catalogue/books"
          element={<Catalogue />}
          loader={booksLoader(queryClient)}
          // action={contactAction}
        />
        <Route
          path="catalogue/books/:bookId"
          element={<DetailCard />}
          loader={detailsLoader(queryClient)}
          // action={editAction}
        />
        {/* <Route path="contacts/:contactId/destroy" action={destroyAction} /> */}
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
