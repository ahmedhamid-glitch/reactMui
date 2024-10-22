import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Colors } from "../../styles/theme/Themes";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/products/MainProducts";
import IncDec from "../ui/IncDec";
import { Favorite, Facebook, Instagram, Twitter } from "@mui/icons-material";

const ProductDetails = ({ open, onClose, product }) => {
  console.log("product Image", product);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const slideTransition = (props) => {
    return <Slide direction="down" {...props} />;
  };

  const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
  }));

  const ProductDetailInfoWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));

  return (
    <Dialog
      TransitionComponent={slideTransition}
      variant="permanat"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          fontFamily={'"montez", "cursive"'}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant={"subtitle1"}>SKU 123</Typography>
            <Typography variant={"subtitle1"}>
              Availability: 5 in stock
            </Typography>
            <Typography
              variant="h4"
              sx={{
                lineHeight: 2,
              }}
            >
              {product.name}
            </Typography>
            <Typography variant="body">
              {product.description}
              {product.description}
              {product.description}
            </Typography>

            <Box
              className={"Box"}
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IncDec />
              <Button variant="contained">Add To Cart</Button>
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ mt: 4, color: Colors.light }}
            >
              <Favorite sx={{ mr: 2 }} />
              Add To Wishlist
            </Box>

            <Box
              sx={{
                mt: 4,
                color: Colors.light,
              }}
            >
              <Facebook />
              <Twitter sx={{ pl: theme.spacing(4.5) }} />
              <Instagram sx={{ pl: theme.spacing(4.5) }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
