import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Rating,
  Button,
  Divider,
  FormHelperText,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function UploadPage() {
  return (
    <Box display="flex" marginX={22.75} marginY={7.625} flexDirection="column">
      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        color="primary.light"
      >
        Upload Book
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        marginTop={2.5}
        sx={{ backgroundColor: "background.main2" }}
      >
        <Box display="flex" marginTop={7.5} marginX={15.5} gap={13.375}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "#D9D9D9",
              px: 8.125,
              py: 11.125,
              color: "background.main2",
            }}
          >
            <ImageOutlinedIcon sx={{ width: "6.25rem", height: "6.25rem" }} />
          </Box>

          <Box display="flex" flexDirection="column">
            <FormControl variant="outlined">
              <InputLabel htmlFor="isbn">ISBN</InputLabel>
              <OutlinedInput id="isbn" type="text" label="ISBN" />
              <FormHelperText id="isbn-helper">Supporting text</FormHelperText>
            </FormControl>

            <Box display="flex" gap={1.5} mb={6.5} mt={1.25}>
              <Rating name="read-only" value={5} precision={0.5} readOnly />
              <Typography
                variant="body1"
                component="span"
                color="tertiary.main"
              >
                25,000 Ratings
              </Typography>
            </Box>

            <Box display="flex" gap={4.375}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "2px", backgroundColor: "secondary.main" }}
                disableElevation
              >
                Select Book
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
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 7.5 }} />
        <Box display="flex" paddingX={14.875} gap={2.5} flexDirection="column">
          <FormControl variant="outlined">
            <InputLabel htmlFor="title">Book Title</InputLabel>
            <OutlinedInput id="title" type="text" label="Book Title" />
            <FormHelperText id="title-helper">Supporting text</FormHelperText>
          </FormControl>

          <Stack direction="row" spacing={7.875}>
            <FormControl variant="outlined" sx={{ flex: "1 0" }}>
              <InputLabel htmlFor="author">Author</InputLabel>
              <OutlinedInput id="author" type="text" label="Author" />
              <FormHelperText id="author-helper">
                Supporting text
              </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" sx={{ flex: "1 0" }}>
              <InputLabel htmlFor="publisher">Publisher</InputLabel>
              <OutlinedInput id="publisher" type="text" label="Publisher" />
              <FormHelperText id="publisher-helper">
                Supporting text
              </FormHelperText>
            </FormControl>
          </Stack>

          <FormControl variant="outlined">
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              id="description"
              type="text"
              rows={6}
              multiline
              label="Description"
            />
            <FormHelperText id="description-helper">
              Supporting text
            </FormHelperText>
          </FormControl>

          <Stack direction="row" spacing={7.875}>
            <Autocomplete
              sx={{ flex: "1 0" }}
              multiple
              id="tags"
              options={topFilms}
              getOptionLabel={(option) => option.title}
              defaultValue={[topFilms[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Tags" placeholder="Tags" />
              )}
            />

            <Autocomplete
              sx={{ flex: "1 0" }}
              multiple
              id="fields"
              options={topFilms}
              getOptionLabel={(option) => option.title}
              defaultValue={[topFilms[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Fields" placeholder="Fields" />
              )}
            />
          </Stack>

          <Stack direction="row" spacing={7.875}>
            <Autocomplete
              sx={{ flex: "1 0" }}
              multiple
              id="language"
              options={topFilms}
              getOptionLabel={(option) => option.title}
              defaultValue={[topFilms[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Languages"
                  placeholder="Languages"
                />
              )}
            />

            <DatePicker
              sx={{ flex: "1 0" }}
              label="Publication Date"
              slotProps={{
                textField: {
                  helperText: "MM / DD / YYYY",
                },
              }}
            />
          </Stack>
        </Box>
        <Box display="flex" paddingLeft={14.875} paddingY={7.5} gap={4.375}>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: "2px", backgroundColor: "secondary.main" }}
            disableElevation
          >
            Upload
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
          >
            Discard
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
