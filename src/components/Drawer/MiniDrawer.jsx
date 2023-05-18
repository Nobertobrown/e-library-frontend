// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Newsletter from "../Newsletter/Newsletter";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// // import Divider from "@mui/material/Divider";
// import Container from "@mui/material/Container";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import IconButton from "@mui/material/IconButton";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import MenuIcon from "@mui/icons-material/Menu";
// import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
// import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
// import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
// import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
// import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
// import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
// import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
// import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
// import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";

// import { Outlet } from "react-router-dom";
// import { Typography } from "@mui/material";

// const drawerWidth = 355;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   padding: theme.spacing(0, 1.5),
//   ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <Drawer
//           variant="permanent"
//           open={open}
//           sx={{
//             "& .MuiPaper-root": {
//               zIndex: 0,
//               position: "relative",
//               backgroundColor: "background.main2",
//             },
//             "& .MuiTypography-root": {
//               fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
//             },
//           }}
//         >
//           {/* sx={{ mt: 17, mb: 4.5 }} */}
//           <DrawerHeader>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               sx={{
//                 ...(open && { display: "none" }),
//                 color: "primary.light",
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <IconButton
//               sx={{ display: !open && "none", color: "primary.light" }}
//               onClick={handleDrawerClose}
//             >
//               {theme.direction === "rtl" ? (
//                 <ChevronRightIcon />
//               ) : (
//                 <ChevronLeftIcon />
//               )}
//             </IconButton>
//             <Typography
//               variant="h5"
//               component="h5"
//               fontWeight={500}
//               sx={{
//                 display: !open && "none",
//                 color: "primary.light",
//               }}
//             >
//               Shelves
//             </Typography>
//           </DrawerHeader>
//           {/* <Divider /> */}
// <List>
//   {[
//     {
//       name: "All Collections",
//       icon: <CollectionsBookmarkOutlinedIcon />,
//     },
//     { name: "Computer Studies", icon: <ComputerOutlinedIcon /> },
//     { name: "Civil Engineering", icon: <ConstructionOutlinedIcon /> },
//     {
//       name: "Electrical Engineering",
//       icon: <ElectricalServicesOutlinedIcon />,
//     },
//     {
//       name: "Electronics & Telecommunication",
//       icon: <WifiCalling3OutlinedIcon />,
//     },
//     {
//       name: "Mechanical Engineering",
//       icon: <EngineeringOutlinedIcon />,
//     },
//     {
//       name: "Science & Laboratory Technology",
//       icon: <ScienceOutlinedIcon />,
//     },
//     { name: "General Studies", icon: <PublicOutlinedIcon /> },
//     { name: "Research & Publications", icon: <BookOutlinedIcon /> },
//     { name: "External Resources", icon: <SourceOutlinedIcon /> },
//   ].map((text, index) => (
//     <ListItem
//       key={text.name}
//       disablePadding
//       sx={{ display: "block" }}
//     >
//       <ListItemButton
//         sx={{
//           minHeight: 48,
//           justifyContent: open ? "initial" : "center",
//           px: 2.5,
//         }}
//       >
//         <ListItemIcon
//           sx={{
//             minWidth: 0,
//             mr: open ? 3 : "auto",
//             justifyContent: "center",
//             color: "primary.light",
//           }}
//         >
//           {text.icon}
//         </ListItemIcon>
//         <ListItemText
//           primary={text.name}
//           sx={{ opacity: open ? 1 : 0, color: "primary.light" }}
//         />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>
//           {/* <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                     color: "primary.light",
//                   }}
//                 >
//                   {index % 2 === 0 ? (
//                     <CollectionsBookmarkOutlinedIcon />
//                   ) : (
//                     <ComputerOutlinedIcon />
//                   )}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   sx={{ opacity: open ? 1 : 0, color: "primary.light" }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List> */}
//         </Drawer>
//         <Container component="main" sx={{ flexGrow: 1 }} maxWidth="lg">
//           <Outlet />
//         </Container>
//       </Box>
//       <Newsletter />
//     </>
//   );
// }

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

import { Outlet } from "react-router-dom";

const drawerWidth = 355;

function MiniDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        {[
          {
            name: "All Collections",
            icon: <CollectionsBookmarkOutlinedIcon />,
          },
          { name: "Computer Studies", icon: <ComputerOutlinedIcon /> },
          { name: "Civil Engineering", icon: <ConstructionOutlinedIcon /> },
          {
            name: "Electrical Engineering",
            icon: <ElectricalServicesOutlinedIcon />,
          },
          {
            name: "Electronics & Telecommunication",
            icon: <WifiCalling3OutlinedIcon />,
          },
          {
            name: "Mechanical Engineering",
            icon: <EngineeringOutlinedIcon />,
          },
          {
            name: "Science & Laboratory Technology",
            icon: <ScienceOutlinedIcon />,
          },
          { name: "General Studies", icon: <PublicOutlinedIcon /> },
          { name: "Research & Publications", icon: <BookOutlinedIcon /> },
          { name: "External Resources", icon: <SourceOutlinedIcon /> },
        ].map((text, index) => (
          <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
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
                  color: "primary.light",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                sx={{ opacity: 1, color: "primary.light" }}
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
          <Outlet />
        </Box>
      </Box>
      <Newsletter />
      <Footer />
    </>
  );
}

export default MiniDrawer;
