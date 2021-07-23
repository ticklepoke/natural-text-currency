import { _forTest } from '../numbers';

const { thousandsParser, decimalParser, numberParser } = _forTest;

describe('thousandsBlock', () => {
	it.each([
		['1,000', '1000'],
		['12,000', '12000'],
		['123,000', '123000'],
		['1,123', '1123'],
		['12,123', '12123'],
		['123,123', '123123'],
		['123,123,123', '123123123'],
		['123,123,123,123', '123123123123'],
	])('parses input %s, expected %s', (input, expected) => {
		expect(thousandsParser.tryParse(input)).toEqual(expected);
	});

	it.each([['11,1'], ['111,1'], ['1,'], [',1']])('throws input %s', (input) => {
		expect(() => thousandsParser.tryParse(input)).toThrow();
	});
});

describe('decimalParser', () => {
	it.each([
		['.0', '.0'],
		['.123', '.123'],
		['.1234', '.1234'],
	])('parses input %s, expected %s', (input, expected) => {
		expect(decimalParser.tryParse(input)).toEqual(expected);
	});

	it.each([['.0.'], ['00'], ['1.']])('throws input %s', (input) => {
		expect(() => decimalParser.tryParse(input)).toThrow();
	});
});

describe('number parser', () => {
	it.each([
		['1,000.0', '1000.0'],
		['12,000.1', '12000.1'],
		['1', '1'],
		['10,000', '10000'],
		['100.0', '100.0'],
		['1000.0', '1000.0'],
		['10000.0', '10000.0'],
		['100000.0', '100000.0'],
		['10,000.0', '10000.0'],
		['100,000.0', '100000.0'],
	])('parses input %s, expected %s', (input, expected) => {
		expect(numberParser.tryParse(input)).toEqual(expected);
	});

	it.each([['.0.'], ['a00'], ['1..']])('throws input %s', (input) => {
		expect(() => numberParser.tryParse(input)).toThrow();
	});
});
