import {Fragment, useEffect, useState} from 'react';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {ThemeContext} from './themes/theme-context';
import {darkTheme, lightTheme} from "./themes/theme-context";
import SearchEngine from "./components/SearchEngine";

const App = () => {
    const initialTheme = localStorage.getItem('mode') === 'light' ? lightTheme : darkTheme;
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
    const [theme, setTheme] = useState(initialTheme);

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    useEffect(() => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setTheme(newMode === 'light' ? darkTheme : lightTheme);
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ theme, toggleMode }}>
                <CssBaseline />
                <Fragment>
                    <SearchEngine/>
                </Fragment>
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}

export default App;