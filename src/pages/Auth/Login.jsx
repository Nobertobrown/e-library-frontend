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
import { NavLink, Form } from "react-router-dom";
import { required, length, email } from "../../utilities/validator";

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
    <Box
      display="flex"
      sx={{
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        borderRadius={4}
        overflow={"hidden"}
        sx={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            height: "500px",
            width: "400px",
          }}
        >
          <img
            style={{ maxWidth: "100%", height: "100%" }}
            src="images/bookshelves-bright-colors.jpg"
            alt="Library-Books"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "500px",
            width: "500px",
            backgroundColor: "background.main2",
            px: { xs: 5, sm: 6.25 },
            gap: 3.75,
            pt: 8,
            pb: 6.875,
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
                height: "3.5rem",
                fontSize: "1rem",
                backgroundColor: "secondary.main",
              }}
              disableElevation
            >
              Sign In
            </Button>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}

//TODO: Solve the error that occurs when typing the second input fast
