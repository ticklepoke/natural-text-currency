import { prefixParser } from '../prefix';

describe('prefixParser', () => {
	it.each([
		['SGD', 'SGD'],
		['$', 'SGD'],
	])('parses input %s, expected %s', (input, expected) => {
		expect(prefixParser.tryParse(input)).toEqual(expected);
	});

	it.each([['USD'], ['%']])('throws for input %s', (input) => {
		expect(() => prefixParser.tryParse(input)).toThrow();
	});
});
