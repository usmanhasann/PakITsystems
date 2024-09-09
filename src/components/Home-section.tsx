"use client"; // Ensures it's a Client Component

import React from "react";
import { Box, Typography } from "@mui/material";
import HomeMainImage from "../assets/HomePageMainImage.jpeg";

const Homesection: React.FC = () => {
  return (
    <Box
      width="100%"
      height="58vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "relative",
        backgroundImage: `url(${HomeMainImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Text and Animated Line */}
      <Box
        sx={{
          zIndex: 2, // Text and animation above overlay
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

        {/* SVG Animated Line */}
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 10"
            style={{
              position: "absolute",
              bottom: "-5px", // Positioned under the text
              left: "0",
              right: "0",
              margin: "auto",
              width: "100%",
              height: "10px",
            }}
          >
            <path
              d="M 0 5 Q 100 15 200 5"
              style={{
                stroke: "green", // Line color (red)
                strokeWidth: "4",
                fill: "none",
                strokeDasharray: "300", // Line length
                strokeDashoffset: "300", // Line starts hidden
                animation: "lineAnimation 3s ease-in-out infinite", // Loop the animation
              }}
            />
          </svg> */}
      </Box>
    </Box>
  );
};

export default Homesection;
