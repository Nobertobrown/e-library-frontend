import React from "react";
import { Grid, Paper, Rating, Typography, Box } from "@mui/material";

function Book() {
  return (
    <Grid item lg={2.4}>
      {/* sm={4} md={3} */}
      <Paper elevation={0} square>
        <img src="/images/floyd.png" alt="floyd.png" className="img" />
        <Box>
          <Rating name="read-only" value={5} precision={0.5} readOnly />
        </Box>
        <Box>
          <Typography variant="h6" component="h6">
            Electronic Devices
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" component="p">
            Floyd
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Book;
