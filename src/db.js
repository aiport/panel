const keyv = require('keyv');

const db = new keyv('sqlite://panel.db');

module.exports = db;