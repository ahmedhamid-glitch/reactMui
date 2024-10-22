import { Box, styled, TextField } from "@mui/material";
import { Colors } from "../theme/Themes";

const SearchBoxContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: Colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 0.9,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  ".MuiInput-root": {
    fontSize: "1.2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    color: Colors.secondary,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  marginLeft: " 20px",
}));
export { SearchBoxContainer, SearchField };
