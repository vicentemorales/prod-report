import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

// Nav bar logic
const NavBar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>

        <Typography variant="h6" component="div" onClick={handleRefresh} style={{ cursor: "pointer" }}>
          HPP Food Services - Production Report
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

