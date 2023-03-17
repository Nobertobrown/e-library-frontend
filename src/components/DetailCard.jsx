import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Carousel from "./Carousel";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.body2,
  padding: theme.spacing(0.2, 2.5),
  textAlign: "center",
  color: theme.palette.background.light,
}));

function DetailCard() {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          gap: 6.75,
          borderRadius: "10px",
          backgroundColor: "background.main",
          px: 3.125,
          py: 5,
          mt: 4.5,
        }}
      >
        <img className="img-detail" src="/images/john-math.png" alt="math" />
        <Box>
          <Typography
            color="primary.light"
            variant="h6"
            component="h2"
            fontWeight="500"
            fontSize="1.5rem"
          >
            Engineering Mathematics
            <br /> by{" "}
            <Typography
              color="secondary.main"
              variant="h6"
              component="span"
              fontWeight="500"
              fontSize="1.5rem"
            >
              John Bird
            </Typography>
          </Typography>
          <Box sx={{ display: "flex", gap: 0.625, mt: 1, mb: 0.625 }}>
            <LocalOfferOutlinedIcon />
            <Stack direction="row" spacing={0.625}>
              <Item>Fiction</Item>
              <Item>Adventure</Item>
              <Item>Horror</Item>
            </Stack>
          </Box>
          <Box display="flex" gap={2.125} mb={1}>
            <Rating name="read-only" value={5} precision={0.5} readOnly />
            <Typography
              variant="subtitle1"
              component="span"
              color="tertiary.main"
            >
              2,659 Ratings
            </Typography>
          </Box>
          <Divider sx={{ mb: 2.5 }} />

          <Box>
            <Link sx={{ color: "secondary.main" }}>See all formats</Link>
            <Box display="flex" my={2.625} gap={2.875}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "2px", backgroundColor: "secondary.main" }}
                disableElevation
                endIcon={<LocalLibraryOutlinedIcon />}
              >
                Read Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "2px",
                  color: "secondary.main",
                }}
                disableElevation
                endIcon={<FileDownloadOutlinedIcon />}
              >
                Download
              </Button>
            </Box>
            <Typography paragraph variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros
              donec ac odio tempor orci dapibus. A arcu cursus vitae congue
              mauris rhoncus aenean vel elit. Pellentesque diam volutpat commodo
              sed egestas. Turpis tincidunt id aliquet risus feugiat
            </Typography>
            <Typography paragraph variant="body1" component="p">
              Mattis enim ut tellus elementum sagittis. Augue lacus viverra
              vitae congue. Tempor commodo ullamcorper
            </Typography>
            <Link
              sx={{
                color: "secondary.main",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ExpandMoreOutlinedIcon />
              Read More
            </Link>
          </Box>
          <Divider sx={{ my: 2.5 }} />

          <Stack direction="row" justifyContent="space-around">
            <Box
              display="flex"
              flexDirection="column"
              gap={0.625}
              alignItems="center"
            >
              <Typography variant="body2" component="p">
                Print length
              </Typography>
              <NumbersOutlinedIcon />
              <Typography variant="body2" component="p" fontWeight={500}>
                448 pages
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={0.625}
              alignItems="center"
            >
              <Typography variant="body2" component="p">
                Language
              </Typography>
              <TranslateOutlinedIcon />
              <Typography variant="body2" component="p" fontWeight={500}>
                English
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={0.625}
              alignItems="center"
            >
              <Typography variant="body2" component="p">
                Publisher
              </Typography>
              <ApartmentOutlinedIcon />
              <Typography variant="body2" component="p" fontWeight={500}>
                Penguin Classics
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={0.625}
              alignItems="center"
            >
              <Typography variant="body2" component="p">
                Publication Date
              </Typography>
              <CalendarTodayOutlinedIcon />
              <Typography variant="body2" component="p" fontWeight={500}>
                May 3, 2016
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
      <Carousel />
    </>
  );
}

export default DetailCard;
