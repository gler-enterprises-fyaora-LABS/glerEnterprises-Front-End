import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const grey = {
    100: '#12153A',
    200: '#2B3641',
    300: '#4F6071',
    400: '#677582',
    500: '#88939D',
    600: '#9FA7AF',
    700: '#BCC2C8',
    800: '#D3D8DD',
    900: '#EAEEF3'
};

export const themeGlobal = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                light: '#1A78F2',
                main: '#6896D1',
                dark: '#FFC73B',
            },
            grey: grey
        },
        typography: {
            fontFamily: 'Poppins',
            h1: {
                color: grey[100],
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        color: 'white',
                        backgroundImage: 'linear-gradient(90deg, #88D0FF 0%, #6FE7FF 100%)',
                        borderRadius: '30px',
                        '&:hover': {
                            backgroundColor: 'grey',
                        }
                    }
                },
            },
            MuiCssBaseline: {
                styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            src: local('Poppins'),
            url(${process.env.PUBLIC_URL +
                '/fonts/Poppins.woff2'}) format('woff2');
            font-weight: 400;
            font-style: normal;
          }
        `,
            },
        },
    })
);
