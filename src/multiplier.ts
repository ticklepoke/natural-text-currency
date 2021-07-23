import P from 'parsimmon';
import { stringInsensitive } from './string';

const multipliers = {
	k: 1000,
	m: 1000000,
	b: 1000000000,
	t: 1000000000000,
};

function createMultiplierParser(multipliers: Record<string, number>) {
	const ps = Object.keys(multipliers).map((k) => stringInsensitive(k).map(() => multipliers[k]));
	return P.alt(...ps);
}

export const multiplierParser = createMultiplierParser(multipliers);
