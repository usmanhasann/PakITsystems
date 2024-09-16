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
      "Do you have to check the same email messages on your desktop, laptop and mobile device? Do you send an email from your laptop and don’t have it on your desktop when you need it? What if you could see your mailbox the same way whether you are looking at it from the browser, desktop, laptop of mobile device? With Exchange email you can. Read a message, in one device it will be marked as read on all your devices. Deleted a message in one device and it will be deleted on all of your devices. No more doing the same work on multiple devices. Not only will you be able to sync your mailbox, but also your calendar and contacts. View all your important data the same way across all of your devices. Need to share your calendar with your staff? No problem. We can take care of that too.",
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
      padding={"100px 0px 100px 0px"}
      bgcolor={"white"}
    >
      <Box width={"90%"} display={"flex"} alignItems={"flex-start"}>
        <Box width={"50%"}>
          <Typography
            color="#000000"
            fontSize={"52px"}
            fontWeight={"bold"}
            padding={"60px 0px 32px 11px"}
          >
            Managed Security
          </Typography>
          {managedSecurity.map((section, index) => (
            <Box key={index} mb={4}>
              {/* Section Heading */}
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  color: "#000000DB",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginLeft: "20px",
                }}
              >
                {/* {index + 1}. */}
                {/* {section.title} */}
              </Typography>

              {/* Section Content */}
              <List sx={{ marginLeft: "40px" }}>
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
          <Box width={"80%"}>
            <Typography
              fontSize={"30px"}
              color="#3444af"
              padding={"0px 0px 0px 45px"}
              fontWeight={"800"}
            >
              Contact us today to find out more about how your business can
              benefit from our cloud services.
            </Typography>
            <Button
              sx={{
                padding: "15px",
                fontSize: "13px",

                letterSpacing: "1px",
                height: "",
                fontWeight: "400",
                color: "#000000",
                backgroundColor: "#ffffff",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.5)",
              }}
            >
              CLICK HERE
            </Button>
          </Box>
        </Box>
        <Box width={"50%"}>
          <Box width={"100%"}>
            <Image
              src={manageSecurity}
              alt="Cloud Services Main"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ManagedSecurity;
