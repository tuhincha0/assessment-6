const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
    try {
        let results = await Promise.all(
            req.body.developers.map(async (d) => {
                try {
                    let response = await axios.get(`https://api.github.com/users/${d}`);
                    return { name: response.data.name, bio: response.data.bio };
                } catch (err) {
                    console.error(`Failed to fetch data for ${d}`);
                    return { name: d, bio: 'Error fetching data' };
                }
            })
        );
        return res.json(results);
    } catch (err) {
        return next(err);
    }
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});
