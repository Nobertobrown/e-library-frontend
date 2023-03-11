import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BasicCard from "./Card";

function Footer() {
  return (
    <Box marginTop={5}>
      <Container>
        <Grid container spacing={7.25}>
          <BasicCard />
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
