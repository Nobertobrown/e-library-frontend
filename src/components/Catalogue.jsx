import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import Book from "./Book";

export default function Catalogue() {
  return (
    <>
      <Box marginY="38px">
        <Typography variant="h5" component="h2">
          Computer Studies
        </Typography>
      </Box>
      <Grid container spacing={7.25}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </Grid>
      <Box display="flex" paddingY="35px" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 0, backgroundColor: "secondary.main" }}
          disableElevation
        >
          Show More
        </Button>
      </Box>
    </>
  );
}
