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
import UseDialogModal from "../../hooks/UseDialogModal.jsx";
import ProductDetails from "../productDetail/ProductDetails.jsx";

const SingleProduct = ({ product, matches }) => {
  const [ProductDetailDialog, showProductDetailDialog] =
    UseDialogModal(ProductDetails);

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />

        <ProductActionsWrapper>
          <Stack direction={"row"}>
            <ProductFavButton isFav={0}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCard variant="contained">Add To Card</ProductAddToCard>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProduct;
