import P from 'parsimmon';
import { Money } from './Money';
import { multiplierParser } from './multiplier';
import { numberParser } from './numbers';
import { postfixParser } from './postfix';
import { prefixParser } from './prefix';

const _ = P.optWhitespace;

const prefix = P.seqMap(
	prefixParser.trim(_),
	numberParser.trim(_),
	multiplierParser.atMost(1),
	(currency, value, [multiplier]) => new Money((parseFloat(value) * (multiplier ?? 1)).toString(), currency)
);

const postfix = P.seqMap(
	numberParser.trim(_),
	multiplierParser.trim(_).atMost(1),
	postfixParser.trim(_),
	(value, [multiplier], postfix) => new Money((parseFloat(value) * (multiplier ?? 1) * postfix).toString(), 'SGD')
);

export const currencyParser = P.alt(prefix, postfix);
