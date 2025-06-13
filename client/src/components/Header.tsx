import {IconButton, Menu, MenuItem, styled} from "@mui/material";
import {useState} from "react";
import LanguageIcon from '@mui/icons-material/Language';
import {DarkModeToggle} from "./DarkModeToggle";

const LanguageMenuItem = styled(MenuItem)`
  width: 200px;
`;

const Header = () => {
    const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);

    const handleLanguageMenuOpen = (event : any) => {
        setLanguageMenuAnchor(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchor(null);
    };

    const handleLanguageChange = (language : string) => {
        //i18n.changeLanguage(language); // Assuming i18n is globally available
        handleLanguageMenuClose();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'right', marginRight: '10px' }}>
            <DarkModeToggle/>
            <IconButton color="secondary" onClick={handleLanguageMenuOpen} style={{ marginBottom : '10px' }}>
                <LanguageIcon style={{ fontSize: '32px' }}/>
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