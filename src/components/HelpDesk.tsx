import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import BlackLaptop from "@/assets/laptop-image.png";
export const HelpDesk = () => {
  return (
    <>
      <Box
        width={"100%"}
        zIndex={120}
        position={"relative"}
        bgcolor={"#d6d6d6"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            "@media(max-width:375px)": {
              display: "flex",
              justifyConten: "center",
              flexDirection: "column",
            },

            "@media(max-width:425px)": {
              display: "flex",
              justifyConten: "center",
              flexDirection: "column",
            },
          }}
        >
          <Box
            width={"50%"}
            display={"flex"}
            marginBottom={"12%"}
            justifyContent={"center"}
            flexDirection={"column"}
            padding={"70px 50px 100px 100px"}
            sx={{
              "@media(max-width:375px)": {
                width: "100%",
                padding: "20px 10px",
              },
            }}
          >
            <Typography
              paddingTop={"2%"}
              color="rgb(0,0,0)"
              fontWeight={"700"}
              fontSize={"52px"}
              lineHeight={"52px"}
              sx={{
                "@media(max-width:375px)": {
                  fontSize: "7vh",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "23%",
                  fontWeight: "bold",
                },
              }}
            >
              HELP DESK
            </Typography>
            <Typography
              fontSize={"16px"}
              fontWeight={"400"}
              paddingTop={"4%"}
              color={"rgb(122,122,122)"}
              lineHeight={"30px"}
              sx={{
                "@media(max-width:375px)": {
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                  width: "95%",
                  padding: "12px 19px 19px 19px",
                  lineHeight: "20px",
                  fontSize: "13px",
                },
              }}
            >
              Whether you contact our helpdesk by phone, email, customer portal
              or sms one of our highly trained techs will get back to you in no
              time and take care of your issue right away. We will track your
              issue in our advanced ticketing system and follow up with you
              until you are completely satisfied with the resolution to your
              problem.
            </Typography>
            <Typography
              fontWeight={"700"}
              fontSize={"30px"}
              paddingTop={"8%"}
              lineHeight={"30px"}
              color={"#3444af"}
              sx={{
                "@media(max-width:375px)": {
                  paddingTop: "10%",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "7vh",
                  paddingLeft: "42%",
                  width: "45%",
                },
              }}
            >
              Managed Services
            </Typography>
            <Typography
              fontSize={"16px"}
              lineHeight={"30px"}
              paddingTop={"4%"}
              color={"rgb(122,122,122)"}
              fontWeight={"400"}
              sx={{
                "@media(max-width:375px)": {
                  paddingTop: "9%",
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                  fontSize: "13px",
                  width: "90%",
                },
              }}
            >
              Our Managed Services customers take full advantage of our helpdesk
              and make it their own. They get access to our customer portal
              where they can create and update tickets, track projects, review
              recommendations, run reports and much more.
            </Typography>
            <Button
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "1.4em",
                letterSpacing: "1px",
                marginTop: "5%",
                boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                bgcolor: "#ffffff !important",
                color: "#3444af",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                "@media(max-width:375px)": {
                  marginTop: "20px",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Box>
          <Box
            width={"50%"}
            paddingTop={"4%"}
            sx={{
              "@media(max-width:375px)": {
                width: "95%",
                marginTop: "20%",
                marginLeft: "4%",
              },
            }}
          >
            <Image
              src={BlackLaptop}
              alt="Black Laptop Image"
              className="Laptop-image"
              style={{ width: "100%", height: "62%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HelpDesk;
