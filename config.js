const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rcJVkSaI#aIe8WNkunNgXRnS74-jKPavKZsVWXSKieq8fTbms77E",
MONGODB: process.env.MONGODB || "mongodb+srv://athulakumara604:qBwvqo6IM64eT1SL@cluster0.wr7rx.mongodb.net/",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'mathrakusa': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
