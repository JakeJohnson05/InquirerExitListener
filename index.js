#!/usr/bin/env node
const cliCursor = require('cli-cursor');

function exitHandler(code = 1) {
	console.log(`\n${code}`);
	cliCursor.show();
	process.exit(code);
}

process.openStdin().on('keypress', (_, key) => {
	if (key && ((key.name === 'c' && key.ctrl) || (key.name === 'escape'))) {
		exitHandler.bind(null, 1)();
	}
});

module.exports = exitHandler;
