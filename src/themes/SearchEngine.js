import { Box, TextField, Button, Typography, InputAdornment, Fade, Slide, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import logo from '../assets/img.png';
import SearchIcon from '@mui/icons-material/Search';

const SearchEngine = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // 0: All, 1: Web, 2: Images, 3: Memes

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

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (!searchQuery.trim()) return;

        setIsTransitioning(true);
        setTimeout(() => {
            setSearchResults(exampleSearches);
            setActiveTab(0); // Default to "All" tab
            setIsTransitioning(false);
        }, 300);
    };

    const handleKeyPress = (event) => {
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

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
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

    const renderResults = (results) => (
        results.map((result, index) => (
            <Box key={index} sx={{ mb: 4 }}>
                <Typography variant="h6" component="a" href={result.url} target="_blank"
                            sx={{ color: '#1a0dab', cursor: 'pointer', '&:hover': { color: '#e65100' } }}>
                    {result.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#006621', display: 'block', mb: 1 }}>
                    {result.url}
                </Typography>
                <Typography variant="body1" sx={{ color: '#4d5156' }}>
                    {result.description}
                </Typography>
            </Box>
        ))
    );

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Fade in={!searchResults && !isTransitioning} timeout={300}>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2
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
                        <Button variant="contained" onClick={handleSearch}
                                sx={{ bgcolor: '#fb8c00', color: '#fff', '&:hover': { bgcolor: '#ef6c00' } }}>
                            Freegle Search
                        </Button>
                        <Button variant="contained" onClick={() => setSearchQuery('')}
                                sx={{ bgcolor: '#ffcc80', color: '#4a2c00', '&:hover': { bgcolor: '#ffb74d' } }}>
                            Clear
                        </Button>
                    </Box>
                </Box>
            </Fade>
            {searchResults && (
                <Slide direction="up" in={!isTransitioning} timeout={500}>
                    <Box sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflowY: 'auto',
                        p: { xs: 2, sm: 4 },
                        zIndex: 1000
                    }}>
                        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                                <img src={logo} alt="Search Logo" style={{ maxWidth: '120px', height: 'auto', mr: 2 }} />
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
                                    sx={{ flex: 1, minWidth: '200px', ...textFieldStyles }}
                                />
                            </Box>

                            <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
                                <Tab label="All" sx={{ textTransform: 'none', '&.Mui-selected': { color: '#e65100' } }} />
                                <Tab label="Web" sx={{ textTransform: 'none', '&.Mui-selected': { color: '#e65100' } }} />
                                <Tab label="Images" sx={{ textTransform: 'none', '&.Mui-selected': { color: '#e65100' } }} />
                            </Tabs>

                            {activeTab === 0 && renderResults(searchResults.all)}
                            {activeTab === 1 && renderResults(searchResults.web)}
                            {activeTab === 2 && renderResults(searchResults.images)}
                            {activeTab === 3 && renderResults(searchResults.memes)}

                            <Button onClick={handleBackToSearch}
                                    sx={{ mt: 2, bgcolor: '#fb8c00', color: '#fff', '&:hover': { bgcolor: '#ef6c00' } }}>
                                Back to Search
                            </Button>
                        </Box>
                    </Box>
                </Slide>
            )}
            <Box sx={{ p: 2, textAlign: 'center', bgcolor: '#f2f2f2', color: '#4d5156' }}>
                <Typography variant="caption">
                    Made by JeztC.
                </Typography>
            </Box>
        </Box>
    );
};

export default SearchEngine;