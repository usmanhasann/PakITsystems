import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ItImage from "@/assets/It-outsourcing-image.jpeg";
import BlackLaptop from "@/assets/Black-laptop-image.png";
import WhiteShirt from "@/assets/WhiteShirt2.png";

const ITOutsourcingBreakFix = () => {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"}>
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
      <Box
        width={"100%"}
        height={"auto"}
        color={"black"}
        padding={"250px 0 160px 0"}
        display={"flex"}
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
              bgcolor: "#61ce70 !important",
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
      <Box
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
    </Box>
  );
};

export default ITOutsourcingBreakFix;
