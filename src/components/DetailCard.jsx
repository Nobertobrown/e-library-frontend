import { Box, Paper, Rating, Typography } from "@mui/material";
import * as React from "react";

function DetailCard() {
  return (
    <Paper sx={{ display: "flex" }}>
      <img className="img-detail" src="/images/john-math.png" alt="math" />
      <Box>
        <Typography
          color="primary.light"
          variant="h6"
          component="h2"
          fontWeight="500"
        >
          Engineering Mathematics by <br />
          <Typography
            color="secondary.main"
            variant="h6"
            component="span"
            fontWeight="500"
          >
            John Bird
          </Typography>
        </Typography>

        <Box>
          <Rating name="read-only" value={5} precision={0.5} readOnly />
        </Box>
      </Box>
    </Paper>
  );
}

export default DetailCard;
