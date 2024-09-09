import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import BlackLaptop from "@/assets/Black-laptop-image.png";
import WhiteShirt from "@/assets/WhiteShirt2.png";
const FreeItAssessment = () => {
  return (
    <Box
      zIndex={"200"}
      bgcolor={"#ffffff"}
      position={"relative"}
      width={"100%"}
      display={"flex"}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(80deg, #61ce70 0%, #006838 100%)",
      }}
    >
      <Box
        width={"50%"}
        height={"522.91px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src={WhiteShirt}
          alt="White Shirt Image"
          style={{ width: "auto", height: "100%" }}
        />
      </Box>
      <Box
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"20px"}
      >
        <Typography
          variant="h1"
          fontSize={"65px"}
          fontWeight={"bold"}
          color="#ffffff"
          lineHeight={"1.4em"}
          // marginBottom={"20px"}
        >
          Free IT Assessment
        </Typography>
        <Typography
          variant="h2"
          fontSize={"16px"}
          fontWeight={"400"}
          color="#ffffff"
          lineHeight={"1.3em"}
        >
          Find out how your buisness IT is doing. Absolutly free and with no
          commitment.
        </Typography>
        <Button
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "1.4em",
            letterSpacing: "1px",
            boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
            padding: "15px",
            bgcolor: "#ffffff !important",
            color: "#61ce70",
          }}
        >
          REQUEST NOW
        </Button>
      </Box>
    </Box>
  );
};

export default FreeItAssessment;
