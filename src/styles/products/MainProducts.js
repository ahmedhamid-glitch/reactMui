import { Box, Button, IconButton, styled } from "@mui/material";
import { Colors } from "../theme/Themes.jsx";
import { slideInBottom, slideInRight } from "../../animation/Animation.js";
const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

const ProductImage = styled("img")(({ src, theme }) => ({
  src: src,
  width: "100%",
  background: Colors.light_gray,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({ theme, isFav }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

const ProductAddToCard = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    width: "300px",
    position: "absolute",
    bottom: "2%",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both`,
  },

  background: Colors.secondary,
  opacity: 0.9,
}));

const ProductMetaWrapper = styled(Box)(() => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show && `${slideInRight} 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both`,
  },
}));

export {
  Product,
  ProductImage,
  ProductActionButton,
  ProductFavButton,
  ProductAddToCard,
  ProductMetaWrapper,
  ProductActionsWrapper,
};
