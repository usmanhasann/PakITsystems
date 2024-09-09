"use client"; // Ensures it's a Client Component

import React from "react";
import { Box, Typography } from "@mui/material";
import HomeMainImage from "../assets/HomePageMainImage.jpeg";
import OurServicesImage from "@/assets/OurServicesImage.jpeg";

const Homesection: React.FC = () => {
  return (
    <Box width="100%" height="58vh" position={"relative"}>
      <Box
        // position={"fixed"}
        width="100%"
        height="58vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "fixed",
          backgroundImage: `url(${HomeMainImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          zIndex: "0",
        }}
      >
        {/* Overlay */}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 200,
        }}
      >
        {/* Text and Animated Line */}
        <Box
          sx={{
            position: "relative",
            zIndex: 220, // Text and animation above overlay
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Static Text */}

          <Typography
            component="span"
            style={{
              fontSize: "55px",
              color: "#ffffff",
              fontWeight: "700",
            }}
          >
            Because your technology should
          </Typography>

          <Typography
            component="span"
            style={{
              fontSize: "55px",
              color: "#61ce70",
              fontWeight: "700",
            }}
          >
            JUST WORK
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Homesection;
