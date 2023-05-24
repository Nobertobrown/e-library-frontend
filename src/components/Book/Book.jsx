import React from "react";
import { Grid, Paper, Rating, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function Book(props) {
  return (
    <Grid item lg={2.4}>
      {/* sm={4} md={3} */}
      <Paper elevation={0} sx={{ backgroundColor: "transparent" }} square>
        <NavLink to={props.id} className="link">
          <img src={props.coverUrl} alt={props.title} className="img" />
          <Box>
            <Rating
              name="read-only"
              value={props.rating}
              precision={0.5}
              readOnly
            />
          </Box>
          <Box>
            <Typography variant="h6" component="h6" color="primary.light">
              {props.title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" component="p" color="tertiary.main">
              {props.author}
            </Typography>
          </Box>
        </NavLink>
      </Paper>
    </Grid>
  );
}

export default Book;
