import { currencyParser } from '..';

describe('currencyParser', () => {
	it.each([
		['$1000', '1000'],
		['100SGD', '100'],
		['100k SGD', '100000'],
		['$100k', '100000'],
		['10k sgd', '10000'],
	])('parses input %s, output expected %s', (input, expected) => {
		const money = currencyParser.tryParse(input);
		expect(money.value).toEqual(expected);
	});

	it.each([['$1000cents'], ['100'], ['$$10']])('throws input %s', (input) => {
		expect(() => currencyParser.tryParse(input)).toThrow();
	});
});
