import { useMediaQuery, useTheme } from "@mui/material";
import AppBarMobile from "./AppBarMobileV";
import AppBarDesktop from "./AppBarDesktopV";

const AppBarMobDest = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppBarDesktop matches={matches} />
      )}
    </>
  );
};

export default AppBarMobDest;
