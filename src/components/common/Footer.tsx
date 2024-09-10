"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo from "@/assets/footer logo.jpg";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const serviceData = [
  { ServiceName: "IT Outsourcing" },
  { ServiceName: "Break / Fix" },
  { ServiceName: "Help Disk" },
  { ServiceName: "Cloud Services" },
  { ServiceName: "Managed Security" },
  { ServiceName: "Disaster Recovery" },
  { ServiceName: "Free IT Assessment" },
];
const aboutData = [
  { aboutName: "About" },
  { aboutName: "Why Us" },
  { aboutName: "Testimonals" },
];
const supportData = [
  { suportName: "Customer Login" },
  { suportName: "Remote Support" },
];

export const Footer = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"1280"}
      bgcolor={"#000000"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      fontSize={"15px"}
      fontFamily={"sans-serif"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        // padding={"50px 20px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"71%"}
          bgcolor={"black"}
          alignItems={"center"}
          padding={"50px 0"}
        >
          <Box
            display={"inline-block"}
            // width={"67"}
            // height={"67px"}
            padding={"10px"}
            fontSize={"15px"}
            fontFamily={"sans-serif"}
          >
            <Image src={Logo} alt="webLogo" />
          </Box>
          <Box padding={"10px"}>
            <Typography
              fontSize={"23px"}
              fontWeight={"600"}
              fontFamily={"sans-serif"}
              //   padding={"15px"}
              fontStyle={"italic"}
            >
              Because your technology should just work
            </Typography>
          </Box>
        </Box>

        <Box
          bgcolor={"black"}
          //   padding={"25px 25px 50px 25px"}
          display={"flex"}
          justifyContent={"center"}
          width={"71%"}
          gap={"20px"}
          padding={"25px 0 70px 0"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            width={"275px"}
          >
            <Typography
              paddingLeft={"5px"}
              fontSize={"18px"}
              color="#ffffff"
              fontWeight={"500"}
            >
              Our Services
            </Typography>
            {serviceData.map((serviceData, index) => (
              <Box
                key={index}
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <ChevronRightIcon sx={{ height: "18px", width: "18px" }} />
                <Typography
                  color="#ffffff99"
                  fontSize={"13px"}
                  fontWeight={"300"}
                >
                  {serviceData.ServiceName}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            width={"275px"}
          >
            <Typography
              paddingLeft={"5px"}
              fontSize={"18px"}
              color="#ffffff"
              fontWeight={"500"}
            >
              About
            </Typography>
            {aboutData.map((aboutData, index) => (
              <Box
                key={index}
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <ChevronRightIcon sx={{ height: "18px", width: "18px" }} />
                <Typography
                  color="#ffffff99"
                  fontSize={"13px"}
                  fontWeight={"300"}
                >
                  {aboutData.aboutName}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            width={"275px"}
          >
            <Typography
              paddingLeft={"5px"}
              fontSize={"18px"}
              color="#ffffff"
              fontWeight={"500"}
            >
              Support
            </Typography>
            {supportData.map((supportData, index) => (
              <Box
                key={index}
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <ChevronRightIcon sx={{ height: "18px", width: "18px" }} />
                <Typography
                  color="#ffffff99"
                  fontSize={"13px"}
                  fontWeight={"300"}
                >
                  {supportData.suportName}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            width={"275px"}
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
          >
            <Button
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#3444af",
                borderRadius: "5px",
                padding: "15px 35px",
              }}
            >
              Contact us
            </Button>
          </Box>
        </Box>
      </Box>

      {/*  privacy sec */}
      <Box
        width={"100%"}
        height={"59px"}
        bgcolor={"#3a3a3a"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          width={"71%"}
          height={"59px"}
          bgcolor={"#3a3a3a"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              fontSize={"14px"}
              color="#ffffff5e"
              fontWeight={"300"}
              fontStyle={"normal"}
            >
              HMBTECH © 2024 All Rights Reserved{" "}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            <FaFacebookF style={{ color: "#ffffff63" }} />
            <FaTwitter style={{ color: "#ffffff63" }} />
          </Box>
          <Box>
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                bgcolor: "#61ce7000",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#fff",
                padding: "7px",
                color: "#ffffff",
                fontStyle: "italic",
              }}
            >
              Privacy policy
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
