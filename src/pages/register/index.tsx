import React from 'react';
import {Box, Button, Card, CardContent, Typography, Stack, makeStyles} from '@mui/material';
import {themeGlobal} from "@/utils/components/theme";
import {ThemeProvider} from "@mui/material/styles";
import Image from "next/image";
export default function Index() {
    return (
        <ThemeProvider theme={themeGlobal}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Card>
                    <CardContent>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            gap={2}
                        >
                            <Image
                                className="dark:invert"
                                src="/gler.svg"
                                alt="Vercel logomark"
                                width={73}
                                height={73}
                                style={{marginTop: 56, marginBottom: 136}}
                            />
                            <Typography variant="h5" component="div" align="center">
                                Select Account type
                            </Typography>
                            <Stack
                                style={{ width: 350, height: 86, backgroundImage: 'linear-gradient(90deg, #88D0FF 0%, #6FE7FF 100%)',
                                    borderRadius: '50px', marginTop: 36, marginBottom: 36}}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button style={{textWrap: "wrap", width: 150, height: 52, borderRadius: 30, color: "white" }}>User</Button>
                                <Button style={{textWrap: "wrap", width: 150, height: 52, borderRadius: 30, color: "white" }}>Service Provider</Button>
                            </Stack>
                            <Button style={{width: 350, height: 46, marginBottom: 36}} variant="contained">Continue</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    );
}
