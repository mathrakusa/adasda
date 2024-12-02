const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "YXFTQRwZ#Ms74L5b2eRkc7bwLQMU_guscJeN9kao6wf8EEZMEMr4",
MONGODB: process.env.MONGODB || "mongodb+srv://athulakumara604:qBwvqo6IM64eT1SL@cluster0.wr7rx.mongodb.net/",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'Asithabzkejx': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
