"use client";
import dynamic from "next/dynamic";

import { FaFacebookF } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
//chatgpt
import { Box, TextField, Button, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

// Dynamically import ReCAPTCHA
// const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
//   ssr: false,
// });
export const ContactUsform = () => {
  const handleCaptchaChange = (value: string | null) => {
    console.log("Captcha value:", value);
  };
  return (
    <Box
      width={"100%"}
      position={"relative"}
      zIndex={190}
      bgcolor={"#fff"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        padding={"100px 0"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        // bgcolor={"#f7f7f7"}
      >
        <Typography
          textAlign={"center"}
          fontSize={"35px"}
          color="#000"
          fontWeight={"bold"}
          fontStyle={"normal"}
          paddingBottom={"20px"}
          sx={{
            "@media (max-width:768px)": {
              fontSize: "30px",
            },
            "@media (max-width:350px)": {
              fontSize: "26px",
            },
          }}
        >
          Our Service Areas
        </Typography>
        <Box
          //   bgcolor={"green"}
          borderBottom={"1px dotted #3444af"}
          paddingBottom={"20px"}
          width={"30%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          sx={{
            "@media (max-width:768px)": {
              width: "50%",
            },
            "@media (max-width:500px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            textAlign={"center"}
            fontSize={"20px"}
            color="#000"
            fontWeight={"800"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "18px",
              },
            }}
          >
            WASHINGTON DC METRO AREA
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"28px"}
            color="#7a7a7a"
            fontWeight={"normal"}
            letterSpacing={"1px"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "26px",
              },
            }}
          >
            301.363.2823
          </Typography>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          sx={{
            "@media (max-width:768px)": {
              width: "50%",
            },
            "@media (max-width:500px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            textAlign={"center"}
            fontSize={"20px"}
            color="#000"
            fontWeight={"800"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "18px",
              },
            }}
          >
            FLORIDA
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"28px"}
            color="#7a7a7a"
            fontWeight={"normal"}
            letterSpacing={"1px"}
            textTransform={"uppercase"}
            sx={{
              "@media (max-width:768px)": {
                fontSize: "26px",
              },
            }}
          >
            407.537.9425
          </Typography>
        </Box>
      </Box>

      <Box
        width={"100%"}
        padding={"100px 0"}
        bgcolor={"#ffffff"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"60px"}
      >
        <Box
          alignItems={"center"}
          alignContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          sx={{
            "@media (max-width:768px)": {
              padding: "0 2.5%",
            },
          }}
        >
          <Typography
            color={"#3444af"}
            fontSize={"60px"}
            fontWeight={"600"}
            textAlign={"center"}
            sx={{
              "@media (max-width:1024px)": {
                fontSize: "50px",
              },
              "@media (max-width:768px)": {
                fontSize: "44px",
              },
              "@media (max-width:500px)": {
                fontSize: "36px",
              },
            }}
          >
            Call us now!{" "}
          </Typography>

          <Typography
            fontSize={"22px"}
            color={"#000000"}
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{
              "@media (max-width:1024px)": {
                fontSize: "20px",
              },
              "@media (max-width:768px)": {
                fontSize: "18px",
              },
              "@media (max-width:500px)": {
                fontSize: "16px",
              },
            }}
          >
            Otherwise, fill in the form below and we will get back to you right
            away.
          </Typography>

          <Box
            display={"flex"}
            justifyItems={"center"}
            justifyContent={"center"}
            gap={"10px"}
          >
            <Box
              width={"48px"}
              height={"48px"}
              bgcolor={"#3444af"}
              borderRadius={"100px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <FaFacebookF
                style={{
                  color: "#fff",
                  height: "1em",
                  width: "1em",
                }}
              />
            </Box>
            <Box
              width={"48px"}
              height={"48px"}
              bgcolor={"#3444af"}
              borderRadius={"100px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <TwitterIcon
                sx={{
                  color: "#fff",
                  height: "1em",
                  width: "1em",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          width={"100%"}
          //   bgcolor={"#f5f5f5"}
          padding={"40px 0"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={"61%"}
            bgcolor={"white"}
            // padding={"40px"}
            gap={"15px"}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              "@media (max-width:1424px)": {
                width: "80%",
              },
            }}
          >
            <Box
              width={"100%"}
              display={"flex"}
              gap={"10px"}
              sx={{
                "@media (max-width:768px)": {
                  flexDirection: "column",
                },
              }}
            >
              <TextField
                fullWidth
                placeholder="Name*"
                autoComplete="off"
                margin="normal"
                type="text"
                sx={{
                  bgcolor: "#f2f2f2",
                  border: "1px solid #f2f2f2",
                  borderRadius: "5px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-1.1%",
                  color: "#1E1E1E",
                  marginTop: "0px",
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    // padding: '12px 24px',
                    width: "100%",
                    height: "54px",
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "0 16px",

                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "-1.1%",
                      color: "#1E1E1E",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #797f86",
                      transition: "0.9s",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder="Email*"
                autoComplete="off"
                margin="normal"
                type="text"
                sx={{
                  bgcolor: "#f2f2f2",
                  border: "1px solid #f2f2f2",
                  borderRadius: "5px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-1.1%",
                  color: "#1E1E1E",
                  marginTop: "0px",
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    // padding: '12px 24px',
                    width: "100%",
                    height: "54px",
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "0 16px",

                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "-1.1%",
                      color: "#1E1E1E",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #69727d",
                      transition: "0.9s",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder="Phone Number"
                autoComplete="off"
                margin="normal"
                type="number"
                sx={{
                  bgcolor: "#f2f2f2",
                  border: "1px solid #f2f2f2",
                  borderRadius: "5px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-1.1%",
                  color: "#1E1E1E",
                  marginTop: "0px",
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    // padding: '12px 24px',
                    width: "100%",
                    height: "54px",
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "0 16px",

                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "-1.1%",
                      color: "#1E1E1E",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #69727d",
                      transition: "0.9s",
                    },
                  },
                }}
              />
            </Box>
            <TextField
              fullWidth
              placeholder="Company Name"
              autoComplete="off"
              margin="normal"
              type="text"
              sx={{
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "-1.1%",
                color: "#1E1E1E",
                marginTop: "0px",
                bgcolor: "#f2f2f2",

                "& .MuiOutlinedInput-root": {
                  // padding: '12px 24px',
                  // width: "343px",
                  height: "54px",
                  "& fieldset": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0 16px",

                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "30px",
                    letterSpacing: "-1.1%",
                    color: "#1E1E1E",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Address"
              autoComplete="off"
              margin="normal"
              type="text"
              sx={{
                bgcolor: "#f2f2f2",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "-1.1%",
                color: "#1E1E1E",
                marginTop: "0px",

                "& .MuiOutlinedInput-root": {
                  // padding: '12px 24px',
                  // width: "343px",
                  height: "54px",
                  "& fieldset": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0 16px",

                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "30px",
                    letterSpacing: "-1.1%",
                    color: "#1E1E1E",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
            <Box
              width={"100%"}
              display={"flex"}
              gap={"10px"}
              sx={{
                "@media (max-width:768px)": {
                  flexDirection: "column",
                },
              }}
            >
              <TextField
                fullWidth
                placeholder="City"
                autoComplete="off"
                margin="normal"
                type="text"
                sx={{
                  bgcolor: "#f2f2f2",
                  border: "1px solid #f2f2f2",
                  borderRadius: "5px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-1.1%",
                  color: "#1E1E1E",
                  marginTop: "0px",
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    // padding: '12px 24px',
                    width: "100%",
                    height: "54px",
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "0 16px",

                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "-1.1%",
                      color: "#1E1E1E",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #69727d",
                      transition: "0.9s",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder="State"
                autoComplete="off"
                margin="normal"
                type="text"
                sx={{
                  bgcolor: "#f2f2f2",
                  border: "1px solid #f2f2f2",
                  borderRadius: "5px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-1.1%",
                  color: "#1E1E1E",
                  marginTop: "0px",
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    // padding: '12px 24px',
                    width: "100%",
                    height: "54px",
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "0 16px",

                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "-1.1%",
                      color: "#1E1E1E",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #69727d",
                      transition: "0.9s",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder="Zip Code"
                autoComplete="off"
                margin="normal"
                type="number"
                sx={{
                  bgcolor: "#f2f2f2",
                  border: "1px solid #f2f2f2",
                  borderRadius: "5px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-1.1%",
                  color: "#1E1E1E",
                  marginTop: "0px",
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    // padding: '12px 24px',
                    width: "100%",
                    height: "54px",
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "0 16px",

                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "-1.1%",
                      color: "#1E1E1E",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #69727d",
                      transition: "0.9s",
                    },
                  },
                }}
              />
            </Box>
            <TextField
              fullWidth
              multiline
              minRows={7} // Start with 3 rows
              placeholder="Message*"
              InputProps={{
                sx: {
                  "& textarea": {
                    resize: "vertical", // Enables vertical resizing
                    overflow: "auto",
                  },
                },
              }}
              sx={{
                border: "1px solid #f2f2f2",
                bgcolor: "#f2f2f2",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  padding: "14px 8px 8px 14px",

                  fontSize: "14px",
                  fontWeight: "400",
                  // lineHeight: '24px',
                  color: "#000000",
                  boxShadow: "0px 1px 2px 0px #1018280D",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#69727d",
                  },

                  // "& .MuiOutlinedInput-notchedOutline": {
                  //   borderColor: "#C2CCFF", // Initial border color
                  // },
                  "& fieldset": {
                    border: "none", // No border by default
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #69727d",
                    transition: "0.9s",
                  },
                },
              }}
            />
          </Box>
          <Box
            // bgcolor={"red"}
            width={"61%"}
            padding={"40px 0"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            sx={{
              "@media (max-width:1424px)": {
                width: "80%",
              },
            }}
          >
            <Button
              sx={{
                fontSize: "11px",
                fontWeight: "bold",
                lineHeight: "1.9em",
                letterSpacing: "1.6px",
                borderStyle: "solid",
                borderWidth: "0 0 3px 0",
                borderRadius: "8px",
                borderColor: "#7697e9",
                bgcolor: "#3444fa",
                color: "#ffffff",
                padding: "15px 30px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <TelegramIcon sx={{ fontSize: "20px" }} /> SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactUsform;
