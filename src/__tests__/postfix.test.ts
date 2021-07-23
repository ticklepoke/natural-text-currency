import { postfixParser } from '../postfix';

describe('prefixParser', () => {
	it.each([
		['SGD', 1],
		['$', 1],
		['cents', 0.01],
		['￠', 0.01],
	])('parses input %s, expected %i', (input, expected) => {
		expect(postfixParser.tryParse(input)).toEqual(expected);
	});

	it.each([['USD'], ['%']])('throws for input %s', (input) => {
		expect(() => postfixParser.tryParse(input)).toThrow();
	});
});
