const express = require('express');
const app = express();
const fs = require('fs');

console.log('Welcome to FLIPS.');
console.log('[INFO] Attempting to read main config');

try {
	const conf = JSON.parse(fs.readFileSync('conf.json'));
	console.log('[INFO] Loaded main config');
} catch(err) {
	console.log(`[FATAL] Could not load main config: ${err}`);
	process.exit(1);
};

console.log('[INFO] Attempting to load plugins.json')

try {
	const plugins = JSON.parse(fs.readFileSync('plugins.json'));
	console.log('[INFO] Loaded plugins.json')
} catch(err) {
	console.log(`[FATAL] Could not load plugins.json: ${err}`);
	process.exit(1);
};
