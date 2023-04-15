import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, Form, redirect } from "react-router-dom";
import { required, length, email } from "../../util/validator";
import axios from "axios";

export async function action({ request }) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  // axios
  //   .put("http://localhost:8080/signup", body)
  //   .then((res) => {
  //     if (res.status === 422) {
  //       throw new Error(
  //         "Validation failed. Make sure the email address isn't used yet!"
  //       );
  //     }
  //     if (res.status !== 200 && res.status !== 201) {
  //       console.log("Error!");
  //       throw new Error("Creating a user failed!");
  //     }
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const result = await axios.put("http://localhost:8080/signup", body);
  if (result.status === 422) {
    throw new Error(
      "Validation failed. Make sure the email address isn't used yet!"
    );
  }
  if (result.status !== 200 && result.status !== 201) {
    console.log("Error!");
    throw new Error("Creating a user failed!");
  }
  console.log(result.data);
  return redirect("/login");
}

export default function SignUpPage() {
  const [userData, setUserData] = useState({
    username: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
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
    <Box
      display="flex"
      sx={{
        "& .MuiTypography-root": {
          fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
        },
      }}
      gap={19.75}
    >
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
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <Typography>
            Already have an account?{" "}
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "#163269" }}
            >
              Sign In
            </NavLink>
          </Typography>
        </Box>
        <Typography
          variant="h5"
          component="h5"
          color="primary.light"
          fontWeight={700}
        >
          Create Account
        </Typography>
        <Form
          style={{ display: "flex", flexFlow: "column", gap: "30px" }}
          method="put"
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              error={userData.username.touched && !userData.username.valid}
              id="username"
              name="username"
              type="text"
              label="Username"
              value={userData.username.value}
              onChange={inputChangeHandler}
            />
          </FormControl>

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

          <FormControl variant="outlined">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
          </FormControl>

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
            Create Account
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
