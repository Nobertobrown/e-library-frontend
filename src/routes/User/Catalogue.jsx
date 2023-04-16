import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import Book from "../../components/Book/Book";
import { useQuery } from "react-query";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import Index from "..";
import localforage from "localforage";

const booksQuery = (url) => ({
  queryKey: "getBooks",
  queryFn: async () => {
    const loginData = await localforage.getItem("loginData");
    const data = await axios.get(url, {
      headers: { Authorization: "Bearer " + loginData.token },
    });
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
  const { data } = useQuery(query);
  const books = data.data["books"];

  if (books.length === 0) {
    return <Index />;
  }

  return (
    <>
      <SearchBar />
      <Box marginY="38px">
        <Typography variant="h5" component="h2" color="primary.light">
          Computer Studies
        </Typography>
      </Box>
      <Grid container spacing={7.25}>
        {books.map((book, index) => (
          <Book
            key={index}
            id={book._id}
            imgUrl={"http://localhost:8080" + book.imgUrl}
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
