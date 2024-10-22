import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme/Themes";

const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.secondary,
}));

const MessageText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  fontFamily: '"Montez", "cursive"',
  color: Colors.white,
  fontSize: "1.5rem",
}));

export { PromotionsContainer, MessageText };
