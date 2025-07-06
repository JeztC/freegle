// @ts-ignore
import express from 'express';
import { search } from 'duck-duck-scrape';
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());

// @ts-ignore
app.get('/search', async function (req, res) {
    try {
        const query = req.query.q as string;

        if (!query) {
            return res.status(400).json({error: 'Query parameter "q" is required'});
        }

        const searchResults = await search(query)

        const formattedResults = searchResults.results.map(result => ({
            title: result.title,
            url: result.url,
            description: result.description
        }));

        res.json({
            query,
            results: formattedResults
        });
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({error: 'Internal server error.'});
    }
});

// @ts-ignore
app.get('/', (req, res) => {
    res.send('Welcome to the freegle backend');
});

app.listen(PORT, () => {
    console.log(`The application is listening on port http://localhost:${PORT}`);
});