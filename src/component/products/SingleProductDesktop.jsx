import { Stack } from "@mui/material";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCard,
  ProductFavButton,
  ProductImage,
} from "../../styles/products/MainProducts.js";
import ProductMeta from "./ProductMeta";
import { Favorite } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import UseDialogModal from "../../hooks/UseDialogModal.jsx";
import ProductDetails from "../productDetail/ProductDetails.jsx";

const SingleProductDesktop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const [ProductDetailDialog, showProductDetailDialog] =
    UseDialogModal(ProductDetails);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <Favorite />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCard show={showOptions} variant="contained">
            Add To Card
          </ProductAddToCard>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction={"column"}>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductDesktop;
