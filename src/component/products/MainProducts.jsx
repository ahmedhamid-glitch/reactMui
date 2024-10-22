import { useTheme } from "@emotion/react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data/CardData";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

const MainProducts = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={4}
      sm={4}
      md={4}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{
          xs: 2,
          md: 3,
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={"center"}
        sx={{
          m: "20px 4px 10px 4px",
        }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default MainProducts;
