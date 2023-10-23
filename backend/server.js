const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = 5000;
const NYTIMES_API_KEY = process.env.NYTIMES_API_KEY;

app.use(cors());

app.get('/topstories', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYTIMES_API_KEY}`);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
