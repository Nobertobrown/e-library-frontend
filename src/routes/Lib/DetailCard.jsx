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
import Carousel from "../../components/Carousel/Carousel";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { styled } from "@mui/material/styles";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";

const detailsQuery = (url) => ({
  queryKey: ["getDetails"],
  queryFn: async () => {
    const data = await axios.get(url);
    const details = data.data["book"];
    return details;
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    let url = `http://localhost:8080/catalogue/books/${params.bookId}`;
    const query = detailsQuery(url);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.body2,
  padding: theme.spacing(0.2, 2.5),
  textAlign: "center",
  color: theme.palette.background.light,
}));

function DetailCard() {
  const params = useParams();
  const { data } = useQuery(
    detailsQuery(`http://localhost:8080/catalogue/books/${params.bookId}`)
  );
  const book = data;

  return (
    <>
      <SearchBar />
      <Paper
        sx={{
          display: "flex",
          gap: 6.75,
          borderRadius: "10px",
          backgroundColor: "background.main2",
          px: 3.125,
          py: 5,
          mt: 4.5,
        }}
      >
        {/* my={2.625}  */}
        <Box display="flex" flexDirection="column" gap={1.25}>
          <img
            className="img-detail"
            src={"http://localhost:8080" + book.imgUrl}
            alt={book.title}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "2px",
              backgroundColor: "secondary.main",
              mt: 1,
            }}
            disableElevation
            fullWidth
            // endIcon={<LocalLibraryOutlinedIcon />}
          >
            Rate Book
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "2px",
              borderColor: "secondary.main",
              color: "secondary.main",
            }}
            disableElevation
            fullWidth
            // endIcon={<FileDownloadOutlinedIcon />}
          >
            Leave Review
          </Button>
        </Box>
        <Box>
          <Typography
            color="primary.light"
            variant="h6"
            component="h2"
            fontWeight="500"
            fontSize="1.5rem"
          >
            {book.title}
            <br /> by{" "}
            <Typography
              color="secondary.main"
              variant="h6"
              component="span"
              fontWeight="500"
              fontSize="1.5rem"
            >
              {book.author}
            </Typography>
          </Typography>
          <Box sx={{ display: "flex", gap: 0.625, mt: 1, mb: 0.625 }}>
            <LocalOfferOutlinedIcon />
            <Stack direction="row" spacing={0.625}>
              {book.tags.map((tag, index) => (
                <Item key={index}>{tag}</Item>
              ))}
            </Stack>
          </Box>
          <Box display="flex" gap={2.125} mb={1}>
            <Rating
              name="read-only"
              value={book.rating.value}
              precision={0.5}
              readOnly
            />
            <Typography
              variant="subtitle1"
              component="span"
              color="tertiary.main"
            >
              {book.rating.number} Ratings
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
                  borderColor: "secondary.main",
                  color: "secondary.main",
                }}
                disableElevation
                endIcon={<FileDownloadOutlinedIcon />}
              >
                Download
              </Button>
            </Box>
            <Typography paragraph variant="body1" component="p">
              {book.description}
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
                {book.printLength} pages
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
                {book.languages[0]}
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
                {book.publisher}
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
                {new Date(book.publishedAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
      <ReviewsCard />
      <Carousel />
    </>
  );
}

export default DetailCard;
