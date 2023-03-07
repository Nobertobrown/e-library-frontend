import React from "react";
import { Container } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import Book from "./components/Book";
import "./App.css";

function App() {
  return (
    <Container>
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
  );
}

export default App;
