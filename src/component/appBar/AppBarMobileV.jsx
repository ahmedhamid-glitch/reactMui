import React from "react";
import {
  AppBarContainer,
  AppBarHeader,
} from "../../styles/appBar/AppBarMobDest";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui/ContextUi";

const AppBarMobile = ({ matches }) => {
  const { setDrawerOpen, setShowSearchOpen } = useUIContext();
  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>

      <AppBarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppBarHeader>
      <IconButton onClick={() => setShowSearchOpen(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};
export default AppBarMobile;
