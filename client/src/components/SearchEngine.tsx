import { Box, TextField, Button, Typography, InputAdornment, Fade, Tabs, Tab } from "@mui/material";
// @ts-ignore
import logo from '../assets/img.png';
import SearchIcon from '@mui/icons-material/Search';
import Header from "./Header";
import SearchResults from "./SearchResults";
import {useState} from "react";

export interface SearchResult {
    title: string;
    url: string;
    description: string;
}

const SearchEngine = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const exampleSearches = {
        all: [
            { title: "React Tutorials", url: "https://example.com/react", description: "Learn React basics." },
            { title: "Coding Meme", url: "https://example.com/meme.jpg", description: "Funny coding image." },
            { title: "Web Dev Guide", url: "https://example.com/web-dev", description: "Web dev tips." }
        ],
        web: [
            { title: "Web Dev Tutorials", url: "https://example.com/web-dev", description: "Learn web development." },
            { title: "Coding Tips", url: "https://example.com/coding-tips", description: "Best coding practices." }
        ],
        images: [
            { title: "Coding Meme", url: "https://example.com/images/coding.jpg", description: "Funny coding image." },
            { title: "Web Diagram", url: "https://example.com/images/diagram.png", description: "Web dev diagram." }
        ],
        memes: [
            { title: "Programmer Life", url: "https://example.com/memes/prog-life", description: "Life of a coder." },
            { title: "Code Review", url: "https://example.com/memes/review", description: "Review gone wild." }
        ]
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (!searchQuery.trim()) return;

        setIsTransitioning(true);
        const results = activeTab === 0 ? exampleSearches.all :
            activeTab === 1 ? exampleSearches.web :
                activeTab === 2 ? exampleSearches.images :
                    exampleSearches.memes;
        setTimeout(() => {
            setSearchResults(results);
            setActiveTab(0); // Default to "All" tab
            setIsTransitioning(false);
        }, 300);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleBackToSearch = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSearchResults(null);
            setSearchQuery('');
            setIsTransitioning(false);
        }, 300);
    };

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        // Update searchResults based on the new tab
        setIsTransitioning(true);
        setTimeout(() => {
            const results = newValue === 0 ? exampleSearches.all :
                newValue === 1 ? exampleSearches.web :
                    newValue === 2 ? exampleSearches.images :
                        exampleSearches.memes;
            setSearchResults(results);
            setIsTransitioning(false);
        }, 300);
    };

    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '24px',
            boxShadow: '0 1px 6px rgba(242, 140, 56, 0.28)',
            '&:hover fieldset': { border: '2px solid #ef6c00' },
            '&.Mui-focused fieldset': { border: '2px solid #e65100' },
            '& fieldset': { borderColor: '#fb8c00' }
        },
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Fade in={!searchResults && !isTransitioning} timeout={300}>
                    <Box sx={{
                        flexGrow: 1,
                        p: { xs: 2, sm: 4 },
                        pt: 8,
                        display: !searchResults ? 'flex' : 'none',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src={logo} alt="Search Logo" style={{ marginBottom: '24px', maxWidth: '272px', height: 'auto' }} />
                        <TextField
                            placeholder="Search with Freegle..."
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyPress={handleKeyPress}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: '#f28c38' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ width: { xs: '100%', sm: '584px' }, ...textFieldStyles }}
                        />
                        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleSearch}
                                sx={{ bgcolor: '#fb8c00', color: '#fff', '&:hover': { bgcolor: '#ef6c00' } }}
                            >
                                Freegle Search
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setSearchQuery('')}
                                sx={{ bgcolor: '#ffcc80', color: '#4a2c00', '&:hover': { bgcolor: '#ffb74d' } }}
                            >
                                Clear
                            </Button>
                        </Box>
                    </Box>
                </Fade>
                {searchResults && (
                    <SearchResults
                        logo={logo}
                        searchQuery={searchQuery}
                        handleBackToSearch={handleBackToSearch}
                        handleSearchChange={handleSearchChange}
                        handleKeyPress={handleKeyPress}
                        activeTab={activeTab}
                        handleTabChange={handleTabChange}
                        searchResults={searchResults}
                        textFieldStyles={textFieldStyles}
                    />
                )}
            </Box>
            <Box sx={{ p: 2, textAlign: 'center', color: '#4d5156', mt: 'auto' }}>
                <Typography variant="caption">
                    Made by JeztC.
                </Typography>
            </Box>
        </Box>
    );
};

export default SearchEngine;