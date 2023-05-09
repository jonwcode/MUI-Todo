import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ position: "sticky", bottom: 0, left: 0, width: "100%" }}>
      <Typography variant="h6">
        To view the whole source visit:{" "}
        <a href="https://github.com/jonwcode/MUI-Todo">GitHub Repo</a>
      </Typography>
    </Box>
  );
};

export default Footer;
