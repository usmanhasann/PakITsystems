"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

export const FreeItAssessmentDropD = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"515px"}
        zIndex={190}
        position={"relative"}
        bgcolor={"#fff"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box width={"83%"}>
          <Typography
            paddingTop={"9%"}
            color="#000000"
            fontWeight={600}
            fontSize={"33px"}
            lineHeight={"33px"}
            sx={{
              "@media(max-width:1290px)": {
                fontSize: "31px",
              },
              "@media(max-width:1070px)": {
                fontSize: "29px",
              },
              "@media(max-width:1010px)": {
                fontSize: "27px",
              },
              "@media(max-width:950px)": {
                fontSize: "25px",
              },
              "@media(max-width:890px)": {
                fontSize: "22px",
              },
            }}
          >
            Is your technology helping you move your business forward or
          </Typography>
          <Typography
            fontSize={"59px"}
            fontWeight={600}
            lineHeight={"59px"}
            color="#FF0000DB"
            paddingTop={"15px"}
            sx={{
              "@media(max-width:1290px)": {
                fontSize: "55px",
              },
              "@media(max-width:1160px)": {
                fontSize: "48px",
              },
              "@media(max-width:1010px)": {
                fontSize: "45px",
              },
              "@media(max-width:950px)": {
                fontSize: "42px",
              },
              "@media(max-width:890px)": {
                fontSize: "39px",
              },
            }}
          >
            is it holding you back?
          </Typography>
          <Box>
            <Typography
              fontSize={"15px"}
              color="#7A7A7A"
              paddingTop={"35px"}
              lineHeight={"28px"}
              sx={{
                "@media(max-width:1290px)": {
                  fontSize: "14px",
                },
                "@media(max-width:1070px)": {
                  fontSize: "13px",
                },
                "@media(max-width:950px)": {
                  fontSize: "12px",
                },
              }}
            >
              When your technology is not properly designed and managed, it can
              not only slow down, but also become a liability to your business.
              Without a good understanding of the overall state of your
              technology, it becomes very hard to know how to wisely invest your
              limited IT budget.
            </Typography>
            <Typography
              fontSize={"15px"}
              color="#7A7A7A"
              paddingTop={"40px"}
              sx={{
                "@media(max-width:1290px)": {
                  fontSize: "14px",
                },
                "@media(max-width:1070px)": {
                  fontSize: "13px",
                },
                "@media(max-width:950px)": {
                  fontSize: "12px",
                },
              }}
            >
              We will come to your office and conduct an in-depth assessment of
              your IT assets and infrastructure using our non-invasive analysis
              tool. Once we complete your assessment we will present you with a
              report that will show the current state of your technology as well
              as recommendations for improvement.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            width={"50"}
            // bgcolor={"red"}
            // height={"50px"}
            marginTop={"6%"}
            // color={"#3444AF"}
          >
            <Box
              height={"30px"}
              width={"30px"}
              sx={{
                "&:hover svg": {
                  color: "red !important", // Hover effect directly on the icon
                },
              }}
            >
              <FaAngleDown
                // className="down-icon"
                style={{
                  fontWeight: "bold",
                  fontSize: "39px",
                  color: "#3444AF",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FreeItAssessmentDropD;
