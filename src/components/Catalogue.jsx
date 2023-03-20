import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import Book from "./Book";
import { useQuery } from "react-query";
import axios from "axios";

const booksQuery = (url) => ({
  queryKey: "getBooks",
  queryFn: async () => {
    const books = await axios.get(url);
    return books;
  },
});

export const loader = (queryClient) => async () => {
  let url = "http://localhost:8080/catalogue/books";
  const query = booksQuery(url);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export default function Catalogue() {
  const { data: books } = useQuery(
    booksQuery("http://localhost:8080/catalogue/books")
  );
  const { first, second } = books;
  console.log(first, second);

  return (
    <>
      <Box marginY="38px">
        <Typography variant="h5" component="h2">
          Computer Studies
        </Typography>
      </Box>
      <Grid container spacing={7.25}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
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
