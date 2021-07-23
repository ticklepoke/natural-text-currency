import { currencyParser } from '..';

describe('currencyParser', () => {
	it.each([
		['$1000', '1000'],
		['100SGD', '100'],
		['100k SGD', '100000'],
		['$100k', '100000'],
		['10k sgd', '10000'],
		['10k singapore dollars', '10000'],
		['10k Singapore dollars', '10000'],
		['10k Singapore Dollars', '10000'],
		['10k cents', '100'],
		['10k dollars', '10000'],
		['0.01 cents', '0.0001'],
		['$100,000', '100000'],
		['100,000 sgd', '100000'],
	])('parses input %s, output expected %s', (input, expected) => {
		const money = currencyParser.tryParse(input);
		expect(money.value).toEqual(expected);
	});

	it.each([['$1000cents'], ['100'], ['$$10']])('throws input %s', (input) => {
		expect(() => currencyParser.tryParse(input)).toThrow();
	});
});
