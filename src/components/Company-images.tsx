import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import CompanyNamesImg from "@/assets/compnae-names-img.jpg";
const Companyimages = () => {
  return (
    <Box
      position={"relative"}
      zIndex={"120"}
      bgcolor={"#ffffff"}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderTop={"1px solid #61ce70"}
      padding={"50px 0"}
    >
      <Box width={"55.5%"}>
        <Image
          src={CompanyNamesImg}
          alt="Company Names Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Companyimages;
