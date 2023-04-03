import { Grid, Box, Stack, Link, Typography } from "@mui/material";
import React from "react";
import BasicCard from "./Card";

function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "background.main", display: "flex" }}>
        <Grid container spacing={5} sx={{ marginX: "49px", py: "35px" }}>
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </Grid>
      </Box>
      <Box paddingY="12px" sx={{ backgroundColor: "primary.main" }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Link variant="body2" color="background.light">
            Terms and Conditions
          </Link>
          <Link variant="body2" color="background.light">
            Privacy Policy
          </Link>
          <Link variant="body2" color="background.light">
            Copyright Statements
          </Link>
          <Link variant="body2" color="background.light">
            Disclamer
          </Link>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Typography variant="body2" color="background.light">
            © 2023 All Right Reserved, DIT
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
