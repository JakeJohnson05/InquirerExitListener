#!/usr/bin/env node
'use strict'

const cliCursor = require('cli-cursor');

const exitFunction = (code = 1) => {
	console.log('');
	cliCursor.show();
	process.exit(code);
}

process.openStdin().on('keypress', function (_, key) {
	if (key) {
		if ((key.name === 'c' && key.ctrl) || (key.name === 'escape')) {
			exitFunction();
		}
	}
});

module.exports = exitFunction;
