// import {  } from "@mui/material";
import { Box, IconButton, List, styled, Typography } from "@mui/material";
import { Colors } from "../theme/Themes";
import "@fontsource/montez";

const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  margin: 4,
  alignItems: "center",
  padding: "2px 8px ",
}));

const AppBarHeader = styled(Typography)(({ theme }) => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "3em",
  fontFamily: '"Montez","cursive"',
  color: Colors.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2em",
  },
}));

const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));
const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: "250px",
  zIndex: 1999,
}));

export {
  AppBarContainer,
  AppBarHeader,
  MyList,
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  DrawerCloseButton,
};
