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
      // padding={"0 1%"}
    >
      <Box width={"98%"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"28px"}>
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
            {" "}
            <PhoneEnabledIcon
              className="icon"
              sx={{
                fill: "#3644af",
                fontSize: "16px",
              }}
            />
            +1 (972) 693-8786 - 2180 Nottoway Dr Hanover, MD 21076
          </Typography>
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
            {" "}
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
            // bgcolor={"green"}
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
            <FaFacebookF className="icon" style={{ color: "#3644af" }} />
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
                bgcolor: "#3644af",
                "& .icon": {
                  fill: "#fff",
                },
              },
            }}
          >
            {" "}
            <FaTwitter className="icon" style={{ color: "#3644af" }} />{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default miniheader;
