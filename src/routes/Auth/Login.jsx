import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, Form, redirect } from "react-router-dom";
import { required, length, email } from "../../util/validator";
import axios from "axios";
import localforage from "localforage";

const postLoginData = async (data) => {
  const result = await axios.post("http://localhost:8080/login", data);
  if (result.status === 422) {
    throw new Error("Validation failed.");
  }
  if (result.status !== 200 && result.status !== 201) {
    console.log("Error!");
    throw new Error("Could not authenticate you!");
  }
  return result.data;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const query = postLoginData(body);
  await localforage.setItem("loginData", query);
  return redirect("/catalogue/books");
};

export default function LoginPage() {
  const [userData, setUserData] = useState({
    email: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, email],
    },
    password: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, length({ min: 6 })],
    },
    formIsValid: false,
  });

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setUserData((prevState) => {
      userData[name].touched = true;
      let isValid = true;
      for (const validator of prevState[name].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState,
        [name]: {
          ...prevState[name],
          value: value,
          valid: isValid, //If its true it means the input value is valid
        },
      };
      let IsValid = true;
      for (const inputName in updatedForm) {
        IsValid = IsValid && updatedForm[inputName].valid;
      }
      userData.formIsValid = IsValid;
      return updatedForm;
    });
  }

  return (
    <Box display="flex" gap={19.75}>
      <Box>
        <img
          style={{ width: "654px", height: "100%", opacity: "12%" }}
          src="http://localhost:8080/images/bookshelves-bright-colors.jpg"
          alt="Library-Books"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={3.75}
        width="573px"
        sx={{
          backgroundColor: "background.main2",
          px: 6.25,
          pt: 8,
          pb: 6.875,
          my: 10.6875,
          "& .MuiTypography-root": {
            fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <Typography>
            New user?{" "}
            <NavLink
              to="/signup"
              style={{ textDecoration: "none", color: "#163269" }}
            >
              Create an account
            </NavLink>
          </Typography>
        </Box>
        <Typography
          variant="h5"
          component="h5"
          color="primary.light"
          fontWeight={700}
        >
          Sign In
        </Typography>
        <Form
          style={{ display: "flex", flexFlow: "column", gap: "30px" }}
          method="post"
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <OutlinedInput
              error={userData.email.touched && !userData.email.valid}
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={userData.email.value}
              onChange={inputChangeHandler}
            />
          </FormControl>

          <Box display="flex" flexDirection="column">
            <Link
              color="tertiary.main"
              variant="body1"
              marginLeft="auto"
              alignSelf="flex-end"
            >
              Forgot your password?
            </Link>
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                error={userData.password.touched && !userData.password.valid}
                id="password"
                name="password"
                type="password"
                label="Password"
                value={userData.password.value}
                onChange={inputChangeHandler}
              />
            </FormControl>
          </Box>

          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              borderRadius: "2px",
              backgroundColor: "secondary.main",
            }}
            disableElevation
          >
            Sign In
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
