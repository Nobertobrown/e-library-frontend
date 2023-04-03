import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Newsletter() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6.875,
        backgroundColor: "background.intermediate",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        sx={{
          color: "primary.light",
          fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
        }}
      >
        Subscribe to our Newsletter
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          color: "primary.light",
          fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
          mb: 5,
        }}
      >
        Be first to know about our new books when they drop!
      </Typography>
      <Box display="flex">
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "2px 0 0 2px",
              width: "365px",
              height: "46px",
            },
          }}
          placeholder="Email Address"
          type="email"
        />
        <Button
          size="large"
          variant="contained"
          sx={{
            borderRadius: "0 2px 2px 0",
            backgroundColor: "secondary.main",
          }}
          disableElevation
        >
          Subscribe
        </Button>
      </Box>
    </Paper>
  );
}
