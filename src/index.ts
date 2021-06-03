import {show} from 'cli-cursor';

export const exitHandler = (code = 1) => {
	console.log(`\n${code}`);
	show();
	process.kill(process.pid, code);
}

type KeypressListener = (_: undefined, key: {
	sequence: string;
	name: string;
	ctrl: boolean;
	shift: boolean;
	meta: boolean;
}) => void;

export const killProcessKeys: KeypressListener = (_, {name, ctrl}) => {
	if ((name === 'c' && ctrl) || (name === 'escape')) {
		exitHandler(1);
	}
};

process.openStdin().on('keypress', killProcessKeys);
