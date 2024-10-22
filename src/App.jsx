import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme/Themes.jsx";
import AppBarMobDest from "./component/appBar/AppBarMain.jsx";
import MainBanner from "./component/banner/MainBanner.jsx";
import MainPromotions from "./component/promotions/MainPromotions.jsx";
import MainProducts from "./component/products/MainProducts.jsx";
import MainFooter from "./component/footer/MainFooter.jsx";
import MainAppDrawer from "./component/drawer/MainAppDrawer.jsx";
import { UIProvider } from "./context/ui/ContextUi.jsx";
import SearchBoxDrawer from "./component/search/SearchBoxDrawer.jsx";

const App = () => {
  useEffect(() => {
    document.title = `React Material UI - Home`;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#",
        }}
      >
        <UIProvider>
          <AppBarMobDest />
          <MainBanner />
          <MainPromotions />

          <Box display={"flex"} justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>

          <MainProducts />
          <MainFooter />
          <MainAppDrawer />
          <SearchBoxDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
