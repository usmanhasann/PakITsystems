"use client";

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import image1 from "@/assets/nextiva.svg";
import image2 from "@/assets/google cloud platform.png";
import image3 from "@/assets/Backupify-logo1.png";
import image4 from "@/assets/Dell-partner.png";
import image5 from "@/assets/cisco partner.png";
import image6 from "@/assets/jamf msp.png";
import image7 from "@/assets/microsoft partner.jpeg";
import image8 from "@/assets/bitdefender.jpg";
import image9 from "@/assets/carbonite authorized reseller.png";
import image10 from "@/assets/meraki authorized reseller.gif";
// import image11 from "@/assets/download.png";

// Importing the image sources as an array
const imageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  // image11,
];

const ImagesSlider = () => {
  return (
    <Box
      width={"100%"}
      position={"relative"}
      bgcolor={"#ffffff"}
      zIndex={"120px"}
      padding={"50px"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box display="flex" overflow="hidden" width="80%">
        {/* Wrapper for sliding images */}
        <Box
          width={"100%"}
          display="flex"
          //   bgcolor={"red"}
          alignItems={"center"}
          gap={"10px"}
          sx={{
            width: `${imageUrls.length * 100}px`,
            animation: `slide 40s linear infinite`, // Animation for continuous sliding
          }}
        >
          {/* Map over the images twice to create an infinite loop effect */}
          {[...imageUrls, ...imageUrls].map((img, index) => (
            <Box
              key={index}
              sx={{
                width: "auto",
                height: "auto",
                flexShrink: 0,
              }}
            >
              <Image
                src={img.src}
                alt={`Image ${index + 1}`}
                width={130}
                height={100}
                style={{ objectFit: "cover", width: "auto", height: "auto" }}
              />
            </Box>
          ))}
        </Box>

        {/* Add inline CSS for animation */}
        <style jsx>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${imageUrls.length * 130}px);
            }
          }
        `}</style>
      </Box>
    </Box>
  );
};

export default ImagesSlider;
