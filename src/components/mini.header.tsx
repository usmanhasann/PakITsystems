"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const miniheader = () => {
  return (
    <Box
      width={"100%"}
      height={"45px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#262a2b"}
      sx={{
        "@media (max-width:450px)": {
          display: "none",
        },
      }}
    >
      <Box
        width={"98%"}
        display={"flex"}
        justifyContent={"space-between"}
        overflow="hidden"
      >
        <Box display={"flex"} gap={"28px"} className="slider">
          <Typography
            display={"flex"}
            gap={"8px"}
            alignItems={"center"}
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#ffffff"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                "& .icon": {
                  fill: "#fff",
                  fontSize: "16px",
                },
              },
            }}
          >
            <PhoneEnabledIcon
              className="icon"
              sx={{
                fill: "#fff",
                fontSize: "16px",
              }}
            />
            +1 (972) 693-8786 - 2180 Nottoway Dr Hanover, MD 21076
          </Typography>
          {/* Uncomment this section if you want to include it */}
          {/* <Typography
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#ffffff"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                "& .icon": {
                  fill: "#fff",
                  fontSize: "16px",
                },
              },
            }}
          >
            <PhoneEnabledIcon
              className="icon"
              sx={{ color: "#3644af", fontSize: "16px" }}
            />
            (407) 537-9425 - Florida
          </Typography> */}
        </Box>
        <Box display={"flex"}>
          <Box
            height={"44.8px"}
            width={"44.8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#3644af",
                "& .icon": {
                  fill: "#fff",
                },
              },
            }}
          >
            <FaFacebookF className="icon" style={{ color: "#fff" }} />
          </Box>
          <Box
            height={"44.8px"}
            width={"44.8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#3644af",
                "& .icon": {
                  fill: "#fff",
                },
              },
            }}
          >
            <FaTwitter className="icon" style={{ color: "#fff" }} />
          </Box>
        </Box>
      </Box>
      <style jsx>{`
        .slider {
          display: flex;
          flex-direction: row;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default miniheader;
