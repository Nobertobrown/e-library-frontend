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
import MenuItem from "@mui/material/MenuItem";

const pages = [
  "Home",
  "About Us",
  "Departments",
  "Admission",
  "ICT Services",
  "Publication",
];

function ResponsiveMiddleAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          fontFamily: "Poppins",
          backgroundColor: "background.light",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{ display: { xs: "none", md: "none", lg: "flex" }, mr: 1 }}
            >
              <img
                className="logo"
                src="http://localhost:8080/images/main.png"
                alt="National Emblem"
              />
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
                    color: "primary.light",
                    mr: 4.5,
                    fontWeight: "500",
                  }}
                  variant="body1"
                >
                  {page}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
                justifyContent: "center",
                ml: 2.5,
              }}
            >
              <img
                className="logo"
                src="http://localhost:8080/images/logo.png"
                alt="DIT Logo"
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex", lg: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "background.dark" }}
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

      {/* <Box
        sx={{
          backgroundImage: "url(/images/page-title.jpg)",
          color: "secondary.main",
          fontWeight: "400",
          height: "108px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h4" component="h4" marginLeft={3.75}>
          E Resources
        </Typography>
      </Box> */}
    </>
  );
}
export default ResponsiveMiddleAppBar;
