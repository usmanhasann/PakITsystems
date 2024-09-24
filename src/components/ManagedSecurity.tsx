import React from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import Image from "next/image";
import manageSecurity from "@/assets/manageSecurityMain.jpeg";

type ManagedSecurity = {
  content: string[];
};
const managedSecurity: ManagedSecurity[] = [
  {
    content: [
      `Do all your devices have antivirus protection? Is the antivirus up to date? Are your computers scanned regularly? Do you have different antivirus subscriptions expiring at different times? Do you waste valuable time with antivirus renewals?`,
      `Get peace of mind with our Managed Antivirus service. We will make sure all of your computers are properly protected and secured for you. Plus, your antivirus will never expire so you don’t have to worry or spend time with antivirus renewals.`,
      `On top of all that, when the antivirus detects a presence of malware on your computers, we will be notified immediately and take the appropriate actions to keep your computers clean and your business safe.`,
    ],
  },
];

export const ManagedSecurity = () => {
  return (
    <Box
      position={"relative"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      padding={{ xs: "50px 0px", md: "100px 0px 220px 0px" }}
      bgcolor={"white"}
    >
      <Box
        width={{ xs: "95%", md: "90%" }}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Box width={{ xs: "100%", md: "40%" }}>
          <Typography
            color="#000000"
            fontSize={{ xs: "32px", md: "52px" }}
            lineHeight={"1.2"}
            fontWeight={"bold"}
            padding={{ xs: "20px 0px", md: "25px 0px 32px 7%" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            Managed Security
          </Typography>
          {managedSecurity.map((section, index) => (
            <Box key={index} mb={4}>
              <List
                sx={{ marginLeft: { xs: "0", md: "35px" }, marginTop: "-34px" }}
              >
                {section.content.map((item, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      display: "list-item",
                      fontSize: "16px",
                      fontWeight: "400",
                      paddingLeft: 0,
                      color: "#7A7A7A",
                      lineHeight: "1.9em",
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
          <Box width={"100%"}>
            <Typography
              fontSize={{ xs: "20px", md: "28px" }}
              color="#3444af"
              marginLeft={{ xs: "0", md: "7%" }}
              textAlign={{ xs: "center", md: "left" }}
              fontWeight={"bold"}
            >
              Contact us today to learn more about how your business can benefit
              from our Managed Security service.
            </Typography>
            <Button
              sx={{
                padding: "15px",
                marginTop: "5%",
                marginLeft: { xs: "0", md: "9%" },
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "400",
                color: "#000000",
                backgroundColor: "#ffffff",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.5)",
                display: "block",
                marginX: { xs: "auto", md: "initial" },
              }}
            >
              CLICK HERE
            </Button>
          </Box>
        </Box>
        <Box width={{ xs: "100%", md: "60%" }} mt={{ xs: "20px", md: "0" }}>
          <Box width={"100%"} textAlign={{ xs: "center", md: "left" }}>
            <Image
              src={manageSecurity}
              alt="Cloud Services Main"
              style={{ width: "90%", height: "auto", margin: "0 auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ManagedSecurity;
