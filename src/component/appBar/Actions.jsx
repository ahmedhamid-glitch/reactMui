import React from "react";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../styles/appBar/AppBarMobDest";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { Favorite, ShoppingBag } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { Colors } from "../../styles/theme/Themes";
const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingBag />
          </ListItemIcon>
        </ListItemButton>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            background: "#000",
          }}
        />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Favorite />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
};

export default Actions;
