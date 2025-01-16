'use client'
// pages/index.js
import Link from 'next/link';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {Box, Button, Stack, Typography} from "@mui/material";
import {themeGlobal} from "@/utils/components/theme";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function Home() {
    const { t, i18n } = useTranslation();
    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    return (
        <ThemeProvider theme={themeGlobal}>
            <div>
                <div style={{marginTop: "20px"}}>
                    <button onClick={() => switchLanguage("en")}>English</button>
                    <button onClick={() => switchLanguage("fr")}>Français</button>
                </div>
            </div>
            <Box display="flex"
                 flexDirection="column"
            >
                <Typography variant="h1" align="center" className="prose">Welcome to Gler </Typography>
                <Typography variant="h6" className="prose">This is temporary routing</Typography>
            </Box>
            <Box
                display="flex"
                minHeight="100vh"
                marginRight="10px"
            >
                <Stack direction="column" spacing={2} sx={{margin: '16px'}}>
                    <Link href="/login">
                        <Button variant="contained">{t("login")}</Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="contained">{t("register")}</Button>
                    </Link>
                    <Link href="/verify-email">
                        <Button variant="contained">{t("verifyEmail")}</Button>
                    </Link>
                    <Link href="/forgot-password">
                        <Button variant="contained">{t("forgotPassword")}</Button>
                    </Link>
                    <Link href="/terms-and-conditions">
                        <Button variant="contained">{t("termsAndConditions")}</Button>
                    </Link>
                </Stack>
            </Box>
        </ThemeProvider>
    );
}
