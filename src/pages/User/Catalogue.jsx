import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import Book from "../../components/Book/Book";
import { useQuery } from "react-query";
import SearchBar from "../../components/SearchBar/SearchBar";
import Index from "..";
import { useOutletContext } from "react-router-dom";
import { booksQuery } from "../../services/external-api.service";

export default function Catalogue() {
  const { data } = useQuery(booksQuery());
  const selections = useOutletContext();
  const selected = selections.filter(({ selected }) => selected === true)[0];
  const books = data.data["books"].filter((book) => {
    if (selected.tag !== "all") {
      return book.fields.includes(selected.tag);
    }
    return book;
  });

  if (books.length === 0) {
    return <Index />;
  }

  return (
    <>
      <SearchBar />
      <Box marginY="38px">
        <Typography variant="h5" component="h2" color="primary.light">
          {selected.name}
        </Typography>
      </Box>
      <Grid container spacing={7.25}>
        {books.map((book, index) => (
          <Book
            key={index}
            id={book._id}
            coverUrl={"http://localhost:8080/" + book.coverUrl}
            title={book.title}
            rating={book.rating["value"]}
            author={book.author}
          />
        ))}
      </Grid>
      <Box display="flex" paddingY="35px" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "2px", backgroundColor: "secondary.main" }}
          disableElevation
        >
          Show More
        </Button>
      </Box>
    </>
  );
}
