// import { useTheme } from "@emotion/react";
// import { useMediaQuery } from "@mui/material";

import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner/MainBanner";

const MainBanner = () => {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoint.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/Images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>

        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          voluptates incidunt numquam quasi ratione placeat quos nostrum dolor
          doloribus error.
        </BannerDescription>
        <BannerShopButton color="primary">Show Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default MainBanner;
