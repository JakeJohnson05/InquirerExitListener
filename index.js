#!/usr/bin/env node
import {show} from 'cli-cursor';

function exitHandler(code = 1) {
	console.log(`\n${code}`);
	show();
	process.exit(code);
}

process.openStdin().on('keypress', (_, key) => {
	if (key && ((key.name === 'c' && key.ctrl) || (key.name === 'escape'))) {
		exitHandler.bind(null, 1)();
	}
});

export default exitHandler;
