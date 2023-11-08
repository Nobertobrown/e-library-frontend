import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Newsletter from "../Newsletter/Newsletter";
import AdminNewsletter from "../Newsletter/AdminNewsletter";
import Footer from "../Footer/AppFooter";

import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";

import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

const drawerWidth = 355;

function MiniDrawer() {
  const userRole = useLoaderData();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [selections, setSelections] = React.useState([
    {
      selected: true, name: "All Collections", tag: "all",
      icon: <CollectionsBookmarkOutlinedIcon />
    },
    {
      selected: false, name: "Computer Studies", tag: "coe",
      icon: <ComputerOutlinedIcon />
    },
    {
      selected: false, name: "Civil Engineering", tag: "ce",
      icon: <ConstructionOutlinedIcon />
    },
    {
      selected: false, name: "Electrical Engineering", tag: "ee",
      icon: <ElectricalServicesOutlinedIcon />
    },
    {
      selected: false, name: "Electronics & Telecommunication", tag: "ete",
      icon: <WifiCalling3OutlinedIcon />
    },
    {
      selected: false, name: "Mechanical Engineering", tag: "me",
      icon: <EngineeringOutlinedIcon />
    },
    {
      selected: false, name: "Science & Laboratory Technology", tag: "lab",
      icon: <ScienceOutlinedIcon />
    },
    {
      selected: false, name: "General Studies", tag: "gs",
      icon: <PublicOutlinedIcon />
    },
    { selected: false, name: "Research & Publications", tag: "research", icon: <BookOutlinedIcon /> },
    { selected: false, name: "External Resources", tag: "external", icon: <SourceOutlinedIcon /> },
  ]);

  React.useEffect(() => {
    userRole === "admin" && setIsAdmin(true);
  }, [userRole]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography
        variant="h5"
        component="h5"
        fontWeight={500}
        sx={{
          color: "primary.light",
          marginY: "0.875rem",
          marginLeft: "1.25rem"
        }}
      >
        Shelves
      </Typography>
      <List>
        {selections.map(({ selected, name, icon }, index) => (
          <ListItem
            onClick={(e) => {
              navigate("/catalogue/books")
              const id = e.currentTarget.id;
              const newArray = selections.map((selection) => {
                if (id === selection.name) {
                  return { ...selection, selected: true }
                }
                return { ...selection, selected: false };
              })
              setSelections(newArray)
            }}
            id={name}
            key={index}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                backgroundColor: selected && "primary.light",
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                  color: selected ? "background.light" : "primary.light",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={name}
                sx={{ opacity: 1, color: selected ? "background.light" : "primary.light" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Box id="cont" position="relative" sx={{ display: "flex" }}>
        <CssBaseline />
        <Toolbar sx={{ height: "fit-content", display: { sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "primary.light" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={() => document.getElementById("cont")}
            slotProps={{ backdrop: { style: { position: "absolute" } } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              position: "absolute",
              zIndex: 0,
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                position: "absolute",
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "background.main2",
              },
              "& .MuiTypography-root": {
                fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                position: "absolute",
                zIndex: 0,
                width: drawerWidth,
                backgroundColor: "background.main2",
              },
              "& .MuiTypography-root": {
                fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Outlet context={selections} />
        </Box>
      </Box>
      {isAdmin ? <AdminNewsletter /> : <Newsletter />}
      <Footer />
    </>
  );
}

export default MiniDrawer;
