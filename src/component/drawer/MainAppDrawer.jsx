import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useUIContext } from "../../context/ui/ContextUi";
import { DrawerCloseButton } from "../../styles/appBar/AppBarMobDest";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { Colors } from "../../styles/theme/Themes";

const MainAppDrawer = () => {
  const MiddleDivider = styled(Divider)(() => ({ variant: "middle" }));
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            className="testing"
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default MainAppDrawer;
