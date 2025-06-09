import {Box, Typography} from "@mui/material";
import {SearchResult} from "./SearchEngine";

const RenderResults = (results : Array<SearchResult>) => {
    return (
        results.map((result, index) => (
            <Box key={index} sx={{ mb: 4 }}>
                <Typography variant="h6" component="a" href={result.url} target="_blank"
                            sx={{ color: '#1a0dab', cursor: 'pointer', '&:hover': { color: '#e65100' } }}>
                    {result.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#006621', display: 'block', mb: 1 }}>
                    {result.url}
                </Typography>
                <Typography variant="body1">
                    {result.description}
                </Typography>
            </Box>
        ))
    )
}

export default RenderResults;