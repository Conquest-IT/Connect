import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        width: " 70vw",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      style={{height: "100%", width: "100%"}}/>
    </Box>
  );
};

export default Header;
