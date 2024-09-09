import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ItImage from "@/assets/It-outsourcing-image.jpeg";

const ITOutsourcingBreakFix = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      zIndex={"100"}
      bgcolor={"#ffffff"}
      position={"relative"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box width={"50%"} padding={"0 2.5% 0 2.5%"}>
          <Image
            src={ItImage}
            alt="It outsourcing image"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          width={"50%"}
          padding={"0 10% 0 0"}
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
            IT Outsourcing
          </Typography>
          <Typography
            color="#7a7a7a"
            fontSize={"16px"}
            lineHeight={"1.2em"}
            fontWeight={"400"}
          >
            Let out IT worry about your technology so you can focus on growing
            your buisness. We will take care of all your IT needs for a low flat
            monthly fee. You will finally be able to budget your IT expenses and
            have peace of mind with our world class service.
          </Typography>
          <Button
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "1.4em",
              letterSpacing: "1px",
              boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
              padding: "15px",
              bgcolor: "#61ce70 !important",
              color: "#ffffff",
            }}
          >
            LEARN WORK
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ITOutsourcingBreakFix;
