import React from "react";
import { Box, Typography } from "@mui/material";
const Aboutcontenttext = () => {
  return (
    <Box
      width={"100%"}
      padding={"60px 0"}
      position={"relative"}
      zIndex={190}
      bgcolor={"#fff"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"29px"}
      >
        <Typography display={"flex"} color="#a3a3a3">
          PAKIT SYSTEM is a family owned and operated computer services business
          serving the Washington DC metropolitan area since 2004. Our
          technicians are Microsoft certified and are held to the highest
          standards of service and integrity.
        </Typography>
        <Typography color="#a3a3a3">
          We specialize in fully managing all aspects of IT for small and
          mid-size businesses. We can also help as needed with specific issues
          and projects. Our managed services are billed as flat fee and our
          break/fix services are billed hourly. If for some reason you are not
          100% satisfied, we will make it right or give you your money back.
        </Typography>
        <Typography color="#a3a3a3" display={"flex"}>
          Don’t hesitate to &nbsp;
          <Typography color="#3444af" sx={{ cursor: "pointer" }}>
            Contact
          </Typography>{" "}
          &nbsp; us today for a free IT assessment. In most cases, we can visit
          you on the same day you call
        </Typography>
      </Box>
    </Box>
  );
};

export default Aboutcontenttext;
