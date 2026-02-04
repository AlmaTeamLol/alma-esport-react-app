/* MUI */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* Router */
import { NavLink } from "react-router";

/* Types */
import type { NavigationItem } from "./Navigation.types";

/* Constants */
import { DRAWER_WIDTH } from "../../constants";

interface NavigationProps {
  title: string;
  navigationItems: NavigationItem[];
  children: React.ReactNode;
}

export default function Navigation({
  title,
  navigationItems,
  children,
}: NavigationProps) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        border: "1px solid blue",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={NavLink} to={item.path}>
                  <ListItemIcon
                    sx={{ minWidth: 0, mr: 2, justifyContent: "center" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textTransform: "uppercase",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
