import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const pages = [
  "DIT Company",
  "Centers",
  "Our Partners",
  "Alumni",
  "Projects",
  "Research",
];

const CustomButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    "&:hover, &.Mui-focusVisible": {
      textDecoration: "underline",
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

function ResponsiveTopAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ fontFamily: "Poppins" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "none", lg: "flex" }, mr: 1 }}>
            <img src="/images/dit-title0.png" alt="DIT Logo" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "none",
                lg: "flex",
              },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: "auto",
                  color: "tertiary.main",
                  mr: 2,
                  cursor: "pointer",
                  fontWeight: "400",
                }}
                variant="subtitle2"
                underline="none"
              >
                {page}
              </Link>
            ))}
            <Link
              sx={{
                my: "auto",
                mr: 3,
                color: "secondary.main",
                cursor: "pointer",
                fontWeight: "700",
              }}
              variant="subtitle1"
              underline="none"
            >
              Apply Now
            </Link>
          </Box>

          <CustomButton
            sx={{
              display: { xs: "none", md: "none", lg: "flex" },
              color: "white",
              borderRadius: "0",
              backgroundColor: "secondary.light",
              textTransform: "none",
              height: "64px",
              width: "125px",
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
            size="large"
            disableElevation
          >
            Campuses
          </CustomButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", lg: "none" },
              justifyContent: "center",
            }}
          >
            <img src="/images/dit-title0.png" alt="DIT Logo" />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography noWrap textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveTopAppBar;
