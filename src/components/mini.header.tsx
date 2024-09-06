import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const miniheader = () => {
  return (
    <Box
      width={"100%"}
      height={"45px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#262a2b"}
      padding={"0 20px 0 20px"}
    >
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"28px"}>
          <Typography
            display={"flex"}
            gap={"8px"}
            alignItems={"center"}
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#ffffff"}
          >
            {" "}
            <PhoneEnabledIcon
              sx={{
                fill: "rgba(35, 164, 85, 0.86)",
                width: "14px",
                height: "14px",
              }}
            />
            (301) 363-2823 - Washington DC Metro Area
          </Typography>
          <Typography
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#ffffff"}
          >
            {" "}
            <PhoneEnabledIcon
              sx={{ color: "rgba(35, 164, 85, 0.86)", fontSize: "14px" }}
            />
            (407) 537-9425 - Florida
          </Typography>
        </Box>
        <Box display={"flex"}>
          <Box
            height={"44.8px"}
            width={"44.8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            // bgcolor={"green"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#006838",
              },
            }}
          >
            <FaFacebookF style={{ color: "#61ce70" }} />
          </Box>
          <Box
            height={"44.8px"}
            width={"44.8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            // bgcolor={"green"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#006838",
              },
            }}
          >
            {" "}
            <FaTwitter style={{ color: "#61ce70" }} />{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default miniheader;
