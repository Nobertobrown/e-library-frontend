import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import Book from "./Book";
import { useQuery } from "react-query";
import axios from "axios";

const booksQuery = (url) => ({
  queryKey: "getBooks",
  queryFn: async () => {
    const data = await axios.get(url);
    return data;
  },
});
let url = "http://localhost:8080/catalogue/books";
const query = booksQuery(url);

export const loader = (queryClient) => async () => {
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export default function Catalogue() {
  const { data } = useQuery(query.queryKey);
  console.log(data.data);
  const books = data.data;

  return (
    <>
      <Box marginY="38px">
        <Typography variant="h5" component="h2">
          Computer Studies
        </Typography>
      </Box>
      <Grid container spacing={7.25}>
        {books.map((book) => (
          <Book
            key={book._id}
            id={book._id}
            imgUrl={book.cover}
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
