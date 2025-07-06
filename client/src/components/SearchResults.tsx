import {Box, Button, InputAdornment, Tab, Tabs, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RenderResults from "./RenderResults";
import * as React from "react";
import {SearchResult} from "./SearchEngine";

interface ResultsProps {
    logo: string;
    searchQuery: string;
    handleBackToSearch: (event: React.MouseEvent<HTMLElement>) => void;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Correct function signature
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    activeTab: number;
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    searchResults: any;
    textFieldStyles: any;
}

const SearchResults = ({
                           logo,
                           searchQuery,
                           handleBackToSearch,
                           handleSearchChange,
                           handleKeyPress,
                           activeTab,
                           handleTabChange,
                           searchResults,
                           textFieldStyles
                       }: ResultsProps) => {
    console.log("test");
    console.log(activeTab);
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'auto',
        }}>
            <Box sx={{ maxWidth: '800px', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                    <img
                        src={logo}
                        onClick={handleBackToSearch}
                        alt="Search Logo"
                        style={{ maxWidth: '120px', height: 'auto' }}
                    />
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
                    <Tab label="Memes" sx={{ textTransform: 'none', '&.Mui-selected': { color: '#e65100' } }} />
                </Tabs>

                {activeTab === 0 && searchResults.all && RenderResults(searchResults.all)}
                {activeTab === 1 && searchResults.web && RenderResults(searchResults.web)}
                {activeTab === 2 && searchResults.images && RenderResults(searchResults.images)}
                {activeTab === 3 && searchResults.memes && RenderResults(searchResults.memes)}

                <Button
                    onClick={handleBackToSearch}
                    sx={{ mt: 2, bgcolor: '#fb8c00', color: '#fff', '&:hover': { bgcolor: '#ef6c00' } }}
                >
                    Back to Search
                </Button>
            </Box>
        </Box>
    );
};

export default SearchResults;