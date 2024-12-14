'use client'
// pages/index.js
import Link from 'next/link';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Box, Button, Stack, Typography} from "@mui/material";
import {themeGlobal} from "@/utils/components/theme";

export default function Home() {

    return (
      <ThemeProvider theme={themeGlobal}>
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
          <Stack direction="column" spacing={2} sx={{ margin: '16px' }}>
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="contained">Register</Button>
            </Link>
            <Link href="/verify-email">
              <Button variant="contained">Verify Email</Button>
            </Link>
            <Link href="/forgot-password">
              <Button variant="contained">Forgot Password</Button>
            </Link>
            <Link href="/terms-and-conditions">
              <Button variant="contained">Terms and conditions</Button>
            </Link>
          </Stack>
        </Box>
      </ThemeProvider>
  );
}
