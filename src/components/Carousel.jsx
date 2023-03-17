import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Book from "./Book";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

function Carousel() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        backgroundColor: "background.main",
        display: "flex",
        alignItems: "center",
        gap: 1.75,
        my: 10.875,
        py: 5.75,
        px: 1.875,
      }}
    >
      <IconButton>
        <NavigateBeforeOutlinedIcon />
      </IconButton>
      <Stack direction="row" justifyContent="space-between" flexGrow={1}>
        <Book />
        <Book />
        <Book />
        <Book />
      </Stack>
      <IconButton>
        <NavigateNextOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default Carousel;
