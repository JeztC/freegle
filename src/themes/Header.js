import {DarkModeToggle} from "./DarkModeToggle";
import {IconButton, Menu, MenuItem, styled} from "@mui/material";
import {useState} from "react";
import LanguageIcon from '@mui/icons-material/Language';

const LanguageMenuItem = styled(MenuItem)`
  width: 200px;
`;

const Header = () => {
    const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);

    const handleLanguageMenuOpen = (event) => {
        setLanguageMenuAnchor(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchor(null);
    };

    const handleLanguageChange = (language) => {
        //i18n.changeLanguage(language); // Assuming i18n is globally available
        handleLanguageMenuClose();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <DarkModeToggle/>
            <IconButton color="secondary" onClick={handleLanguageMenuOpen} style={{ marginBottom : '10px' }}>
                <LanguageIcon style={{ fontSize: '25px' }}/>
            </IconButton>
            <Menu
                anchorEl={languageMenuAnchor}
                keepMounted
                open={Boolean(languageMenuAnchor)}
                onClose={handleLanguageMenuClose}
            >
                <LanguageMenuItem onClick={() => handleLanguageChange('fi')}>Finnish</LanguageMenuItem>
                <LanguageMenuItem onClick={() => handleLanguageChange('en')}>English</LanguageMenuItem>
            </Menu>
        </div>
    )
};

export default Header