import {Box, TextField} from "@mui/material";
import {useState} from "react";
import logo from '../assets/img.png'; // Adjust the path as necessary

const SearchEngine = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Redirect to DuckDuckGo search results
            window.open(`https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* Image above the search bar */}
            <img
                src={logo} // Use the imported image
                alt="Search Icon"
                style={{ marginBottom: '20px', height: 'auto' }} // Adjust size as needed
            />
            <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress} // Add the key press handler
            />
            <p>
                Visit <a href="https://www.example.com" rel="noopener noreferrer">Example</a> for more information.
            </p>
        </Box>
    )
}

export default SearchEngine