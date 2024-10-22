import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  AppBarContainer,
  AppBarHeader,
  MyList,
} from "../../styles/appBar/AppBarMobDest";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui/ContextUi";
const AppBarDesktop = ({ matches }) => {
  const { setShowSearchOpen } = useUIContext();
  return (
    <AppBarContainer>
      <AppBarHeader>My Bags</AppBarHeader>

      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon onClick={() => setShowSearchOpen(true)}>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};

export default AppBarDesktop;
