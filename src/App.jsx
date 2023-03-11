import React from "react";
// import { Container } from "@mui/system";
// import { Box, Grid, Typography } from "@mui/material";
// import Book from "./components/Book";
import "./App.css";
import ResponsiveTopAppBar from "./components/TopAppBar";
import ResponsiveMiddleAppBar from "./components/MiddleAppBar";
// import Footer from "./components/AppFooter";

function App() {
  return (
    <>
      <ResponsiveTopAppBar />
      <ResponsiveMiddleAppBar />
      {/* <Container>
        <Box marginBottom="38px">
          <Typography variant="h4" component="h2">
            Computer Studies
          </Typography>
        </Box>
        <Grid container spacing={7.25}>
          <Book />
          <Book />
          <Book />
          <Book />
        </Grid>
      </Container>
      <Footer /> */}
    </>
  );
}

export default App;
