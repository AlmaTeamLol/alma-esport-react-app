import { Outlet } from "react-router";

import { Box, Fab } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AddIcon from "@mui/icons-material/Add";

import Navigation from "@components/Navigation/Navigation";
import type { NavigationItem } from "@components/Navigation/Navigation.types";

import {
  DRAWER_WIDTH,
  APP_BAR_HEIGHT,
  PAGE_MARGIN,
} from "@/utils/constants/navigation-constants";

/* Navigation Layout */
export default function NavigationLayout() {
  const navigationItems: NavigationItem[] = [
    {
      label: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      label: "Team",
      icon: <GroupsIcon />,
      path: "team",
    },
    {
      label: "Member",
      icon: <PeopleIcon />,
      path: "member",
    },
    {
      label: "Tierlist",
      icon: <ChecklistRoundedIcon />,
      path: "tierlist",
    },
    {
      label: "About",
      icon: <InfoIcon />,
      path: "about",
    },
    {
      label: "Contact",
      icon: <ContactMailIcon />,
      path: "contact",
    },
  ];

  return (
    <Navigation title="ALMA Esport" navigationItems={navigationItems}>
      <Box
        sx={{
          position: "absolute",
          left: DRAWER_WIDTH,
          top: APP_BAR_HEIGHT,
          height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
          width: `calc(100vw - ${DRAWER_WIDTH}px)`,
        }}
      >
        <Outlet />

        <Box
          sx={{
            position: "absolute",
            bottom: PAGE_MARGIN * 2,
            right: PAGE_MARGIN * 2,
            zIndex: 1000,
          }}
        >
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </Box>
    </Navigation>
  );
}
