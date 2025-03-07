import React, {Fragment} from 'react';
import {Box, CssBaseline, TextField} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {ThemeContext} from './themes/theme-context';
import {darkTheme, lightTheme} from "./themes/theme-context";
import SearchEngine from "./themes/SearchEngine";
import {DarkModeToggle} from "./themes/DarkModeToggle";
import Header from "./themes/Header";

const App = () => {
  const initialTheme = localStorage.getItem('mode') === 'light' ? lightTheme : darkTheme;
  const [mode, setMode] = React.useState(localStorage.getItem('mode') || 'light');
  const [theme, setTheme] = React.useState(initialTheme);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  React.useEffect(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setTheme(newMode === 'light' ? darkTheme : lightTheme);
  }, [mode]);

  return (
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme, toggleMode }}>
          <CssBaseline />
          <Fragment>
            <Header/>
            <SearchEngine/>
          </Fragment>
        </ThemeContext.Provider>
      </ThemeProvider>
  )
}

export default App;