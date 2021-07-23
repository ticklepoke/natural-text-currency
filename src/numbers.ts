import P from 'parsimmon';
import { head, join } from './arrayUtils';

const thousandsParser = P.seqMap(
	P.digit.times(1, 3),
	P.string(',').then(P.digit.times(3)).atLeast(1),
	(head, rest) => join(head) + join(rest.map(join))
);

const decimalParser = P.seq(P.string('.'), P.digits).map(join);

export const numberParser = P.seq(P.alt(thousandsParser, P.digits), decimalParser.atMost(1)).map(([main, decimal]) =>
	decimal.length > 0 ? main + head(decimal) : main
);

export const _forTest = {
	thousandsParser,
	decimalParser,
	numberParser,
};
