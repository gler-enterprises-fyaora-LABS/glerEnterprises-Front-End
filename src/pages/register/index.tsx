import React from 'react';
import {Box} from '@mui/material';
import {themeGlobal} from "@/utils/components/theme";
import {ThemeProvider} from "@mui/material/styles";
import Image from "next/image";
import RegisterCarousel from "./RegisterCarousel";

export default function Index() {
    return (
        <ThemeProvider theme={themeGlobal}>
            <Box
                display="flex"
                justifyContent="right"
                alignItems="top"
                minHeight="100vh"

            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    width="50%"
                >
                    <Image
                        className="dark:invert"
                        src="/gler.svg"
                        alt="Gler logo"
                        width={73}
                        height={73}
                        style={{marginTop: 56, marginBottom: 136}}
                    />
                    <RegisterCarousel />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
