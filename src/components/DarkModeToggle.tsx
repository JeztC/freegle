import { useTheme } from '../themes/theme-context';
import { IconButton, useMediaQuery } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme as muiTheme } from "@mui/material/styles";
import * as React from "react";

export const DarkModeToggle = () => {
    const { theme, toggleMode } = useTheme();
    const mTheme = muiTheme();
    const isMobile = useMediaQuery(mTheme.breakpoints.down("sm"));
    const iconFontSize = isMobile ? '37px' : '32px';

    return (
        <IconButton
            onClick={toggleMode}
            color="secondary"
        >
            {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ fontSize: iconFontSize }} /> : <DarkModeIcon sx={{ fontSize: iconFontSize}} />}
        </IconButton>
    );
};