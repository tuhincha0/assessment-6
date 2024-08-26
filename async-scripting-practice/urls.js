const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Function to download a page and save its HTML
async function downloadPage(url) {
    try {
        const response = await axios.get(url);
        const hostname = new URL(url).hostname;
        const outputPath = path.join(__dirname, hostname);

        fs.writeFileSync(outputPath, response.data);
        console.log(`Wrote to ${hostname}`);
    } catch (error) {
        console.error(`Couldn't download ${url}`);
    }
}

// Main function to read file and process URLs
function processFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Couldn't read file ${filename}`);
            process.exit(1);
        }

        const urls = data.trim().split('\n');
        urls.forEach(url => downloadPage(url));
    });
}

// Check for filename argument and execute the script
const filename = process.argv[2];
if (!filename) {
    console.error('Please provide a filename.');
    process.exit(1);
}

processFile(filename);
