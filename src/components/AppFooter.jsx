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
          <Link
            sx={{ cursor: "pointer" }}
            variant="body2"
            color="background.light"
            underline="false"
          >
            Terms and Conditions
          </Link>
          <Link
            sx={{ cursor: "pointer" }}
            variant="body2"
            color="background.light"
            underline="false"
          >
            Privacy Policy
          </Link>
          <Link
            sx={{ cursor: "pointer" }}
            variant="body2"
            color="background.light"
            underline="false"
          >
            Copyright Statements
          </Link>
          <Link
            sx={{ cursor: "pointer" }}
            variant="body2"
            color="background.light"
            underline="false"
          >
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
