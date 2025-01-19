import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import {useTranslation} from "react-i18next";
import "../../app/i18n";

const RegisterCarousel = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(1);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 5
    };

    const showNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
    };

    const selectUser = () => {
        console.log("User button clicked");
    };
    const selectService = () => {
        console.log("Service button clicked");
    };

    return (<Box style={{ width: "100%", height: "100%", textAlign: "center", position: "relative" }}>
        {currentSlide === 1 && (
            <Box>
                <Typography variant="h3">
                    {t("signUp")}
                </Typography>
                <Box style={{ marginTop: 64 }}>
                    <Typography style={{ width: "80%" }} variant="h5">
                        {t("accountType")}
                    </Typography>
                    <Stack
                        style={{
                            width: "100%",
                            height: 200,
                            backgroundColor: "#FFFFFF",
                            borderRadius: "50px",
                        }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >

                        <Button
                            style={{
                                textWrap: "wrap",
                                width: 150,
                                height: 70,
                                border: "2px solid #1A78F2",
                                borderRadius: 10,
                                textTransform: "none",
                                color: "#1A78F2",
                            }}
                            onClick={selectUser}
                        >
                            {t("customer")}
                        </Button>
                        <Button
                            style={{
                                textWrap: "wrap",
                                width: 150,
                                height: 70,
                                border: "2px solid #1A78F2",
                                borderRadius: 10,
                                textTransform: "none",
                                color: "#1A78F2",
                            }}
                            onClick={selectService}
                        >
                            {t("serviceProvider")}
                        </Button>
                    </Stack>
                </Box>
            </Box>
        )}

        {currentSlide === 2 && (
            <Box>
                <Typography variant="h5" component="div" align="center">
                    Welcome to Slide 1
                </Typography>
                <Typography variant="body1" align="center">
                    This is the first slide.
                </Typography>
            </Box>
        )}

        {currentSlide === 3 && (
            <Box>
                <Typography variant="h5" component="div" align="center">
                    This is the next slide.
                </Typography>
                <Typography variant="body1" align="center">
                    This is the last slide.
                </Typography>
            </Box>
        )}

        {/* Navigation Buttons */}
        <Box
            style={{
                position: "relative",
                top: "calc(100vh - 70%)",
            }}
        >
            <Button
                style={{
                    width: 342,
                    height: 48,
                    borderRadius: 100,
                    background: "#1A78F2",
                    color: "#FFFFFF",
                }}
                variant="contained"
                onClick={showNextSlide}
            >
                {t("next")}
            </Button>
        </Box>
    </Box>);
};
export default RegisterCarousel;