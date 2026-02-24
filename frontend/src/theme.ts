import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

/* Default Theme Options */
const defaultThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#003d55',

        },
        secondary: {
            main: '#ab582d',

        },
        background: {
            default: '#ffffff',
            paper: '#f6f2ed',
        },
        error: {
            main: '#55001b',

        },
        warning: {
            main: '#553a00',

        },
        success: {
            main: '#00553a',

        },
        info: {
            main: '#001b55',

        },
    },
    typography: {
        fontFamily: 'Open Sans',
    },
};

export const defaultTheme = createTheme(defaultThemeOptions);

const componentOverrideThemeOptions: ThemeOptions = {
    components: {
        MuiTable: {
            styleOverrides: {
                root: {
                    background: defaultThemeOptions.palette?.background?.default,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    background: defaultThemeOptions.palette?.secondary?.main,
                    color: defaultThemeOptions.palette?.background?.default,
                },
            },
        },
    },
};

export const theme = createTheme(defaultTheme, componentOverrideThemeOptions);