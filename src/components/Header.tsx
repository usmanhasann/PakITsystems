"use client";
import React, { useState, MouseEvent, useEffect } from "react";
import { Box, Typography, MenuItem } from "@mui/material";
import Image from "next/image";
import HeaderLogo from "../assets/header-main-logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  // State to handle hover for dropdown menus
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        zIndex: 1000,
        width: "100%",
        height: "141px",
        backgroundColor: "#ffffff",
        // padding: "0 1%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #d8d8d8",
      }}
    >
      <Box
        sx={{
          width: "98%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href={"/"} passHref style={{ textDecoration: "none" }}>
            <Image src={HeaderLogo} alt="Logo" width={270} height={68} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            height: "100%",
          }}
        >
          {/* OUR SERVICES */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              height: "100%",
              "&:hover": {
                borderBottom: "1px solid green",
              },
            }}
            onMouseEnter={() => handleMouseEnter("ourServices")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services" passHref style={{ textDecoration: "none" }}>
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
            </Link>
            {hoveredMenu === "ourServices" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "101%",
                  left: 0,
                  backgroundColor: "#e2e2e2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  minWidth: "150px",
                }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  IT OUTSOURCING
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  BREAK / FIX
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  HELP DESK
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  CLOUD SERVICES
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  MANAGED SECURITY
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  DISASTER RECOVERY
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  FREE IT ASSESSMENT
                </MenuItem>
              </Box>
            )}
          </Box>

          {/* ABOUT */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              "&:hover": {
                borderBottom: "1px solid green",
              },
            }}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" passHref style={{ textDecoration: "none" }}>
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
            </Link>
            {hoveredMenu === "about" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "101%",
                  left: 0,
                  backgroundColor: "#e2e2e2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  minWidth: "150px",
                }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  ABOUT
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  WHY US
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  TESTIMONIALS
                </MenuItem>
              </Box>
            )}
          </Box>

          {/* CONTACT */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
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

          {/* SUPPORT */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid #ffffff",
              padding: "0 20px",
              "&:hover": {
                borderBottom: "1px solid green",
              },
            }}
            onMouseEnter={() => handleMouseEnter("support")}
            onMouseLeave={handleMouseLeave}
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
            {hoveredMenu === "support" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "101%",
                  left: 0,
                  backgroundColor: "#e2e2e2",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  minWidth: "150px",
                }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  CUSTOMER LOGIN
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#006838",
                    fontSize: "13px",
                    padding: "13px 20px",
                  }}
                >
                  REMOTE SUPPORT
                </MenuItem>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
