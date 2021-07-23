import P from 'parsimmon';
import { stringInsensitive } from './string';

const multipliers = {
	SGD: 1,
	'singapore dollars': 1,
	'singapore cents': 0.01,
	dollars: 1,
	$: 1,
	cents: 0.01,
	'￠': 0.01,
};

function createPostfixParsers(multipliers: Record<string, number>) {
	const ps = Object.keys(multipliers).map((k) => stringInsensitive(k).map(() => multipliers[k]));
	return P.alt(...ps);
}

export const postfixParser = createPostfixParsers(multipliers);
