import React from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function ReviewsCard() {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "background.main2",
        borderRadius: "10px",
        my: 3.75,
        py: 4.5,
        pl: 3.75,
        pr: 6.25,
      }}
      gap={10.125}
    >
      <Box
        display="flex"
        //   flex="0 0 256px"
        flexDirection="column"
        gap={2.25}
      >
        <Typography
          variant="h5"
          component="h5"
          fontWeight={500}
          color="primary.light"
        >
          Readers Reviews
        </Typography>
        <Rating
          name="read-only"
          value={5}
          precision={0.5}
          sx={{ fontSize: "2.3125rem" }}
          readOnly
        />
        <Box display="flex" gap={1.375}>
          <Typography
            variant="subtitle1"
            component="p"
            color="primary.light"
            fontWeight={500}
          >
            5 out of 5
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            color="tertiary.main"
          >
            2,555 Ratings
          </Typography>
        </Box>
      </Box>
      <Box display="flex" width="459px" flexDirection="column" flex="1 1 50%">
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderRadius: "2px",
            borderColor: "secondary.main",
            color: "secondary.main",
            width: "167px",
            mb: 2.875,
          }}
          disableElevation
          endIcon={<ExpandMoreOutlinedIcon />}
        >
          Top Reviews
        </Button>
        <Typography variant="subtitle1" component="span" color="tertiary.main">
          Reviewed on September, 18 2002
        </Typography>
        <Typography paragraph variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec
          ac odio tempor orci dapibus.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "2px",
            backgroundColor: "secondary.main",
            width: "144px",
            alignSelf: "center",
            mt: 1,
          }}
          disableElevation
          // endIcon={<LocalLibraryOutlinedIcon />}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
}

export default ReviewsCard;
