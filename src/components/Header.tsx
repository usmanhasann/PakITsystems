"use client";
import React, { useState, MouseEvent } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import HeaderLogo from "../assets/header-main-logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Define the type for the anchor element
type AnchorEl = (EventTarget & HTMLElement) | null;

const Header: React.FC = () => {
  const [serviceAnchorEl, setServiceAnchorEl] = useState<AnchorEl>(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState<AnchorEl>(null);
  const [supportAnchorEl, setSupportAnchorEl] = useState<AnchorEl>(null);

  // Open and close dropdown handlers
  const handleOpenMenu =
    (setAnchorEl: React.Dispatch<React.SetStateAction<AnchorEl>>) =>
    (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

  const handleCloseMenu =
    (setAnchorEl: React.Dispatch<React.SetStateAction<AnchorEl>>) => () => {
      setAnchorEl(null);
    };

  return (
    <Box
      sx={{
        width: "100%",

        height: "141px",
        backgroundColor: "#ffffff",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #d8d8d8",
      }}
    >
      {/* Left Side Image */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src={HeaderLogo} // Make sure your image is in the public/images folder
          alt="Logo"
          width={270}
          height={68}
        />
      </Box>

      {/* Right Side Navigation */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          height: "100%",
          // bgcolor: "red",
        }}
      >
        {/* Our Service with dropdown */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ffffff",
            padding: "0 20px 0 20px",
            height: "100%",
            "&:hover": {
              borderBottom: "1px solid green",
            },
          }}
          onMouseEnter={handleOpenMenu(setServiceAnchorEl)}
          onMouseLeave={handleCloseMenu(setServiceAnchorEl)}
        >
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",
              fontWeight: "bold",
              alignItems: "center",
              color: "#262A2B",
            }}
          >
            OUR SERVICES
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />
          </Typography>
          <Menu
            anchorEl={serviceAnchorEl}
            open={Boolean(serviceAnchorEl)}
            onClose={handleCloseMenu(setServiceAnchorEl)}
            MenuListProps={{
              onMouseEnter: handleOpenMenu(setServiceAnchorEl),
              onMouseLeave: handleCloseMenu(setServiceAnchorEl),
            }}
            sx={{ mt: "40px" }}
          >
            <MenuItem onClick={handleCloseMenu(setServiceAnchorEl)}>
              Service 1
            </MenuItem>
            <MenuItem onClick={handleCloseMenu(setServiceAnchorEl)}>
              Service 2
            </MenuItem>
            <MenuItem onClick={handleCloseMenu(setServiceAnchorEl)}>
              Service 3
            </MenuItem>
          </Menu>
        </Box>

        {/* About with dropdown */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: "100%",
            borderBottom: "1px solid #ffffff",
            padding: "0 20px 0 20px",

            "&:hover": {
              borderBottom: "1px solid green",
            },
          }}
          onMouseEnter={handleOpenMenu(setAboutAnchorEl)}
          onMouseLeave={handleCloseMenu(setAboutAnchorEl)}
        >
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",
              fontWeight: "bold",
              alignItems: "center",
              color: "#262A2B",
            }}
          >
            ABOUT
            <ArrowDropDownIcon />
          </Typography>
          <Menu
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleCloseMenu(setAboutAnchorEl)}
            MenuListProps={{
              onMouseEnter: handleOpenMenu(setAboutAnchorEl),
              onMouseLeave: handleCloseMenu(setAboutAnchorEl),
            }}
            sx={{ mt: "40px" }}
          >
            <MenuItem onClick={handleCloseMenu(setAboutAnchorEl)}>
              About Us
            </MenuItem>
            <MenuItem onClick={handleCloseMenu(setAboutAnchorEl)}>
              Our Team
            </MenuItem>
          </Menu>
        </Box>

        {/* Contact (No Dropdown) */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: "100%",
            borderBottom: "1px solid #ffffff",
            padding: "0 20px 0 20px",

            "&:hover": {
              borderBottom: "1px solid green",
            },
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",

              fontWeight: "bold",
              alignItems: "center",
              color: "#262A2B",
            }}
          >
            CONTACT
          </Typography>
        </Box>

        {/* Support with dropdown */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: "100%",
            borderBottom: "1px solid #ffffff",
            padding: "0 20px 0 20px",

            "&:hover": {
              borderBottom: "1px solid green",
            },
          }}
          onMouseEnter={handleOpenMenu(setSupportAnchorEl)}
          onMouseLeave={handleCloseMenu(setSupportAnchorEl)}
        >
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",

              fontWeight: "bold",
              alignItems: "center",
              color: "#262A2B",
            }}
          >
            SUPPORT
            <ArrowDropDownIcon />
          </Typography>
          <Menu
            anchorEl={supportAnchorEl}
            open={Boolean(supportAnchorEl)}
            onClose={handleCloseMenu(setSupportAnchorEl)}
            MenuListProps={{
              onMouseEnter: handleOpenMenu(setSupportAnchorEl),
              onMouseLeave: handleCloseMenu(setSupportAnchorEl),
            }}
            sx={{ mt: "40px" }}
          >
            <MenuItem onClick={handleCloseMenu(setSupportAnchorEl)}>
              Support 1
            </MenuItem>
            <MenuItem onClick={handleCloseMenu(setSupportAnchorEl)}>
              Support 2
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
