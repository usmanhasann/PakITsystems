import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {
  FaWrench,
  FaPhone,
  FaCloud,
  FaCloudDownloadAlt,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <SettingsSuggestIcon sx={{ fontSize: "50px", color: "#3644af" }} />,
    title: "IT OUTSOURCING",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quis doloremque odit assumenda eos amet dolor at! Voluptas ab sapiente, dignissimos reiciendis eius ipsam sed cumque, rem et autem officiis?",
  },
  {
    id: 2,
    icon: <FaWrench style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "BREAK / FIX",
    description:
      "Providing efficient maintenance services to keep your systems up and running at all times. Trust us with your infrastructure management.",
  },
  {
    id: 3,
    icon: <FaPhone style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "HELPDESK",
    description:
      "24/7 technical support to resolve any issues swiftly. Our expert team is always here to help whenever you need assistance.",
  },
  {
    id: 4,
    icon: <FaCloud style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "CLOUD SERVICES",
    description:
      "Cloud storage and computing solutions tailored to your business needs. Secure and scalable options for modern businesses.",
  },
  {
    id: 5,
    icon: <FaCloudDownloadAlt style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "DISASTER RECOVERY",
    description:
      "Effortless deployment of software solutions, ensuring that everything works smoothly across all devices and platforms.",
  },
  {
    id: 6,
    icon: <FaLock style={{ fontSize: "50px", color: "#3644af" }} />,
    title: "MANAGED SECURITY",
    description:
      "Advanced security measures to safeguard your data and systems. Protect your business from emerging threats.",
  },
];

const OurServices = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"120"}
      bgcolor={"#ffffff"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"50px"}
      padding={"150px 0 50px 0"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          fontSize={"52px"}
          color="#000000"
          fontWeight={"bold"}
          lineHeight={"1.4em"}
        >
          Our Services
        </Typography>
      </Box>
      <Box
        width={"75%"}
        display={"flex"}
        flexWrap={"wrap"}
        // alignItems={"center"}
        justifyContent={"center"}
        // bgcolor={"red"}
        gap={"10px"}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            width={"320px"}
            // height={"357px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            padding={"40px"}
            // bgcolor={"red"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              {service.icon}
            </Box>
            <Typography
              fontSize={"24px"}
              fontWeight={"900"}
              color="#000000"
              lineHeight={"1.4em"}
              textAlign={"center"}
            >
              {" "}
              {service.title}
            </Typography>
            <Typography
              fontSize={"14px"}
              fontWeight={"400"}
              color="#7a7a7a"
              textAlign={"center"}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurServices;
