import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

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

        <FormControl variant="outlined">
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <OutlinedInput id="email" type="email" label="Email Address" />
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
            <OutlinedInput id="password" type="password" label="Password" />
          </FormControl>
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "2px",
            backgroundColor: "secondary.main",
          }}
          disableElevation
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
