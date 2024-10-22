import { createContext, useContext, useState } from "react";

const UIContext = createContext();
const useUIContext = () => useContext(UIContext);

const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchOpen, setShowSearchOpen] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchOpen,
    setShowSearchOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export { UIContext, useUIContext, UIProvider };
