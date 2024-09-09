import { Box, Typography } from "@mui/material";
import React from "react";

const OurClientsSays = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#f4f4f4"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Box>
          <Typography color="#000000">Our Clients Say</Typography>
          <Typography color="#7a7a7a">
            "The best marketing of all is happy clients" - Susan Stripling
            #Marketing
          </Typography>
        </Box>
        <Box display={"flex"} gap={"40px"}>
          <Box boxShadow={"0px 0px 10px 0px #c1c1c1"} width={"33.333%"}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurClientsSays;
