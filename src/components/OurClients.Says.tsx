import { Box, Button, Typography } from "@mui/material";

import React from "react";
const clientsData = [
  {
    textComa: " ❞ ",
    description:
      "2019 was an incredibly pivotal year fro Manna. You and your team are key reasons we are thrivin. Here to more Progress together.",
    clientName: "JACKIE DECARLO",
    jobTitle: "CEO",
    placeName: "Manna Food Center",
  },
  {
    textComa: " ❞ ",
    description:
      "2019 was an incredibly pivotal year fro Manna. You and your team are key reasons we are thrivin. Here to more Progress together.",
    clientName: "JACKIE DECARLO",
    jobTitle: "CEO",
    placeName: "Manna Food Center",
  },
  {
    textComa: " ❞ ",
    description:
      "2019 was an incredibly pivotal year fro Manna. You and your team are key reasons we are thrivin. Here to more Progress together.",
    clientName: "JACKIE DECARLO",
    jobTitle: "CEO",
    placeName: "Manna Food Center",
  },
];
const OurClientsSays = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"120"}
      bgcolor={"#ffffff"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#f4f4f4"}
        padding={"5% 0"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
          // bgcolor={"aqua"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            "@media (max-width:350px)": {
              width: "100%",
              padding: "0 2.5%",
            },
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            paddingBottom={"40px"}
            sx={{
              "@media (max-width:768px)": {
                padding: "30px 3%",
              },
            }}
          >
            <Typography
              variant="h1"
              color="#000000"
              textAlign={"center"}
              fontSize={"52px"}
              fontWeight={"bold"}
              whiteSpace={"pre"}
              sx={{
                "@media (max-width:1024px)": {
                  fontSize: "44px",
                },
                "@media (max-width:768px)": {
                  fontSize: "36px",
                },
              }}
            >
              Our Clients Say
            </Typography>
            <Typography
              variant="h2"
              color="#7a7a7a"
              textAlign={"center"}
              fontSize={"16px"}
              fontWeight={"400"}
            >
              "The best marketing of all is happy clients" - Susan Stripling
              #Marketing
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            width={"55%"}
            // bgcolor={"red"}
            sx={{
              "@media (max-width:1420px)": {
                width: "70%",
              },
              "@media (max-width:1024px)": {
                width: "80%",
              },
              "@media (max-width:924px)": {
                width: "95%",
              },
              "@media (max-width:768px)": {
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            {clientsData.map((clientsData, index) => (
              <Box
                boxShadow={"0px 0px 10px 0px #c1c1c1"}
                // bgcolor={"green"}
                key={index}
                width={"33.333%"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                padding={"40px 20px"}
                sx={{
                  "@media (max-width:1420px)": {
                    padding: "40px 15px",
                    gap: "10px",
                  },
                  "@media (max-width:768px)": {
                    width: "250px",
                  },
                  "@media (max-width:547px)": {
                    width: "260px",
                  },
                  "@media (max-width:300px)": {
                    width: "100%",
                  },
                }}
              >
                <Typography
                  color={"#3644af"}
                  fontSize={"80px"}
                  textAlign={"center"}
                  margin={"0"}
                  lineHeight={"1em"}
                >
                  {clientsData.textComa}
                </Typography>
                <Typography
                  color={"#7a7a7a"}
                  fontSize={"17px"}
                  fontWeight={"400"}
                  fontStyle={"italic"}
                  lineHeight={"1.2em"}
                  textAlign={"center"}
                >
                  {clientsData.description}
                </Typography>
                <Typography
                  color={"#000000"}
                  textAlign={"center"}
                  fontSize={"18px"}
                  textTransform={"uppercase"}
                  fontStyle={"normal"}
                >
                  {clientsData.clientName}
                </Typography>
                <Box>
                  <Typography
                    color={"#7a7a7a"}
                    fontSize={"13px"}
                    lineHeight={"1.3em"}
                    fontStyle={"normal"}
                    textAlign={"center"}
                  >
                    {clientsData.jobTitle}
                  </Typography>
                  <Typography
                    color={"#7a7a7a"}
                    fontSize={"13px"}
                    lineHeight={"1.3em"}
                    fontStyle={"normal"}
                    textAlign={"center"}
                  >
                    {clientsData.placeName}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                fontStretch: "normal",
                lineHeight: "1.4em",
                letterSpacing: "1.3px",
                padding: "15px",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
                bgcolor: "#3644af !important",
                color: "#fff",

                "@media (max-width:350px)": {
                  fontSize: "10px",
                  padding: "12px",
                  letterSpacing: "0.5px",
                },
              }}
            >
              SEE WHAT OTHER CUSTOMER HAVE TO SAY
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurClientsSays;
