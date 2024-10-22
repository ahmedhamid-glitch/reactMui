import React from "react";
import { ProductMetaWrapper } from "../../styles/products/MainProducts";
import { Typography } from "@mui/material";

const ProductMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography
        variant={matches ? "h6" : "h5"}
        lineHeight={2}
        fontSize={"0.8rem"}
      >
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        ${product.price}
      </Typography>
    </ProductMetaWrapper>
  );
};

export default ProductMeta;
