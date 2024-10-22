import React from "react";
import { useUIContext } from "../../context/ui/ContextUi";
import { IconButton, Slide } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  SearchBoxContainer,
  SearchField,
} from "../../styles/search/SearchBoxDrawer";

const SearchBoxDrawer = () => {
  const { showSearchOpen, setShowSearchOpen } = useUIContext();

  return (
    <Slide direction="down" in={showSearchOpen} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Search..."
        />
        <IconButton>
          <SearchIcon
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
            }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchOpen(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          color="secondary"
        >
          <CloseIcon
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
};

export default SearchBoxDrawer;
