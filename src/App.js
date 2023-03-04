import React from "react";

function App() {
  return (
    <div>
      <form
        action="http://localhost:8080/catalogue/book"
        method="post"
        enctype="multipart/form-data"
      >
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" />

        <label for="author">Author: </label>
        <input type="text" name="author" id="author" />

        <label for="book">Book: </label>
        <input type="file" name="book" id="book" />

        <label for="desc">Description: </label>
        <input type="text" name="description" id="desc" />

        <label for="rating">Rate: </label>
        <input type="number" name="rating" id="rating" />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
