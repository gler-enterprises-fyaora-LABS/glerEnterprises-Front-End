import React from 'react';
import {Typography} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {themeGlobal} from "@/utils/components/theme";

export default function Index() {
    return (
        <ThemeProvider theme={themeGlobal}>
            <Typography variant="h1" className="prose">Forgot Password</Typography>
            {/* Your recover pass form here */}
        </ThemeProvider>
    );
}
