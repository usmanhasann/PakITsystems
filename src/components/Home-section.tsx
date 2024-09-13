"use client"; // Ensures it's a Client Component

import React from "react";
import { Box, Typography } from "@mui/material";
import HomeMainImage from "../assets/HomePageMainImage.jpeg";
import OurServicesImage from "@/assets/OurServicesImage.jpeg";
import AboutImage from "@/assets/AboutMainImage.jpeg";
import ContactImage from "@/assets/ContactMainImage.jpeg";
import OutsourcingImage from "@/assets/ITOutsourcingMainImage.jpeg";
import WhyUsImage from "@/assets/WhyUsMainPage.jpeg";
import TestimonalsImage from "@/assets/TestimonialsMainImage.jpeg";
import BreakFiximage from "@/assets/BreakFixMainImage.jpeg";
import HelpDeskimage from "@/assets/HelpDeskMainImage.jpeg";
import { usePathname } from "next/navigation";

const Homesection: React.FC = () => {
  const pathname = usePathname();

  const content = {
    "/": {
      image: HomeMainImage.src,
      text: "Because your technology should JUST WORK",
    },
    "/services": {
      image: OurServicesImage.src,
      text: "Our services",
    },
    "/about": {
      image: AboutImage.src,
      text: "About us",
    },
    "/contact": {
      image: ContactImage.src,
      text: "Contact us",
    },
    "/outsourcing": {
      image: OutsourcingImage.src,
      text: "IT Outsourcing",
    },
    "/whyus": {
      image: WhyUsImage.src,
      text: "Why Us",
    },
    "/testimonials": {
      image: TestimonalsImage.src,
      text: "Testimonials",
    },
    "/breakfix": {
      image: BreakFiximage.src,
      text: "Break/Fix",
    },
    "/helpdesk": {
      image: HelpDeskimage.src,
      text: "Help Desk",
    },
  };

  const currentContent =
    content[pathname as keyof typeof content] || content["/"];

  return (
    <Box width="100%" height="58vh" position={"relative"}>
      <Box
        width="100%"
        height="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "fixed",
          backgroundImage: `url(${currentContent.image})`,
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
            justifyContent: "center",
            gap: "10px",
            width: "90%",
          }}
        >
          {/* Static Text */}
          <Typography
            component="span"
            sx={{
              fontSize: "55px",
              color: "#ffffff",
              fontWeight: "600",
              textAlign: "center",
              "@media (max-width:815px)": {
                fontSize: "40px",
              },
              "@media (max-width:450px)": {
                fontSize: "36px",
              },
            }}
          >
            {currentContent.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Homesection;
