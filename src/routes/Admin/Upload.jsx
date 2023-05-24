import React, { useRef, useState } from "react";
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
  Chip,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { tags, languages, fields } from "../../util/data";
import { Form } from "react-router-dom";
import axios from "axios";
import localforage from "localforage";

const postBookData = async (data) => {
  const loginData = await localforage.getItem("loginData");
  const result = await axios.putForm("http://localhost:8080/admin/book", data, {
    headers: { Authorization: "Bearer " + loginData.token },
  });
  if (result.status === 422) {
    throw new Error("Uploading failed!");
  }
  if (result.status !== 200 && result.status !== 201) {
    console.log("Error!");
    throw new Error("Could not upload book!");
  }
  return result.data;
};

export default function UploadPage() {
  const [details, setDetails] = useState({
    isbn: "",
    rating: { value: null, rates: 1 },
    title: "",
    author: "",
    publisher: "",
    description: "",
    tags: { value: [], inputValue: "" },
    fields: { value: [], inputValue: "" },
    languages: { value: [], inputValue: "" },
    publicationDate: null,
  });

  const field = useRef();
  const tag = useRef();
  const language = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    let data = {
      ...details,
      publicationDate: details.publicationDate.$d,
      book: event.target.book.files[0]
    }
    postBookData(data);
  }

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function autoCompleteInputValueHandler(event, newValue) {
    const { name } = event.target;
    setDetails((prevState) => {
      return {
        ...prevState,
        [name]: { ...prevState[name], inputValue: newValue },
      };
    });
  }

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

      <Form
        onSubmit={handleSubmit}
        method="put"
        style={{ backgroundColor: "#F6F6F6", display: "flex", flexDirection: "column", marginTop: "20px" }}
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
              <OutlinedInput
                id="isbn"
                type="text"
                label="ISBN"
                name="isbn"
                value={details.isbn}
                onChange={inputChangeHandler}
              />
              <FormHelperText id="isbn-helper">Supporting text</FormHelperText>
            </FormControl>

            <Box display="flex" gap={1.5} mb={6.5} mt={1.25}>
              <Rating
                name="rating"
                value={details.rating.value}
                onChange={(event, newValue) => {
                  const { name } = event.target;
                  setDetails((prevState) => {
                    return {
                      ...prevState,
                      [name]: { ...prevState[name], value: newValue },
                    };
                  });
                }}
                precision={0.5}
              />
              <Typography
                variant="body1"
                component="span"
                color="tertiary.main"
              >
                {details.rating.rates} Ratings
              </Typography>
            </Box>

            <Box display="flex" gap={4.375}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "2px", backgroundColor: "secondary.main" }}
                component="label"
                disableElevation
              >
                Select Book
                <input hidden accept=".pdf,.docx,.doc" type="file" name="book" id="book" />
              </Button>

              <Button
                variant="outlined"
                type="reset"
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
            <OutlinedInput
              id="title"
              type="text"
              label="Book Title"
              name="title"
              value={details.title}
              onChange={inputChangeHandler}
            />
            <FormHelperText id="title-helper">Supporting text</FormHelperText>
          </FormControl>

          <Stack direction="row" spacing={7.875}>
            <FormControl variant="outlined" sx={{ flex: "1 0" }}>
              <InputLabel htmlFor="author">Author</InputLabel>
              <OutlinedInput
                id="author"
                type="text"
                label="Author"
                name="author"
                value={details.author}
                onChange={inputChangeHandler}
              />
              <FormHelperText id="author-helper">
                Supporting text
              </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" sx={{ flex: "1 0" }}>
              <InputLabel htmlFor="publisher">Publisher</InputLabel>
              <OutlinedInput
                id="publisher"
                type="text"
                label="Publisher"
                name="publisher"
                value={details.publisher}
                onChange={inputChangeHandler}
              />
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
              label="Description"
              name="description"
              value={details.description}
              onChange={inputChangeHandler}
              rows={6}
              multiline
            />
            <FormHelperText id="description-helper">
              Supporting text
            </FormHelperText>
          </FormControl>

          <Stack direction="row" spacing={7.875}>
            <Autocomplete
              sx={{ flex: "1 0" }}
              multiple
              freeSolo
              id="tags"
              name="tags"
              ref={tag}
              options={tags}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={details.tags.value}
              onChange={(_, newValue) => {
                const name = tag.current.getAttribute("name");
                setDetails((prevState) => {
                  return {
                    ...prevState,
                    [name]: {
                      ...prevState[name],
                      value: newValue,
                    },
                  };
                });
              }}
              inputValue={details.tags.inputValue}
              onInputChange={autoCompleteInputValueHandler}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tags"
                  name="tags"
                  placeholder="Tags"
                />
              )}
            />

            <Autocomplete
              sx={{ flex: "1 0" }}
              multiple
              id="fields"
              name="fields"
              ref={field}
              options={fields}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={details.fields.value}
              onChange={(_, newValue) => {
                const name = field.current.getAttribute("name");
                setDetails((prevState) => {
                  return {
                    ...prevState,
                    [name]: {
                      ...prevState[name],
                      value: newValue,
                    },
                  };
                });
              }}
              inputValue={details.fields.inputValue}
              onInputChange={autoCompleteInputValueHandler}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Fields"
                  name="fields"
                  placeholder="Fields"
                />
              )}
            />
          </Stack>

          <Stack direction="row" spacing={7.875}>
            <Autocomplete
              sx={{ flex: "1 0" }}
              multiple
              freeSolo
              id="languages"
              name="languages"
              ref={language}
              options={languages}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={details.languages.value}
              onChange={(_, newValue) => {
                const name = language.current.getAttribute("name");
                setDetails((prevState) => {
                  return {
                    ...prevState,
                    [name]: {
                      ...prevState[name],
                      value: newValue,
                    },
                  };
                });
              }}
              inputValue={details.languages.inputValue}
              onInputChange={autoCompleteInputValueHandler}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Languages"
                  name="languages"
                  placeholder="Languages"
                />
              )}
            />

            <DatePicker
              sx={{ flex: "1 0" }}
              label="Publication Date"
              value={details.publicationDate}
              onChange={(newValue) => setDetails((prevState) => {
                return {
                  ...prevState,
                  publicationDate: newValue,
                };
              })}
              slotProps={{
                textField: {
                  helperText: "MM / DD / YYYY",
                  name: "publishedAt",
                },
              }}
            />
          </Stack>
        </Box>
        <Box display="flex" paddingLeft={14.875} paddingY={7.5} gap={4.375}>
          <Button
            variant="contained"
            size="large"
            type="submit"
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
      </Form>
    </Box>
  );
}

// TODO
// Add file upload logic
