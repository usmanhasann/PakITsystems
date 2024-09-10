import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import BlackLaptop from "@/assets/laptop-image.png";

const Break_fix = () => {
  return (
    <Box
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
      width={"100%"}
      height={"auto"}
      color={"black"}
      padding={"250px 0 160px 0"}
      display={"flex"}
      marginTop={"-2px"}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(7deg, #d6d6d6 76%, #ffffff 76%)",
      }}
    >
      <Box
        width={"50%"}
        padding={"200px 0 200px 200px"}
        display={"flex"}
        flexDirection={"column"}
        //   justifyContent={"flex-start"}
        gap={"20px"}
        alignItems={"flex-start"}
      >
        <Typography
          color="#000000"
          fontSize={"52px"}
          lineHeight={"70px"}
          fontWeight={"bold"}
        >
          Break / Fix
        </Typography>
        <Box>
          <Typography
            color="#7a7a7a"
            fontSize={"16px"}
            lineHeight={"1.2em"}
            fontWeight={"700"}
          >
            Not ready to fully outsource your IT?
          </Typography>
          <Typography
            color="#7a7a7a"
            fontSize={"16px"}
            lineHeight={"1.2em"}
            fontWeight={"400"}
          >
            No Problem! We can help as needed on issues and projects on a
            Break/Fix arrangement.
          </Typography>
        </Box>

        <Button
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "1.4em",
            letterSpacing: "1px",
            boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
            padding: "15px",
            bgcolor: "#3644af !important",
            color: "#ffffff",
          }}
        >
          LEARN WORK
        </Button>
      </Box>
      <Box width={"50%"} height={"645px"}>
        <Image
          src={BlackLaptop}
          alt="Black Laptop Image"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Break_fix;
