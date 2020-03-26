const exitFunction = (code = 1) => {
	console.log('');
	process.exit(code);
}
process.openStdin().on('keypress', function (_, key) {
	if (key) {
		if (key.name === 'c' && key.ctrl) exitFunction();
		else if (key.name === 'escape') exitFunction();
	}
});

module.exports = exitFunction
