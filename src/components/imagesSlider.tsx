"use client";

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import image1 from "@/assets/slide-image-1.svg";
import image2 from "@/assets/slide-image-2.svg";
import image3 from "@/assets/slide-image-3.svg";
import image4 from "@/assets/slide-image-4.svg";
import image5 from "@/assets/slide-image-5.svg";
import image6 from "@/assets/slide-image-6.svg";
import image7 from "@/assets/slide-image-7.svg";
import image8 from "@/assets/slide-image-8.svg";
import image9 from "@/assets/slide-image-9.svg";
import image10 from "@/assets/slide-image-10.svg";
import image11 from "@/assets/slide-image-11.svg";
import image12 from "@/assets/slide-image-12.svg";
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
  image11,
  image12,
];

const ImagesSlider = () => {
  return (
    <Box
      width={"100%"}
      position={"relative"}
      bgcolor={"#ffffff"}
      zIndex={"120"}
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
          gap={"20px"}
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
                width: "130px",
                height: "auto",
                flexShrink: 0,
              }}
            >
              <Image
                src={img.src}
                alt={`Image ${index + 1}`}
                width={130}
                height={100}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
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
