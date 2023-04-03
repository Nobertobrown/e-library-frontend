import React from "react";
import { Box, IconButton, Stack, Typography, Link } from "@mui/material";
import Book from "../Book/Book";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

function Carousel() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        backgroundColor: "background.main2",
        mb: 10.875,
        py: 3.25,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", px: 11, mb: 3 }}
      >
        <Typography
          variant="h5"
          component="h5"
          fontWeight={500}
          color="primary.light"
        >
          Especially for you!
        </Typography>
        <Link
          sx={{
            color: "secondary.main",
            display: "flex",
            alignItems: "center",
          }}
        >
          View all
          <EastOutlinedIcon />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.75,
          px: 1.875,
        }}
      >
        <IconButton>
          <NavigateBeforeOutlinedIcon fontSize="large" />
        </IconButton>
        <Stack direction="row" justifyContent="space-between" flexGrow={1}>
          <Book />
          <Book />
          <Book />
          <Book />
        </Stack>
        <IconButton size="large">
          <NavigateNextOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Carousel;
