import { multiplierParser } from '../multiplier';

describe('prefixParser', () => {
	it.each([
		['K', 1000],
		['B', 1000000000],
	])('parses input %s, expected %i', (input, expected) => {
		expect(multiplierParser.tryParse(input)).toEqual(expected);
	});

	it.each([['a'], ['u']])('throws for input %s', (input) => {
		expect(() => multiplierParser.tryParse(input)).toThrow();
	});
});
