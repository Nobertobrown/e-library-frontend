import { Button, Paper, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import localforage from "localforage";

const subscribe = async (data) => {
  const loginData = await localforage.getItem("loginData");
  const result = await axios.post("http://localhost:8080/catalogue/subscribe", data, {
    headers: { Authorization: "Bearer " + loginData.token },
  });
  if (result.status === 422) {
    throw new Error("Subscribing failed!");
  }
  if (result.status !== 200 && result.status !== 201) {
    console.log("Error!");
    throw new Error("Could not subscribe you!");
  }
  return result.data;
}

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      mail: email
    }
    subscribe(data);
    setEmail("");
  }
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6.875,
        backgroundColor: "background.intermediate",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        sx={{
          color: "primary.light",
          fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
        }}
      >
        Subscribe to our Newsletter
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          color: "primary.light",
          fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
          mb: 5,
        }}
      >
        Be first to know about our new books when they drop!
      </Typography>
      <Form
        onSubmit={handleSubmit}
        style={{ display: "flex" }}
        method="post"
      >
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "2px 0 0 2px",
              width: "365px",
              height: "46px",
            },
          }}
          placeholder="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Button
          size="large"
          type="submit"
          variant="contained"
          sx={{
            borderRadius: "0 2px 2px 0",
            backgroundColor: "secondary.main",
          }}
          disableElevation
        >
          Subscribe
        </Button>
      </Form>
    </Paper>
  );
}
